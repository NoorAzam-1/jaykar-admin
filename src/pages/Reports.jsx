import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import {
  FiMapPin,
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

/* Dummy Data */
const templeData = [
  { name: "Temple A", visits: 400 },
  { name: "Temple B", visits: 300 },
  { name: "Temple C", visits: 500 },
];

const revenueData = [
  { month: "Jan", revenue: 20000 },
  { month: "Feb", revenue: 30000 },
  { month: "Mar", revenue: 25000 },
  { month: "Apr", revenue: 40000 },
];

export default function Reports() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Reports & Analytics</h1>
        <p style={{ opacity: 0.7 }}>
          Monitor platform performance & insights
        </p>
      </div>

      {/* 📊 Stats */}
      <div className="dashboard-grid" style={{ marginBottom: 20 }}>
        <div className="card">
          <h2><FiMapPin /> Top Temples</h2>
          <p>Most visited temples</p>
        </div>

        <div className="card">
          <h2><FiTrendingUp /> Active Events</h2>
          <p>Most active events/groups</p>
        </div>

        <div className="card">
          <h2><FiUsers /> Tracking Usage</h2>
          <p>Sadhu-sant activity stats</p>
        </div>

        <div className="card">
          <h2><FiBarChart2 /> Engagement</h2>
          <p>Content engagement analytics</p>
        </div>
      </div>

      {/* 🏛 Most Visited Temples */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Most Visited Temples</h2>

        <div style={{ height: 250 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={templeData}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="visits" fill="var(--accent)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 💰 Revenue Report */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Membership Revenue</h2>

        <div style={{ height: 250 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--accent)"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 📈 Other Insights */}
      <div className="dashboard-grid">
        <div className="card">
          <h2>Most Active Groups</h2>
          <p>Jain Youth Group - 120 posts</p>
          <p>Digambar Community - 80 posts</p>
        </div>

        <div className="card">
          <h2>Sadhu Tracking Usage</h2>
          <p>Active Tracking: 60</p>
          <p>Alerts Triggered: 15</p>
        </div>

        <div className="card">
          <h2>Content Engagement</h2>
          <p>Likes: 12K</p>
          <p>Comments: 3K</p>
          <p>Shares: 1.5K</p>
        </div>
      </div>
    </div>
  );
}