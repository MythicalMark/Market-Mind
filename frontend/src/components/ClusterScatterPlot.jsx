import PlotlyComponent from "react-plotly.js";

const Plot = PlotlyComponent.default || PlotlyComponent;

export default function ClusterScatterPlot({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const clusters = [...new Set(data.map((row) => row.Cluster))];

  const traces = clusters.map((cluster) => {
    const clusterData = data.filter((row) => row.Cluster === cluster);
    const segmentName = clusterData[0]?.SegmentName || `Cluster ${cluster}`;

    return {
      x: clusterData.map((row) => row.Frequency),
      y: clusterData.map((row) => row.Monetary),
      text: clusterData.map(
        (row) =>
          `Customer ${row.CustomerID}<br>` +
          `Segment: ${row.SegmentName}<br>` +
          `Frequency: ${row.Frequency}<br>` +
          `Monetary: €${Number(row.Monetary).toFixed(2)}`
      ),
      mode: "markers",
      type: "scatter",
      name: segmentName,
      marker: {
        size: 12,
      },
      hovertemplate: "%{text}<extra></extra>",
    };
  });

  return (
    <Plot
      data={traces}
      layout={{
        title: "Frequency vs Monetary by Segment",
        xaxis: { title: "Frequency" },
        yaxis: { title: "Monetary Value (€)" },
        autosize: true,
        height: 500,
      }}
      style={{ width: "100%" }}
      useResizeHandler={true}
    />
  );
}