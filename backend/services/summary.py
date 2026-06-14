import pandas as pd


def generate_segment_summary(df):

    summary = df.groupby("SegmentName").agg(

        Customers=("CustomerID", "count"),

        Revenue=("Monetary", "sum"),

        AvgRecency=("Recency", "mean"),

        AvgFrequency=("Frequency", "mean"),

        AvgMonetary=("Monetary", "mean"),

        AvgCLV=("CLV", "mean")

)

    summary = summary.reset_index()

    return summary