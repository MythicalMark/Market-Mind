import { useState } from "react";

export default function ROISimulator({ segments }) {
  const [selectedSegment, setSelectedSegment] = useState("");
  const [campaignCost, setCampaignCost] = useState(1000);
  const [uplift, setUplift] = useState(10);

  if (!segments || segments.length === 0) {
    return <p>No segment data available for ROI simulation.</p>;
  }

  const segment = segments.find(
    (item) => item.SegmentName === selectedSegment
  );

  const segmentRevenue = segment ? Number(segment.Revenue) : 0;
  const expectedRevenue = segmentRevenue * (Number(uplift) / 100);
  const profit = expectedRevenue - Number(campaignCost);
  const roi =
    Number(campaignCost) > 0
      ? (profit / Number(campaignCost)) * 100
      : 0;

  return (
    <div className="roi-simulator">
      <div className="roi-form">
        <label>
          Segment
          <select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
          >
            <option value="">Select segment</option>

            {segments.map((segment) => (
              <option
                key={segment.SegmentName}
                value={segment.SegmentName}
              >
                {segment.SegmentName}
              </option>
            ))}
          </select>
        </label>

        <label>
          Campaign Cost (€)
          <input
            type="number"
            value={campaignCost}
            onChange={(e) => setCampaignCost(e.target.value)}
          />
        </label>

        <label>
          Expected Uplift (%)
          <input
            type="number"
            value={uplift}
            onChange={(e) => setUplift(e.target.value)}
          />
        </label>
      </div>

      <div className="roi-results">
        <div>
          <strong>Segment Revenue:</strong>
          <p>€{segmentRevenue.toFixed(2)}</p>
        </div>

        <div>
          <strong>Expected Extra Revenue:</strong>
          <p>€{expectedRevenue.toFixed(2)}</p>
        </div>

        <div>
          <strong>Estimated Profit:</strong>
          <p>€{profit.toFixed(2)}</p>
        </div>

        <div>
          <strong>Estimated ROI:</strong>
          <p>{roi.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}