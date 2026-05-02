import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiPlus,
  FiStar,
} from "react-icons/fi";

// 🔥 Dummy Data
const generateEvents = () =>
  Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: ["Mahaveer Janmotsav", "Paryushan", "Diwali"][i % 3],
    date: "12 April 2026",
    venue: ["Delhi Temple", "Mumbai Tirth", "Ahmedabad Jain Mandir"][i % 3],
    participants: Math.floor(Math.random() * 10000),
    status: i % 2 === 0 ? "Featured" : "Popular",
    saved: i % 3 === 0,
  }));

const Events = () => {
  const [events, setEvents] = useState(generateEvents());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 Search + Filter
  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchSearch = e.name.toLowerCase().includes(search.toLowerCase());

      const matchFilter = filter === "All" ? true : e.status === filter;

      return matchSearch && matchFilter;
    });
  }, [events, search, filter]);

  return (
    <div>
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Events & Mahotsav Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg"
          style={{ background: "#542126" }}
        >
          <FiPlus /> Add Event
        </button>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center bg-white border px-4 py-2 rounded-xl w-96 shadow-sm">
          <FiSearch />
          <input
            placeholder="Search events..."
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
          <option>Featured</option>
          <option>Popular</option>
        </select>
      </div>

      {/* 📊 GRID */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((e) => (
          <motion.div
            key={e.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-4 rounded-xl shadow cursor-pointer"
            onClick={() => setSelected(e)}
          >
            <h2 className="font-semibold flex items-center gap-2">
              <FiCalendar /> {e.name}
            </h2>

            <p className="text-sm text-gray-500">{e.date}</p>

            <p className="text-sm flex items-center gap-1 mt-1">
              <FiMapPin /> {e.venue}
            </p>

            <p className="text-xs mt-2 flex items-center gap-1">
              <FiUsers /> {e.participants} joined
            </p>

            {/* Tags */}
            <div className="mt-3 flex justify-between">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  e.status === "Featured"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {e.status}
              </span>

              {e.saved && <FiStar className="text-yellow-500" />}
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
              className="bg-white p-6 rounded-xl w-[520px]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-lg font-bold mb-3">{selected.name}</h2>

              <p>Date: {selected.date}</p>
              <p>Venue: {selected.venue}</p>
              <p>Participants: {selected.participants}</p>

              {/* Schedule */}
              <h3 className="mt-3 font-semibold">Schedule</h3>
              <ul className="text-sm list-disc ml-4">
                <li>Morning Prayer</li>
                <li>Pravachan</li>
                <li>Community Lunch</li>
              </ul>

              {/* Members */}
              <h3 className="mt-3 font-semibold">Key Members</h3>
              <p className="text-sm">Acharya Shri, Jain Trust</p>

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

      {/* 🔥 ADD EVENT MODAL */}
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
              <h2 className="font-bold mb-3">Add Event</h2>

              <input
                placeholder="Event Name"
                className="border p-2 w-full mb-2 rounded"
              />

              <input
                placeholder="Date"
                className="border p-2 w-full mb-2 rounded"
              />

              <input
                placeholder="Venue"
                className="border p-2 w-full mb-2 rounded"
              />

              <textarea
                placeholder="Description"
                className="border p-2 w-full mb-2 rounded"
              />

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2 text-white rounded"
                style={{ background: "#542126" }}
              >
                Create Event
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
