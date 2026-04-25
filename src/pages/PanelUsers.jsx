import { FiUserPlus, FiTrash2, FiPower, FiActivity } from "react-icons/fi";

const users = [
  {
    name: "Ravi Jain",
    role: "Creator",
    status: "Active",
    activity: "Posted 5 updates",
  },
  {
    name: "Amit Shah",
    role: "Temple Manager",
    status: "Inactive",
    activity: "Updated temple details",
  },
  {
    name: "Neha Mehta",
    role: "Group Admin",
    status: "Active",
    activity: "Managed group posts",
  },
];

export default function PanelUsers() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ display: "flex", justifyContent: "space-between",alignItems: "center", marginBottom: 20 }}>
        <div>
          <h1>Panel Users</h1>
          <p style={{ opacity: 0.7 }}>
            Manage admin roles, permissions & activity logs
          </p>
        </div>

        <button className="btn">
          <FiUserPlus /> Add User
        </button>
      </div>

      {/* 📊 Roles Info */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Available Roles</h2>
        <p>
          Regular User • Creator • Group Admin • Maharasaheb • Temple Manager
        </p>
      </div>

      {/* 📋 Users Table */}
      <div className="card">
        <h2>Panel Users List</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Activity</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>

                <td>
                  <span className="role-badge">{user.role}</span>
                </td>

                <td>
                  <span
                    className={
                      user.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {user.status}
                  </span>
                </td>

                <td>
                  <FiActivity style={{ marginRight: 6 }} />
                  {user.activity}
                </td>

                <td>
                  <button className="icon-btn">
                    <FiPower />
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
    </div>
  );
}