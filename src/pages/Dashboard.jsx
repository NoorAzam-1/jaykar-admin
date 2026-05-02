import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiFileText,
  FiActivity,
  FiPhone,
  FiUser,
  FiHome,
} from "react-icons/fi";

const data = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 130 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 140 },
  { day: "Fri", value: 200 },
  { day: "Sat", value: 240 },
  { day: "Sun", value: 210 },
];

const Dashboard = () => {
  return (
    <div>
      {/* 🔥 Stats Cards with animation */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { title: "TOTAL USERS", value: "28,940", icon: <FiUsers /> },
          { title: "ACTIVE INTERESTS", value: "5,230", icon: <FiActivity /> },
          { title: "ACTIVE LISTINGS", value: "18,200", icon: <FiFileText /> },
          { title: "CONTACT PURCHASES", value: "₹2.4L", icon: <FiPhone /> },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-xl font-bold">{item.value}</h2>
            </div>
            <div className="text-2xl text-gray-400">{item.icon}</div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Graph + Activity */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* 📊 Modern Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 bg-white p-4 rounded-xl shadow"
        >
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold">User Activity</h2>
            <span className="text-sm text-gray-500">Last 7 Days</span>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#542126"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* 🔥 Modern Activity Panel */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white p-4 rounded-xl shadow"
        >
          <h2 className="font-semibold mb-4">Recent Activity</h2>

          {[
            {
              icon: <FiUser />,
              text: "Rahul Sharma",
              sub: "Unlocked contact",
              price: "₹99",
            },
            {
              icon: <FiHome />,
              text: "Sneha Jain",
              sub: "Listed property",
              status: "Listed",
            },
            {
              icon: <FiUser />,
              text: "Amit Shah",
              sub: "Unlocked contact",
              price: "₹99",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full text-gray-600">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm font-medium">{item.text}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </div>

              <div className="text-sm font-semibold text-green-500">
                {item.price || item.status}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-white p-4 rounded-xl shadow"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Recent Activity</h2>
          <span className="text-xs text-gray-400">Live Updates</span>
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {[
            {
              name: "Rahul Sharma",
              action: "Unlocked contact",
              amount: "₹99",
              icon: <FiUser />,
              color: "bg-blue-100 text-blue-600",
            },
            {
              name: "Sneha Jain",
              action: "Listed property",
              status: "Listed",
              icon: <FiHome />,
              color: "bg-green-100 text-green-600",
            },
            {
              name: "Amit Shah",
              action: "Unlocked contact",
              amount: "₹99",
              icon: <FiUser />,
              color: "bg-purple-100 text-purple-600",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                {/* Icon circle */}
                <div className={`p-2 rounded-full ${item.color}`}>
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.action}</p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${
                    item.amount ? "text-green-500" : "text-green-600"
                  }`}
                >
                  {item.amount || item.status}
                </p>
                <p className="text-xs text-gray-400">2m ago</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
