import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiUser,
  FiMapPin,
  FiCheck,
  FiX,
  FiPlus,
  FiActivity,
  FiAlertTriangle,
} from "react-icons/fi";

// 🔥 Dummy data
const generateSadhus = () =>
  Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Maharasaheb ${i + 1}`,
    sect: i % 2 === 0 ? "Shwetambar" : "Digambar",
    followers: Math.floor(Math.random() * 50000),
    location: ["Ahmedabad", "Jaipur", "Mumbai"][i % 3],
    verified: i % 2 === 0,
    liveTracking: i % 2 === 0,
    emergency: i % 3 === 0,
    posts: Math.floor(Math.random() * 100),
  }));

const Sadhu = () => {
  const [sadhus, setSadhus] = useState(generateSadhus());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 Search + Filter
  const filtered = useMemo(() => {
    return sadhus.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());

      const matchFilter = filter === "All" ? true : s.sect === filter;

      return matchSearch && matchFilter;
    });
  }, [sadhus, search, filter]);

  return (
    <div>
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sadhu-Sant Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg"
          style={{ background: "#542126" }}
        >
          <FiPlus /> Add Maharasaheb
        </button>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center bg-white border px-4 py-2 rounded-xl w-96 shadow-sm">
          <FiSearch />
          <input
            placeholder="Search Maharasaheb..."
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
          <option>Shwetambar</option>
          <option>Digambar</option>
        </select>
      </div>

      {/* 📊 GRID */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((s) => (
          <motion.div
            key={s.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-4 rounded-xl shadow cursor-pointer"
            onClick={() => setSelected(s)}
          >
            <h2 className="font-semibold flex items-center gap-2">
              <FiUser /> {s.name}
            </h2>

            <p className="text-sm text-gray-500">{s.sect}</p>

            <p className="text-sm flex items-center gap-1 mt-1">
              <FiMapPin /> {s.location}
            </p>

            <div className="mt-2 text-xs flex justify-between">
              <span>Followers: {s.followers}</span>
              <span>Posts: {s.posts}</span>
            </div>

            {/* Status */}
            <div className="flex justify-between mt-3">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  s.verified
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {s.verified ? "Verified" : "Pending"}
              </span>

              {s.emergency && <FiAlertTriangle className="text-red-500" />}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 DETAIL MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-[500px]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-lg font-bold mb-3">{selected.name}</h2>

              <p>Sect: {selected.sect}</p>
              <p>Location: {selected.location}</p>
              <p>Followers: {selected.followers}</p>

              {/* Toggles */}
              <div className="mt-3 space-y-2">
                <label className="flex justify-between">
                  Live Tracking
                  <input type="checkbox" checked={selected.liveTracking} />
                </label>

                <label className="flex justify-between">
                  Emergency Alert
                  <input type="checkbox" checked={selected.emergency} />
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button className="px-3 py-2 bg-green-100 text-green-600 rounded">
                  <FiCheck /> Approve
                </button>

                <button className="px-3 py-2 bg-red-100 text-red-600 rounded">
                  <FiX /> Reject
                </button>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 w-full py-2 text-white rounded"
                style={{ background: "#542126" }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 ADD MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-[450px]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h2 className="font-bold mb-3">Add Maharasaheb</h2>

              <input
                placeholder="Name"
                className="border p-2 w-full mb-2 rounded"
              />

              <select className="border p-2 w-full mb-2 rounded">
                <option>Shwetambar</option>
                <option>Digambar</option>
              </select>

              <input
                placeholder="Current Location"
                className="border p-2 w-full mb-2 rounded"
              />

              <input
                placeholder="Followers"
                className="border p-2 w-full mb-2 rounded"
              />

              <textarea
                placeholder="Bio"
                className="border p-2 w-full mb-2 rounded"
              />

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2 text-white rounded"
                style={{ background: "#542126" }}
              >
                Create
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sadhu;
