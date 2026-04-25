import { FiToggleRight, FiMapPin, FiCreditCard, FiFileText } from "react-icons/fi";

export default function Settings() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Settings & Configuration</h1>
        <p style={{ opacity: 0.7 }}>
          Manage system configuration, features, and platform settings
        </p>
      </div>

      {/* ⚙️ Feature Flags */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>App Version & Features</h2>

        <div className="settings-row">
          <span>Enable Social Feed</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>Enable Temple Booking</span>
          <input type="checkbox" />
        </div>

        <div className="settings-row">
          <span>Enable Notifications</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* 🧘 Classification */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Classifications</h2>

        <div className="settings-row">
          <span>Shwetambar</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>Digambar</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>Sub-sects</span>
          <input type="checkbox" />
        </div>
      </div>

      {/* 📍 Location */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2><FiMapPin /> Location / Region</h2>

        <div className="settings-row">
          <span>Default Radius (KM)</span>
          <input className="input" placeholder="50" />
        </div>

        <div className="settings-row">
          <span>Country</span>
          <input className="input" placeholder="India" />
        </div>
      </div>

      {/* 💳 Payment */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2><FiCreditCard /> Payment Settings</h2>

        <div className="settings-row">
          <span>Gold Membership Price</span>
          <input className="input" placeholder="₹500" />
        </div>

        <div className="settings-row">
          <span>Silver Membership Price</span>
          <input className="input" placeholder="₹1000" />
        </div>

        <div className="settings-row">
          <span>Enable Payments</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* 📜 Content Management */}
      <div className="card">
        <h2><FiFileText /> Legal & Content</h2>

        <div className="settings-row">
          <span>Terms & Conditions</span>
          <button className="btn">Edit</button>
        </div>

        <div className="settings-row">
          <span>Privacy Policy</span>
          <button className="btn">Edit</button>
        </div>

        <div className="settings-row">
          <span>About Content</span>
          <button className="btn">Edit</button>
        </div>
      </div>
    </div>
  );
}