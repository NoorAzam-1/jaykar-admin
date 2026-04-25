import { FiBell, FiUser, FiGrid } from "react-icons/fi";

export default function Header() {
  return (
    <div className="header">

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FiGrid size={22} />
        <h2 style={{ margin: 0 }}>Admin Panel</h2>
      </div>

      <div className="actions">
        <FiBell size={20} />

        <div className="profile">
          <FiUser />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}