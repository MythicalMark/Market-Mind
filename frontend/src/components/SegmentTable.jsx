export default function SegmentTable({ data }) {
  if (!data || data.length === 0) {
    return <p>No results yet. Upload a dataset.</p>;
  }

  return (
    <div className="table-container">

      <table>

        <thead>

          <tr>
            <th>Customer ID</th>
            <th>Recency</th>
            <th>Frequency</th>
            <th>Monetary</th>
            <th>Cluster</th>
            <th>Segment Name</th>
            <th>CLV</th>
          </tr>

        </thead>

        <tbody>

          {data.map((row) => (

            <tr key={row.CustomerID}>

              <td>{row.CustomerID}</td>

              <td>{row.Recency}</td>

              <td>{row.Frequency}</td>

              <td>
                €{Number(row.Monetary).toFixed(2)}
              </td>

              <td>{row.Cluster}</td>

              <td>{row.SegmentName}</td>

              <td>
              €{Number(row.CLV).toFixed(2)}</td>
              

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}