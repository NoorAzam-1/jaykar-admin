import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiCreditCard,
  FiUsers,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

// 🔥 Dummy users
const generateUsers = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    type: i % 2 === 0 ? "Gold" : "Silver",
    status: i % 3 === 0 ? "Expired" : "Active",
    renewal: "12 Apr 2026",
    noAds: i % 2 === 0,
  }));

const Membership = () => {
  const [users, setUsers] = useState(generateUsers());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // 🔍 Filter
  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());

      const matchFilter = filter === "All" ? true : u.type === filter;

      return matchSearch && matchFilter;
    });
  }, [users, search, filter]);

  // 🔥 Toggle No Ads
  const toggleAds = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, noAds: !u.noAds } : u)),
    );
  };

  return (
    <div>
      {/* 🔥 HEADER */}
      <h1 className="text-2xl font-bold mb-4">Membership & Coins Management</h1>

      {/* 💳 MEMBERSHIP CARDS */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold flex items-center gap-2">
            <FiCreditCard /> Gold Membership
          </h2>
          <p className="text-2xl font-bold mt-2">₹1000/month</p>
          <p className="text-sm text-gray-500">Premium benefits, no ads</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold flex items-center gap-2">
            <FiCreditCard /> Silver Membership
          </h2>
          <p className="text-2xl font-bold mt-2">₹500/month</p>
          <p className="text-sm text-gray-500">Basic benefits</p>
        </div>
      </div>

      {/* 📊 STATS */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[
          { label: "Active Users", value: "15,400" },
          { label: "Revenue", value: "₹15,50,000" },
          { label: "Expired", value: "2,100" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">{item.label}</p>
            <h2 className="text-xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center bg-white border px-4 py-2 rounded-xl w-96 shadow-sm">
          <FiSearch />
          <input
            placeholder="Search users..."
            className="ml-2 w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border px-3 py-2 rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Gold</option>
          <option>Silver</option>
        </select>
      </div>

      {/* 📊 TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th>Name</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Renewal</th>
              <th>No Ads</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((u) => (
              <motion.tr
                key={u.id}
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="border-t text-center"
              >
                <td className="py-3 flex items-center justify-center gap-2">
                  <FiUsers /> {u.name}
                </td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      u.type === "Gold"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {u.type}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>

                <td>{u.renewal}</td>

                <td>
                  <button onClick={() => toggleAds(u.id)}>
                    {u.noAds ? (
                      <FiToggleRight className="text-green-500 text-xl" />
                    ) : (
                      <FiToggleLeft className="text-gray-400 text-xl" />
                    )}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Membership;
