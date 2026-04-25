import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

export default function AdminLayout() {
  return (
    <div className="app-layout">
      <SideBar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}