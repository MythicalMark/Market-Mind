import PlotlyComponent from "react-plotly.js";

const Plot = PlotlyComponent.default || PlotlyComponent;


export default function RevenueBySegmentChart({ data }) {

  if (!data || data.length === 0) {

    return <p>No chart data.</p>;

  }


  return (
    <Plot
      data={[
        {
          x: data.map(
            (row) => row.SegmentName
          ),
          y: data.map(
            (row) => row.Revenue
          ),
          type: "bar",
          text: data.map(
            row =>
              `€${row.Revenue.toFixed(0)}`
          ),
          textposition: "outside"
        }
      ]}
      layout={{
        title:
        "Revenue by Segment",
        xaxis: {
          title:
          "Segment"
        },
        yaxis: {
          title:
          "Revenue (€)"
        },
        height: 450,
        autosize: true
      }}
      style={{
        width: "100%"
      }}
      useResizeHandler={true}

    />

  );

}