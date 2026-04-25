import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiSearch,
} from "react-icons/fi";

import { GiTempleGate } from "react-icons/gi";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 1200 },
];

export default function Dashboard() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Dashboard Overview</h1>
        <p style={{ opacity: 0.7 }}>
          Monitor your platform performance & activity
        </p>
      </div>

      {/* 🔍 Search + Filter */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <div className="search">
            <FiSearch />
            <input placeholder="Search users, temples, events..." />
          </div>

          <select className="btn">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last Year</option>
            <option>Custom Range</option>
          </select>

        </div>
      </div>

      {/* 📊 Stats Cards */}
      <div className="dashboard-grid">

        <div className="card stat-card">
          <div className="stat-header">
            <FiUsers />
            <span>Total Users</span>
          </div>
          <h1>1200</h1>
          <p className="positive">+45 this week</p>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <FiCheckCircle />
            <span>Memberships</span>
          </div>
          <p>Active: <b>320</b></p>
          <p>Inactive: <b>80</b></p>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <FiClock />
            <span>Pending</span>
          </div>
          <p>Posts: 10</p>
          <p>Profiles: 5</p>
          <p>Events: 3</p>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <GiTempleGate />
            <span>Quick Stats</span>
          </div>
          <p>Temples: 150</p>
          <p>Sadhus: 40</p>
          <p>Groups: 25</p>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <FiTrendingUp />
            <span>Revenue</span>
          </div>
          <p>Gold: ₹30,000</p>
          <p>Silver: ₹15,000</p>
        </div>

      </div>

      {/* 📈 Chart Section */}
      <div className="card" style={{ marginTop: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <h2>User Growth</h2>
          <span style={{ fontSize: 14, opacity: 0.6 }}>Monthly</span>
        </div>

        <div style={{ height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="var(--accent)"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}