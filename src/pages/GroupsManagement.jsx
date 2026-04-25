import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiUsers,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

const groups = [
  {
    name: "Jain Youth Group",
    affiliation: "Shwetambar",
    members: 120,
    status: "Approved",
  },
  {
    name: "Digambar Community",
    affiliation: "Digambar",
    members: 80,
    status: "Pending",
  },
];

export default function GroupsManagement() {
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
          <h1>Groups Management</h1>
          <p style={{ opacity: 0.7 }}>
            Manage community groups, members & approvals
          </p>
        </div>

        <button className="btn add-btn">
          <FiPlus /> Create Group
        </button>
      </div>

      {/* 📋 Groups Table */}
      <div className="card">
        <h2>All Groups</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Affiliation</th>
              <th>Members</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {groups.map((group, i) => (
              <tr key={i}>
                <td>
                  <FiUsers style={{ marginRight: 6 }} />
                  {group.name}
                </td>

                <td>
                  <span className="role-badge">
                    {group.affiliation}
                  </span>
                </td>

                <td>{group.members}</td>

                <td>
                  <span
                    className={
                      group.status === "Approved"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {group.status}
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

      {/* ✅ Approval Queue */}
      <div className="card" style={{ marginTop: 20 }}>
        <h2>Group Approval Requests</h2>

        <div className="settings-row">
          <span>Digambar Community (Pending)</span>

          <div>
            <button className="icon-btn">
              <FiCheckCircle />
            </button>

            <button className="icon-btn danger">
              <FiXCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}