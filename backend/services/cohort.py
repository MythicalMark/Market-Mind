import pandas as pd


def generate_cohort(df):

    cohort_df = df.copy()

    cohort_df["InvoiceDate"] = pd.to_datetime(cohort_df["InvoiceDate"])

    cohort_df["InvoiceMonth"] = (
        cohort_df["InvoiceDate"]
        .dt.to_period("M")
    )

    cohort_df["CohortMonth"] = (cohort_df.groupby("CustomerID")["InvoiceDate"].transform("min").dt.to_period("M"))

    cohort_df["CohortIndex"] = (cohort_df["InvoiceMonth"] - cohort_df["CohortMonth"]).apply(lambda x: x.n)

    grouped = cohort_df.groupby(["CohortMonth","CohortIndex" ])["CustomerID"]


    cohort_counts = (grouped.nunique().reset_index())


    cohort_pivot = cohort_counts.pivot(index="CohortMonth",columns="CohortIndex",values="CustomerID")


    cohort_size = cohort_pivot.iloc[:, 0]


    retention = (cohort_pivot.divide(cohort_size,axis=0) * 100)


    retention = (retention.round(1).fillna(0))

    retention.index = (retention.index.astype(str))


    return retention