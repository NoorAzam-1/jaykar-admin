import { FiSend, FiBell, FiClock } from "react-icons/fi";

const notifications = [
  {
    title: "New Event Nearby",
    target: "All Users",
    time: "2 hours ago",
  },
  {
    title: "Sadhu Vihar Alert",
    target: "Ahmedabad Users",
    time: "1 day ago",
  },
];

export default function Notifications() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Notifications Management</h1>
        <p style={{ opacity: 0.7 }}>
          Send notifications & manage alerts
        </p>
      </div>

      {/* 📤 Send Notification */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Send Notification</h2>

        <div className="settings-row">
          <input className="input" placeholder="Notification message..." />
        </div>

        <div className="settings-row">
          <select className="btn">
            <option>All Users</option>
            <option>By Region</option>
            <option>By Membership</option>
          </select>

          <button className="btn">
            <FiSend /> Send
          </button>
        </div>
      </div>

      {/* 🔁 Auto Alerts */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Auto Alerts</h2>

        <div className="settings-row">
          <span>Nearby Sadhu Vihar Alert</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="settings-row">
          <span>New Local Events</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* 📜 History */}
      <div className="card">
        <h2>Notification History</h2>

        {notifications.map((n, i) => (
          <div key={i} className="settings-row">
            <span>
              <FiBell style={{ marginRight: 6 }} />
              {n.title} ({n.target})
            </span>

            <span style={{ opacity: 0.6 }}>
              <FiClock /> {n.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}