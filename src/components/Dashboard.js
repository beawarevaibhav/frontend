import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Formatting", score: 80 },
  { name: "Keywords", score: 70 },
  { name: "Clarity", score: 85 },
  { name: "Experience", score: 65 },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>

      <div className="cards">
        <div className="card">
          <h3>Resume Score</h3>
          <p>78 / 100</p>
        </div>
        <div className="card">
          <h3>Keywords Matched</h3>
          <p>15 / 20</p>
        </div>
        <div className="card">
          <h3>Sections Completed</h3>
          <p>4 / 5</p>
        </div>
      </div>

      <div className="chart-container">
        <h3>Scoring Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
