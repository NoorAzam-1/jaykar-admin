import {
  FiDollarSign,
  FiCheckCircle,
  FiXCircle,
  FiRefreshCw,
} from "react-icons/fi";

const memberships = [
  {
    user: "Ravi Jain",
    plan: "Gold",
    price: "₹500",
    status: "Active",
  },
  {
    user: "Neha Mehta",
    plan: "Silver",
    price: "₹1000",
    status: "Cancelled",
  },
];

export default function Membership() {
  return (
    <div>
      {/* 🔥 Header */}
      <div style={{ marginBottom: 20 }}>
        <h1>Membership & Coins</h1>
        <p style={{ opacity: 0.7 }}>
          Manage subscriptions, pricing & benefits
        </p>
      </div>

      {/* 📊 Plans */}
      <div className="dashboard-grid" style={{ marginBottom: 20 }}>
        <div className="card">
          <h2>Gold Plan</h2>
          <h1>₹500</h1>
          <p>No Ads + Premium Access</p>
        </div>

        <div className="card">
          <h2>Silver Plan</h2>
          <h1>₹1000</h1>
          <p>Standard Benefits</p>
        </div>
      </div>

      {/* ⚙️ Pricing Config */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Pricing Configuration</h2>

        <div className="settings-row">
          <span>Gold Price</span>
          <input className="input" defaultValue="500" />
        </div>

        <div className="settings-row">
          <span>Silver Price</span>
          <input className="input" defaultValue="1000" />
        </div>

        <div className="settings-row">
          <span>No Ads Benefit</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* 📋 Membership Table */}
      <div className="card">
        <h2>Active Memberships</h2>

        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Plan</th>
              <th>Price</th>
              <th>Status</th>
              <th>Renewal</th>
            </tr>
          </thead>

          <tbody>
            {memberships.map((m, i) => (
              <tr key={i}>
                <td>{m.user}</td>

                <td>
                  <span className="role-badge">{m.plan}</span>
                </td>

                <td>{m.price}</td>

                <td>
                  <span
                    className={
                      m.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {m.status}
                  </span>
                </td>

                <td>
                  <button className="icon-btn">
                    <FiRefreshCw />
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
    </div>
  );
}