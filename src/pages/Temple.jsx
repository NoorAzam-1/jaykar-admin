import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiMapPin,
  FiHome,
  FiCheck,
  FiX,
  FiPlus,
  FiAlertCircle,
} from "react-icons/fi";

// 🔥 Dummy data
const generateTemples = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Temple ${i + 1}`,
    city: ["Palitana", "Girnar", "Shankheshwar"][i % 3],
    trust: "Jain Trust",
    rooms: Math.floor(Math.random() * 200),
    bhojanshala: i % 2 === 0 ? "Available" : "Not Available",
    status: i % 2 === 0 ? "Verified" : "Pending",
    complaint: i % 4 === 0,
  }));

const Temple = () => {
  const [temples, setTemples] = useState(generateTemples());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 Search + Filter
  const filtered = useMemo(() => {
    return temples.filter((t) => {
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());

      const matchFilter = filter === "All" ? true : t.status === filter;

      return matchSearch && matchFilter;
    });
  }, [temples, search, filter]);

  return (
    <div>
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Temple & Tirtha Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg"
          style={{ background: "#542126" }}
        >
          <FiPlus /> Add Temple
        </button>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center bg-white border rounded-xl px-4 py-2 w-96 shadow-sm">
          <FiSearch className="text-gray-400" />
          <input
            placeholder="Search temple..."
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
          <option>Verified</option>
          <option>Pending</option>
        </select>
      </div>

      {/* 📊 GRID */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-4 rounded-xl shadow cursor-pointer"
            onClick={() => setSelectedTemple(t)}
          >
            <h2 className="font-semibold">{t.name}</h2>

            <p className="text-sm text-gray-500 flex items-center gap-1">
              <FiMapPin /> {t.city}
            </p>

            <p className="text-xs text-gray-400">Managed by {t.trust}</p>

            <div className="mt-2 flex justify-between text-xs">
              <span>Rooms: {t.rooms}</span>
              <span>{t.bhojanshala}</span>
            </div>

            {/* Status */}
            <div className="mt-3 flex justify-between items-center">
              <span
                className={`px-2 py-1 rounded text-xs ${
                  t.status === "Verified"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {t.status}
              </span>

              {t.complaint && <FiAlertCircle className="text-red-500" />}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 DETAIL MODAL */}
      <AnimatePresence>
        {selectedTemple && (
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
              <h2 className="text-lg font-bold mb-3">{selectedTemple.name}</h2>

              <p>📍 {selectedTemple.city}</p>
              <p>Trust: {selectedTemple.trust}</p>
              <p>Rooms: {selectedTemple.rooms}</p>
              <p>Bhojanshala: {selectedTemple.bhojanshala}</p>

              <div className="mt-4 flex gap-3">
                <button className="px-3 py-2 bg-green-100 text-green-600 rounded">
                  <FiCheck /> Approve
                </button>
                <button className="px-3 py-2 bg-red-100 text-red-600 rounded">
                  <FiX /> Reject
                </button>
              </div>

              <button
                onClick={() => setSelectedTemple(null)}
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
              className="bg-white p-6 rounded-2xl w-[520px] max-h-[90vh] overflow-y-auto shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2 className="text-lg font-semibold mb-4">
                Add Temple / Tirtha
              </h2>

              {/* 🏛 BASIC INFO */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Basic Info</h3>

                <input
                  id="name"
                  placeholder="Temple Name"
                  className="border p-2 w-full mb-2 rounded-lg"
                />

                <input
                  id="city"
                  placeholder="City / Location"
                  className="border p-2 w-full mb-2 rounded-lg"
                />

                <input
                  placeholder="Google Map Link / Pin"
                  className="border p-2 w-full rounded-lg"
                />
              </div>

              {/* 🏢 TRUST */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Trust Details</h3>

                <input
                  placeholder="Trust Name"
                  className="border p-2 w-full mb-2 rounded-lg"
                />

                <input
                  placeholder="Managed by (e.g. Jain Trust)"
                  className="border p-2 w-full rounded-lg"
                />
              </div>

              {/* 📞 CONTACT */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Contact Info</h3>

                <input
                  placeholder="Phone Number"
                  className="border p-2 w-full mb-2 rounded-lg"
                />

                <input
                  placeholder="Email"
                  className="border p-2 w-full rounded-lg"
                />
              </div>

              {/* ⏰ TIMING */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Temple Timing</h3>

                <div className="flex gap-2">
                  <input
                    placeholder="Opening Time"
                    className="border p-2 w-full rounded-lg"
                  />

                  <input
                    placeholder="Closing Time"
                    className="border p-2 w-full rounded-lg"
                  />
                </div>
              </div>

              {/* 🍽 BHOJANSHALA */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Bhojanshala</h3>

                <select className="border p-2 w-full mb-2 rounded-lg">
                  <option>Available</option>
                  <option>Not Available</option>
                </select>

                <input
                  placeholder="Timing"
                  className="border p-2 w-full rounded-lg"
                />
              </div>

              {/* 🏨 DHARAMSHALA */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Dharamshala</h3>

                <input
                  placeholder="Total Rooms"
                  className="border p-2 w-full mb-2 rounded-lg"
                />

                <select className="border p-2 w-full rounded-lg">
                  <option>Booking Enabled</option>
                  <option>Booking Disabled</option>
                </select>
              </div>

              {/* 📷 IMAGE UPLOAD */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Upload Images</h3>

                <div className="border-dashed border-2 p-4 text-center rounded-lg text-gray-400">
                  Click to upload images
                </div>
              </div>

              {/* STATUS */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Verification</h3>

                <select className="border p-2 w-full rounded-lg">
                  <option>Pending</option>
                  <option>Verified</option>
                </select>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border py-2 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    const name = document.getElementById("name").value;
                    const city = document.getElementById("city").value;

                    setTemples([
                      ...temples,
                      {
                        id: Date.now(),
                        name,
                        city,
                        trust: "Custom Trust",
                        rooms: 100,
                        bhojanshala: "Available",
                        status: "Pending",
                      },
                    ]);

                    setShowModal(false);
                  }}
                  className="flex-1 py-2 text-white rounded-lg"
                  style={{ background: "#542126" }}
                >
                  Create Temple
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Temple;
