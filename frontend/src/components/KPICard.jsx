export default function KPICard({ title, value }) {
  return (
    <div style={{
      padding: "10px",
      background: "#f0f0f0",
      borderRadius: "8px",
      minWidth: "120px"
    }}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}