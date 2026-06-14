from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans


def assign_segment_names(rfm):
    """
    Assigns unique business-friendly names to clusters.
    Names are based on ranked cluster statistics, not only if/else rules.
    This prevents duplicate names such as two 'Regular Customers' segments.
    """

    cluster_summary = (
        rfm.groupby("Cluster")
        .agg(
            AvgRecency=("Recency", "mean"),
            AvgFrequency=("Frequency", "mean"),
            AvgMonetary=("Monetary", "mean"),
            AvgCLV=("CLV", "mean"),
            Customers=("CustomerID", "count"),
        )
        .reset_index()
    )

    cluster_summary["ValueScore"] = (
        cluster_summary["AvgMonetary"] * 0.5
        + cluster_summary["AvgCLV"] * 0.3
        + cluster_summary["AvgFrequency"] * 0.2
        - cluster_summary["AvgRecency"] * 0.1
    )

    cluster_summary = cluster_summary.sort_values(
        by="ValueScore",
        ascending=False
    ).reset_index(drop=True)

    available_names = [
        "VIP Customers",
        "Loyal Buyers",
        "Growing Customers",
        "Regular Customers",
        "Low Value Customers",
        "At Risk Customers",
        "Dormant Customers",
        "New Customers",
        "Price Sensitive Customers",
        "Occasional Buyers",
    ]

    segment_names = {}

    for index, row in cluster_summary.iterrows():
        cluster = row["Cluster"]

        if index < len(available_names):
            segment_names[cluster] = available_names[index]
        else:
            segment_names[cluster] = f"Customer Segment {index + 1}"

    rfm["SegmentName"] = rfm["Cluster"].map(segment_names)

    return rfm


def cluster_customers(rfm):
    features = rfm[["Recency", "Frequency", "Monetary"]]

    scaler = StandardScaler()
    scaled = scaler.fit_transform(features)

    n_clusters = min(5, len(rfm))

    kmeans = KMeans(
        n_clusters=n_clusters,
        random_state=42,
        n_init=10
    )

    rfm["Cluster"] = kmeans.fit_predict(scaled)

    rfm = assign_segment_names(rfm)

    return rfm