export default function SegmentSummary({ data }) {

  if (!data || data.length === 0) {
    return <p>No summary available.</p>;
  }

  return (

    <table>

      <thead>

        <tr>

          <th>Segment</th>

          <th>Customers</th>

          <th>Revenue</th>

          <th>Avg Recency</th>

          <th>Avg Frequency</th>

          <th>Avg Monetary</th>

          <th>Avg CLV</th>

        </tr>

      </thead>


      <tbody>

        {data.map((row) => (

          <tr key={row.SegmentName}>

            <td>{row.SegmentName}</td>

            <td>{row.Customers}</td>

            <td>
              €
              {Number(row.Revenue).toFixed(2)}
            </td>

            <td>
              {Number(row.AvgRecency).toFixed(1)}
            </td>

            <td>
              {Number(row.AvgFrequency).toFixed(1)}
            </td>

            <td>
              €
              {Number(row.AvgMonetary).toFixed(2)}
            </td>

            <td>€{Number(row.AvgCLV).toFixed(2)}</td>

          </tr>

        ))}

      </tbody>

    </table>

  );
}