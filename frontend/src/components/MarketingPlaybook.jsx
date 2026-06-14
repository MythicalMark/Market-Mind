export default function MarketingPlaybook({ data }) {
  if (!data || data.length === 0) {
    return <p>No marketing playbook available.</p>;
  }

  return (
    <div className="playbook-grid">
      {data.map((item) => (
        <div className="playbook-card" key={item.SegmentName}>
          <h3>{item.SegmentName}</h3>

          <p>
            <strong>Campaign Type:</strong> {item.CampaignType}
          </p>

          <p>
            <strong>Customers:</strong> {item.Customers}
          </p>

          <p>
            <strong>Revenue:</strong> €{Number(item.Revenue).toFixed(2)}
          </p>

          <p>
            <strong>Strategy:</strong> {item.Strategy}
          </p>

          <h4>Recommended Actions</h4>

          <ul>
            {item.Actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}