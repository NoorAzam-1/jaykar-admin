import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiFilter,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// 🔥 Generate 100 users
const generateUsers = () =>
  Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@mail.com`,
    phone: `+91 98765 ${40000 + i}`,
    city: ["Mumbai", "Delhi", "Bangalore"][i % 3],
    membership: i % 2 ? "Gold" : "Silver",
    status: i % 3 ? "Active" : "Inactive",
    verified: i % 2 === 0,
  }));

const UserManagement = () => {
  const [users, setUsers] = useState(generateUsers());
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const perPage = 10;

  // 🔍 Filter + Search
  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());

      const matchStatus = statusFilter === "All" || u.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [users, search, statusFilter]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div>
      {/* 🔥 HEADER */}
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex justify-between items-center mb-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl w-96 shadow-sm">
          <FiSearch className="text-gray-500" />
          <input
            placeholder="Search users, email..."
            className="bg-transparent outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <FiFilter />
          <select
            className="px-3 py-2 rounded-lg border"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* 📊 TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Status</th>
              <th>Verify</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((u) => (
              <tr
                key={u.id}
                onClick={() => setSelectedUser(u)}
                className="border-t hover:bg-gray-50 cursor-pointer text-center"
              >
                <td className="py-3 flex items-center justify-center gap-2">
                  <FiUser /> {u.name}
                </td>
                <td>{u.email}</td>
                <td>
                  <FiMapPin className="inline" /> {u.city}
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>

                <td>
                  <button
                    className={`px-2 py-1 rounded text-xs ${
                      u.verified ? "bg-blue-100 text-blue-600" : "bg-gray-200"
                    }`}
                  >
                    {u.verified ? "Verified" : "Verify"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 PAGINATION */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="flex items-center gap-2 px-3 py-1 border rounded"
        >
          <FiChevronLeft /> Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="flex items-center gap-2 px-3 py-1 border rounded"
        >
          Next <FiChevronRight />
        </button>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-96 shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-lg font-bold mb-4">{selectedUser.name}</h2>

              <div className="space-y-2 text-sm">
                <p>
                  <FiMail className="inline" /> {selectedUser.email}
                </p>
                <p>
                  <FiPhone className="inline" /> {selectedUser.phone}
                </p>
                <p>
                  <FiMapPin className="inline" /> {selectedUser.city}
                </p>
                <p>
                  <FiShield className="inline" /> {selectedUser.membership}
                </p>
              </div>

              <button
                className="mt-4 px-4 py-2 text-white rounded w-full"
                style={{ background: "#542126" }}
                onClick={() => setSelectedUser(null)}
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

export default UserManagement;
