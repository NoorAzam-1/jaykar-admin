import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUsers,
  FiSearch,
  FiPlus,
  FiCheck,
  FiX,
  FiTrash2,
} from "react-icons/fi";

// 🔥 Dummy Data
const generateGroups = () =>
  Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Jain Group ${i + 1}`,
    affiliation: i % 2 === 0 ? "Shwetambar" : "Digambar",
    members: Math.floor(Math.random() * 20000),
    posts: Math.floor(Math.random() * 500),
    founded: 2015 + (i % 5),
    status: i % 3 === 0 ? "Pending" : "Approved",
    purpose: "Community discussion & events",
  }));

const Groups = () => {
  const [groups, setGroups] = useState(generateGroups());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 Filter
  const filtered = useMemo(() => {
    return groups.filter((g) => {
      const matchSearch = g.name.toLowerCase().includes(search.toLowerCase());

      const matchFilter = filter === "All" ? true : g.status === filter;

      return matchSearch && matchFilter;
    });
  }, [groups, search, filter]);

  // 🔥 Actions
  const updateStatus = (id, status) => {
    setGroups((prev) => prev.map((g) => (g.id === id ? { ...g, status } : g)));
  };

  const deleteGroup = (id) => {
    setGroups((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <div>
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Groups Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg"
          style={{ background: "#542126" }}
        >
          <FiPlus /> Create Group
        </button>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center bg-white border px-4 py-2 rounded-xl w-96 shadow-sm">
          <FiSearch />
          <input
            placeholder="Search groups..."
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
          <option>Approved</option>
          <option>Pending</option>
        </select>
      </div>

      {/* 📊 GRID */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((g) => (
          <motion.div
            key={g.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-4 rounded-xl shadow cursor-pointer"
            onClick={() => setSelected(g)}
          >
            <h2 className="font-semibold flex items-center gap-2">
              <FiUsers /> {g.name}
            </h2>

            <p className="text-sm text-gray-500">{g.affiliation}</p>

            <div className="text-xs mt-2 flex justify-between">
              <span>Members: {g.members}</span>
              <span>Posts: {g.posts}</span>
            </div>

            <p className="text-xs text-gray-400 mt-1">Founded: {g.founded}</p>

            {/* Status */}
            <div className="mt-3 flex justify-between items-center">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  g.status === "Approved"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {g.status}
              </span>

              {/* Actions */}
              <div className="flex gap-2">
                <FiCheck
                  className="text-green-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateStatus(g.id, "Approved");
                  }}
                />
                <FiX
                  className="text-red-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateStatus(g.id, "Rejected");
                  }}
                />
                <FiTrash2
                  className="text-gray-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteGroup(g.id);
                  }}
                />
              </div>
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

              <p>Affiliation: {selected.affiliation}</p>
              <p>Members: {selected.members}</p>
              <p>Posts: {selected.posts}</p>
              <p>Founded: {selected.founded}</p>

              <h3 className="mt-3 font-semibold">Purpose</h3>
              <p className="text-sm">{selected.purpose}</p>

              <h3 className="mt-3 font-semibold">Members Preview</h3>
              <p className="text-sm">Rahul, Sneha, Amit...</p>

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

      {/* 🔥 CREATE GROUP MODAL */}
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
              <h2 className="font-bold mb-3">Create Group</h2>

              <input
                placeholder="Group Name"
                className="border p-2 w-full mb-2 rounded"
              />

              <select className="border p-2 w-full mb-2 rounded">
                <option>Shwetambar</option>
                <option>Digambar</option>
              </select>

              <textarea
                placeholder="Purpose"
                className="border p-2 w-full mb-2 rounded"
              />

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2 text-white rounded"
                style={{ background: "#542126" }}
              >
                Create Group
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Groups;
