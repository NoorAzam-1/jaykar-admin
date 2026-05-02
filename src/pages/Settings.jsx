import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSettings,
  FiToggleLeft,
  FiToggleRight,
  FiMapPin,
  FiCreditCard,
  FiFileText,
} from "react-icons/fi";

const Settings = () => {
  const [features, setFeatures] = useState({
    ads: true,
    tracking: true,
    notifications: false,
  });

  const toggleFeature = (key) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
      {/* 🔥 HEADER */}
      <h1 className="text-2xl font-bold mb-6">Settings & Configuration</h1>

      {/* ⚙️ APP SETTINGS */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold flex items-center gap-2 mb-3">
          <FiSettings /> App Configuration
        </h2>

        <p className="text-sm">Version: 1.0.0</p>

        {/* Feature Toggles */}
        <div className="mt-3 space-y-2">
          {[
            { label: "Enable Ads", key: "ads" },
            { label: "Live Tracking", key: "tracking" },
            { label: "Push Notifications", key: "notifications" },
          ].map((item) => (
            <div key={item.key} className="flex justify-between items-center">
              <span>{item.label}</span>

              <button onClick={() => toggleFeature(item.key)}>
                {features[item.key] ? (
                  <FiToggleRight className="text-green-500 text-2xl" />
                ) : (
                  <FiToggleLeft className="text-gray-400 text-2xl" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🧭 CLASSIFICATIONS */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold mb-3">Sect Classification</h2>

        <div className="flex gap-2 flex-wrap">
          {["Shwetambar", "Digambar", "Sthanakvasi"].map((sect, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 rounded text-sm">
              {sect}
            </span>
          ))}
        </div>
      </div>

      {/* 🌍 LOCATION MASTER */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold flex items-center gap-2 mb-3">
          <FiMapPin /> Location Data
        </h2>

        <input
          placeholder="Country"
          className="border p-2 w-full mb-2 rounded"
        />

        <input placeholder="State" className="border p-2 w-full rounded" />
      </div>

      {/* 💳 PAYMENT SETTINGS */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h2 className="font-semibold flex items-center gap-2 mb-3">
          <FiCreditCard /> Payment Gateway
        </h2>

        <select className="border p-2 w-full mb-2 rounded">
          <option>Razorpay</option>
          <option>Stripe</option>
        </select>

        <input placeholder="API Key" className="border p-2 w-full rounded" />
      </div>

      {/* 📄 CONTENT MANAGEMENT */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold flex items-center gap-2 mb-3">
          <FiFileText /> Legal Content
        </h2>

        <textarea
          placeholder="Terms & Conditions"
          className="border p-2 w-full mb-2 rounded"
        />

        <textarea
          placeholder="Privacy Policy"
          className="border p-2 w-full mb-2 rounded"
        />

        <textarea
          placeholder="About App"
          className="border p-2 w-full rounded"
        />
      </div>
    </div>
  );
};

export default Settings;
