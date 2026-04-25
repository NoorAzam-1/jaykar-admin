import { FiSearch, FiMapPin, FiStar } from "react-icons/fi";

export default function SearchConfig() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Search & Discovery</h1>
        <p style={{ opacity: 0.7 }}>
          Configure filters, ranking & featured content
        </p>
      </div>

      {/* 🌍 Filters */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Search Filters</h2>

        <div className="settings-row">
          <span>Country</span>
          <input className="input" placeholder="India" />
        </div>

        <div className="settings-row">
          <span>State</span>
          <input className="input" placeholder="Gujarat" />
        </div>

        <div className="settings-row">
          <span>Time Range</span>
          <select className="btn">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* 📊 Tabs Ordering */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Tabs Configuration</h2>

        <div className="settings-row">
          <span>Show Popular First</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>Show Saved Tab</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* 📍 Radius */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Location Settings</h2>

        <div className="settings-row">
          <span>Default Radius (KM)</span>
          <input className="input" defaultValue="50" />
        </div>
      </div>

      {/* ⭐ Featured Content */}
      <div className="card">
        <h2>Featured / Promoted Content</h2>

        <div className="settings-row">
          <span>Promote Temple Listings</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>Promote Events</span>
          <input type="checkbox" />
        </div>

        <div className="settings-row">
          <span>Promote Creators</span>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}