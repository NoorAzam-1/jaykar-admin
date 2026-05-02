import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiPlus,
  FiTrash2,
  FiEye,
  FiSearch,
  FiShield,
} from "react-icons/fi";

const roles = [
  "Regular User",
  "Creator",
  "Group Admin",
  "Maharasaheb",
  "Temple Manager",
];

// 🔥 Dummy users
const generateUsers = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    role: ["Creator", "Group Admin", "Temple Manager", "Maharasaheb"][i % 4],
    status: i % 2 === 0 ? "Active" : "Inactive",
    activity: [
      "Logged in",
      "Updated profile",
      "Created event",
      "Approved post",
    ],
  }));

const initialUsers = generateUsers();

const PanelUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 Search
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()),
  );

  // ➕ Add user
  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now(), activity: [] }]);
  };

  // ❌ Delete
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // 🔄 Toggle status
  const toggleStatus = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u,
      ),
    );
  };

  return (
    <div>
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Panel Users</h1>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg"
          style={{ background: "#542126" }}
        >
          <FiPlus /> Add User
        </button>
      </div>

      <div className="relative w-96 mb-4">
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#542126]/30">
          {/* Icon */}
          <FiSearch className="text-gray-400 text-lg" />

          {/* Input */}
          <input
            type="text"
            placeholder="Search by name, role..."
            className="ml-3 w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Clear button */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-gray-400 hover:text-red-500"
            >
              ✕
            </button>
          )}
        </div>

        {/* Hint text */}
        <p className="text-xs text-gray-400 mt-1 ml-1">
          Search panel users by name or role
        </p>
      </div>

      {/* 📊 TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-t text-center hover:bg-gray-50">
                <td className="py-3 flex items-center justify-center gap-2">
                  <FiUser /> {u.name}
                </td>

                <td>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                    {u.role}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() => toggleStatus(u.id)}
                    className={`px-2 py-1 rounded text-xs ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {u.status}
                  </button>
                </td>

                <td className="flex justify-center gap-3 py-3">
                  <FiEye
                    className="cursor-pointer"
                    onClick={() => setSelectedUser(u)}
                  />
                  <FiTrash2
                    className="cursor-pointer text-red-500"
                    onClick={() => deleteUser(u.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 ADD USER MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl w-[420px] shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiUser /> Create Panel User
              </h2>

              {/* Name */}
              <div className="mb-3">
                <label className="text-xs text-gray-500">Full Name</label>
                <input
                  id="name"
                  placeholder="Enter user name"
                  className="border w-full p-2 rounded-lg mt-1 focus:ring-2 focus:ring-[#542126]/30"
                />
              </div>

              {/* Role */}
              <div className="mb-3">
                <label className="text-xs text-gray-500">Select Role</label>
                <select
                  id="role"
                  className="border w-full p-2 rounded-lg mt-1 focus:ring-2 focus:ring-[#542126]/30"
                >
                  {roles.map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div className="mb-4">
                <label className="text-xs text-gray-500">Status</label>
                <select
                  id="status"
                  className="border w-full p-2 rounded-lg mt-1"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  className="flex-1 py-2 border rounded-lg"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    const name = document.getElementById("name").value;
                    const role = document.getElementById("role").value;
                    const status = document.getElementById("status").value;

                    addUser({ name, role, status });
                    setShowModal(false);
                  }}
                  className="flex-1 py-2 text-white rounded-lg"
                  style={{ background: "#542126" }}
                >
                  Create User
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 ACTIVITY LOG MODAL */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-96 shadow"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <FiShield /> {selectedUser.name}
              </h2>

              <p className="text-sm mb-2">Role: {selectedUser.role}</p>

              <h3 className="font-semibold mt-3 mb-2">Activity Log</h3>

              <ul className="text-sm space-y-1">
                {selectedUser.activity.map((a, i) => (
                  <li key={i}>• {a}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedUser(null)}
                className="mt-4 px-4 py-2 text-white rounded w-full"
                style={{ background: "#542126" }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PanelUsers;
