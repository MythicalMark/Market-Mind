import { useState } from "react";

import FileUpload from "../components/FileUpload";
import KPICard from "../components/KPICard";
import SegmentTable from "../components/SegmentTable";
import ClusterScatterPlot from "../components/ClusterScatterPlot";
import SegmentSummary from "../components/SegmentSummary";
import MarketingPlaybook from "../components/MarketingPlaybook";
import RevenueBySegmentChart from "../components/RevenueBySegmentChart";
import CohortTable from "../components/CohortTable";
import LLMInsights from "../components/LLMInsights";
import ROISimulator from "../components/ROISimulator";

export default function DashboardPage() {
  const [results, setResults] = useState([]);
  const [segmentSummary, setSegmentSummary] = useState([]);
  const [playbook, setPlaybook] = useState([]);

  const handleUploadSuccess = (response) => {
    setResults(response.customers || []);
    setSegmentSummary(response.segments || []);
    setPlaybook(response.playbook || []);
    setCohort(response.cohort || []);
    setInsights(response.insights||[]);
  };

  const totalCustomers = results.length;

  const totalRevenue = results.reduce(
    (sum, row) => sum + Number(row.Monetary || 0),
    0
  );

  const totalSegments = new Set(results.map((row) => row.Cluster)).size;
  const [cohort,setCohort] = useState([]);
  const [insights,setInsights]=useState([]);

  return (
    <div className="container">
      <h1>MarketMind Dashboard</h1>

      <div className="card">
        <FileUpload onUploadSuccess={handleUploadSuccess} />
      </div>

      <div className="card">
        <h2>Key Metrics</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <KPICard title="Customers" value={totalCustomers} />
          <KPICard title="Revenue" value={`€${totalRevenue.toFixed(2)}`} />
          <KPICard title="Segments" value={totalSegments} />
        </div>
      </div>

      <div className="card">
        <h2>Customer Segments</h2>
        <SegmentTable data={results} />
      </div>

      <div className="card">
        <h2>Cluster Visualization</h2>
        <ClusterScatterPlot data={results} />
      </div>

      <div className="card">
        <h2>Segment Summary</h2>
        <SegmentSummary data={segmentSummary} />
      </div>

      <div className="card">
        <h2>Marketing Playbook</h2>
        <MarketingPlaybook data={playbook} />
      </div>
      <div className="card">

  <h2> Revenue by Segment</h2>

  <RevenueBySegmentChart
    data={segmentSummary}
  />

</div>
<div className="card">
<h2>Cohort Analysis
</h2>
<CohortTable
data={cohort}
/>
</div>
<div className="card">
<h2>LLM Insights</h2>
<LLMInsights
data={insights}
/>

</div>
<div className="card">
  <h2>ROI Simulator</h2>
  <ROISimulator segments={segmentSummary} />
</div>
    </div>
  );
}