import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const temples = [
  {
    name: "Shree Mahavir Swami Temple",
    city: "Mumbai",
    trust: "Jain Shwetamber Trust",
    status: "Approved",
  },
  {
    name: "Parasnath Tirth",
    city: "Jharkhand",
    trust: "Digambar Trust",
    status: "Pending",
  },
];

export default function Temples() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h1>Temple & Tirtha Management</h1>
          <p style={{ opacity: 0.7 }}>
            Manage temples, trusts, bookings, and approvals
          </p>
        </div>

        <button className="btn add-btn">
          <FiPlus /> Add Temple
        </button>
      </div>

      {/* 📊 Quick Stats */}
      <div className="dashboard-grid" style={{ marginBottom: 20 }}>
        <div className="card">
          <h2>Total Temples</h2>
          <h1>150</h1>
        </div>

        <div className="card">
          <h2>Pending Approvals</h2>
          <h1>12</h1>
        </div>

        <div className="card">
          <h2>Bhojanshala</h2>
          <h1>40</h1>
        </div>

        <div className="card">
          <h2>Dharamshala</h2>
          <h1>28</h1>
        </div>
      </div>

      {/* 📋 Temple List */}
      <div className="card">
        <h2>Temple Listings</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Temple Name</th>
              <th>City</th>
              <th>Trust</th>
              <th>Status</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {temples.map((temple, i) => (
              <tr key={i}>
                <td>{temple.name}</td>
                <td>{temple.city}</td>
                <td>{temple.trust}</td>

                <td>
                  <span
                    className={
                      temple.status === "Approved"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {temple.status}
                  </span>
                </td>

                <td>
                  <FiMapPin />
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

      {/* 🚨 Approval Queue */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Verification & Approval Queue</h2>

        <div className="settings-row">
          <span>Parasnath Tirth (Pending)</span>

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

      {/* ⚠️ Reports */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Location Issue Reports</h2>

        <div className="settings-row">
          <span>Incorrect map location reported - Mumbai Temple</span>
          <button className="btn">Resolve</button>
        </div>
      </div>
    </div>
  );
}