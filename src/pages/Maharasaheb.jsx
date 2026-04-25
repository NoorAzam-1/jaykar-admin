import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
  FiActivity,
  FiUsers,
} from "react-icons/fi";

const maharasahebs = [
  {
    name: "Acharya Shri 108",
    sect: "Shwetambar",
    location: "Ahmedabad",
    tracking: true,
    followers: 1200,
    status: "Approved",
  },
  {
    name: "Muni Shri Prakash",
    sect: "Digambar",
    location: "Jaipur",
    tracking: false,
    followers: 800,
    status: "Pending",
  },
];

export default function Maharasaheb() {
  return (
    <div>
      {/* 🔥 Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div>
          <h1>Sadhu-Sant Management</h1>
          <p style={{ opacity: 0.7 }}>
            Manage Maharasaheb profiles, tracking & emergency alerts
          </p>
        </div>

        <button className="btn add-btn">
          <FiPlus /> Add Maharasaheb
        </button>
      </div>

      {/* 📊 Stats */}
      <div className="dashboard-grid" style={{ marginBottom: 20 }}>
        <div className="card">
          <h2>Total Profiles</h2>
          <h1>85</h1>
        </div>

        <div className="card">
          <h2>Tracking Enabled</h2>
          <h1>60</h1>
        </div>

        <div className="card">
          <h2>Pending Approval</h2>
          <h1>8</h1>
        </div>

        <div className="card">
          <h2>Total Followers</h2>
          <h1>25K</h1>
        </div>
      </div>

      {/* 📋 Profiles Table */}
      <div className="card">
        <h2>Maharasaheb Profiles</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Sect</th>
              <th>Location</th>
              <th>Tracking</th>
              <th>Followers</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {maharasahebs.map((m, i) => (
              <tr key={i}>
                <td>{m.name}</td>

                <td>
                  <span className="role-badge">{m.sect}</span>
                </td>

                <td>
                  <FiMapPin style={{ marginRight: 5 }} />
                  {m.location}
                </td>

                <td>
                  <input type="checkbox" checked={m.tracking} readOnly />
                </td>

                <td>
                  <FiUsers style={{ marginRight: 5 }} />
                  {m.followers}
                </td>

                <td>
                  <span
                    className={
                      m.status === "Approved"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {m.status}
                  </span>
                </td>

                <td>
                  <button className="icon-btn">
                    <FiEdit />
                  </button>

                  <button className="icon-btn danger">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🛣️ Vihar Route */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Vihar Route Management</h2>

        <div className="settings-row">
          <span>Acharya Shri 108 - Planned Route</span>
          <button className="btn">View Route</button>
        </div>

        <div className="settings-row">
          <span>Current Location Tracking</span>
          <button className="btn">Open Map</button>
        </div>
      </div>

      {/* 🚨 Emergency Alerts */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Emergency Alert Settings</h2>

        <div className="settings-row">
          <span>Notify users within 50 KM radius</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>Enable SOS alerts</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* ✅ Approval Queue */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Verification Queue</h2>

        <div className="settings-row">
          <span>Muni Shri Prakash (Pending)</span>

          <div>
            <button className="icon-btn">
              <FiCheckCircle />
            </button>

            <button className="icon-btn danger">
              <FiAlertCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}