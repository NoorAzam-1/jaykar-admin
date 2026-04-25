import { FiCheckCircle, FiXCircle, FiHome } from "react-icons/fi";

const bookings = [
  {
    name: "Ravi Jain",
    place: "Shree Mahavir Dharamshala",
    type: "Room",
    status: "Pending",
  },
  {
    name: "Neha Mehta",
    place: "Bhojanshala Mumbai",
    type: "Meal Pass",
    status: "Confirmed",
  },
];

export default function Bookings() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Bookings Management</h1>
        <p style={{ opacity: 0.7 }}>
          Manage dharamshala rooms & bhojanshala passes
        </p>
      </div>

      {/* 📋 Booking Table */}
      <div className="card">
        <h2>Booking Requests</h2>

        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Place</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td>{b.name}</td>
                <td>{b.place}</td>
                <td>{b.type}</td>

                <td>
                  <span
                    className={
                      b.status === "Confirmed"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {b.status}
                  </span>
                </td>

                <td>
                  <button className="icon-btn">
                    <FiCheckCircle />
                  </button>

                  <button className="icon-btn danger">
                    <FiXCircle />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🏠 Inventory */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Room Inventory</h2>

        <div className="settings-row">
          <span>Available Rooms</span>
          <input className="input" defaultValue="25" />
        </div>
      </div>

      {/* 🍽️ Bhojanshala Pass */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Bhojanshala Pass Management</h2>

        <div className="settings-row">
          <span>Daily Pass Limit</span>
          <input className="input" defaultValue="100" />
        </div>
      </div>
    </div>
  );
}