import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiClock,
  FiStar,
  FiSliders,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

const Bookings = () => {
  const [radius, setRadius] = useState(50);
  const [tabOrder, setTabOrder] = useState(["Popular", "Saved"]);
  const [featured, setFeatured] = useState(true);

  // 🔄 Swap tab order
  const swapTabs = () => {
    setTabOrder([...tabOrder].reverse());
  };

  return (
    <div>
      {/* 🔥 HEADER */}
      <h1 className="text-2xl font-bold mb-4">
        Search & Discovery Configuration
      </h1>

      {/* 🌍 LOCATION FILTER */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold mb-2 flex items-center gap-2">
          <FiMapPin /> Location Filters
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <input placeholder="Country (India)" className="border p-2 rounded" />
          <input placeholder="State (Gujarat)" className="border p-2 rounded" />
        </div>
      </div>

      {/* ⏳ TIME RANGE */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold mb-2 flex items-center gap-2">
          <FiClock /> Time Range
        </h2>

        <select className="border p-2 rounded w-full">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>Last Year</option>
          <option>Custom</option>
        </select>
      </div>

      {/* 🔄 TAB ORDER */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold mb-2 flex items-center gap-2">
          <FiSliders /> Tab Ordering
        </h2>

        <div className="flex gap-3 mb-3">
          {tabOrder.map((tab, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 rounded text-sm">
              {tab}
            </span>
          ))}
        </div>

        <button
          onClick={swapTabs}
          className="px-3 py-2 text-white rounded"
          style={{ background: "#542126" }}
        >
          Swap Order
        </button>
      </div>

      {/* 📍 RADIUS */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold mb-2 flex items-center gap-2">
          <FiMapPin /> Area Radius (KM)
        </h2>

        <input
          type="range"
          min="10"
          max="200"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          className="w-full"
        />

        <p className="text-sm mt-2">{radius} KM</p>
      </div>

      {/* ⭐ FEATURED CONTENT */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold mb-2 flex items-center gap-2">
          <FiStar /> Featured Content
        </h2>

        <div className="flex justify-between items-center">
          <p className="text-sm">Enable promoted / featured items</p>

          <button onClick={() => setFeatured(!featured)}>
            {featured ? (
              <FiToggleRight className="text-green-500 text-2xl" />
            ) : (
              <FiToggleLeft className="text-gray-400 text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* 📊 FEATURED LIST */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Featured Items</h2>

        {["Temple A", "Event B", "Sadhu C"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item}</span>

            <button className="text-sm px-2 py-1 bg-yellow-100 text-yellow-600 rounded">
              Promote
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
