import { motion } from "framer-motion";
import { FiTrendingUp, FiUsers, FiMapPin, FiBarChart2 } from "react-icons/fi";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// 🔥 Dummy Data
const revenueData = [
  { month: "Jan", revenue: 40000 },
  { month: "Feb", revenue: 60000 },
  { month: "Mar", revenue: 80000 },
  { month: "Apr", revenue: 120000 },
];

const engagementData = [
  { name: "Posts", value: 1200 },
  { name: "Comments", value: 800 },
  { name: "Shares", value: 400 },
];

const Reports = () => {
  return (
    <div>
      {/* 🔥 HEADER */}
      <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>

      {/* 📊 TOP STATS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Most Visited Temple", value: "Palitana" },
          { label: "Most Active Group", value: "Jain Youth" },
          { label: "Most Active Event", value: "Paryushan" },
          { label: "Total Revenue", value: "₹15,50,000" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-xl shadow"
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <h2 className="text-lg font-bold">{item.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* 📈 CHARTS */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* 💰 Revenue Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <FiTrendingUp /> Membership Revenue
          </h2>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#542126"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 📊 Engagement Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <FiBarChart2 /> Content Engagement
          </h2>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={engagementData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#542126" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 📍 ADDITIONAL INSIGHTS */}
      <div className="grid grid-cols-3 gap-4">
        {/* Temple Stats */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold flex items-center gap-2">
            <FiMapPin /> Temple Insights
          </h2>

          <p className="text-sm mt-2">Palitana - 50,000 visits</p>
          <p className="text-sm">Girnar - 35,000 visits</p>
          <p className="text-sm">Shankheshwar - 28,000 visits</p>
        </div>

        {/* Sadhu Tracking */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold flex items-center gap-2">
            <FiUsers /> Sadhu Tracking Usage
          </h2>

          <p className="text-sm mt-2">Active Tracking: 1200 users</p>
          <p className="text-sm">Alerts Triggered: 85</p>
        </div>

        {/* Events */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold flex items-center gap-2">
            <FiUsers /> Events Analytics
          </h2>

          <p className="text-sm mt-2">Paryushan - 10,000 attendees</p>
          <p className="text-sm">Mahaveer Janmotsav - 8,500</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
