import pandas as pd

def calculate_rfm(df):

    df["InvoiceDate"] = pd.to_datetime(df["InvoiceDate"])

    snapshot_date = df["InvoiceDate"].max()

    rfm = df.groupby("CustomerID").agg({
        "InvoiceDate": lambda x: (snapshot_date - x.max()).days,
        "InvoiceNo": "nunique",
        "TotalPrice": "sum"
    })

    rfm.columns = ["Recency", "Frequency", "Monetary"]
    rfm["CLV"] = (
    rfm["Monetary"] *
    1.5
)
    rfm = rfm.reset_index()

    return rfm