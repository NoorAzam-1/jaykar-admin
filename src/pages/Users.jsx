import { FiSearch, FiCheckCircle, FiUser } from "react-icons/fi";

const users = [
  {
    name: "Ravi Jain",
    email: "ravi@gmail.com",
    phone: "9876543210",
    city: "Mumbai",
    membership: "Gold",
    status: "Active",
  },
  {
    name: "Neha Mehta",
    email: "neha@gmail.com",
    phone: "9123456780",
    city: "Ahmedabad",
    membership: "Silver",
    status: "Inactive",
  },
];

export default function Users() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>User Management</h1>
        <p style={{ opacity: 0.7 }}>
          Manage all registered users, verify identity & track membership
        </p>
      </div>

      {/* 🔍 Search + Filter */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>

          <div className="search">
            <FiSearch />
            <input placeholder="Search users by name, email..." />
          </div>

          <select className="btn">
            <option>All Memberships</option>
            <option>Gold</option>
            <option>Silver</option>
          </select>

        </div>
      </div>

      {/* 📋 Users Table */}
      <div className="card">
        <h2>All Users</h2>

        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Contact</th>
              <th>City</th>
              <th>Membership</th>
              <th>Status</th>
              <th>Verify</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <FiUser style={{ marginRight: 6 }} />
                  {user.name}
                </td>

                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>

                <td>
                  <span className="role-badge">
                    {user.membership}
                  </span>
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
                  <button className="icon-btn">
                    <FiCheckCircle />
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