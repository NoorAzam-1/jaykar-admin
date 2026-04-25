import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome, FiUsers, FiSettings, FiGrid, FiLayers,
  FiCalendar, FiFileText, FiMap, FiBell,
  FiBook, FiBarChart2, FiSearch, FiMenu
} from "react-icons/fi";
import { GiTempleGate } from "react-icons/gi";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      
      {/* TOGGLE BUTTON */}
      <div className="toggle" onClick={() => setOpen(!open)}>
        <FiMenu />
      </div>

      <h2 className="logo">
        ⚡ <span>Admin</span>
      </h2>

      <NavLink to="/"><FiHome /> <span>Dashboard</span></NavLink>
      <NavLink to="/users"><FiUsers /> <span>Users</span></NavLink>
      <NavLink to="/panel-users"><FiGrid /> <span>Panel Users</span></NavLink>
      <NavLink to="/temples"><GiTempleGate /> <span>Temples</span></NavLink>
      <NavLink to="/maharasaheb"><FiMap /> <span>Maharasaheb</span></NavLink>
      <NavLink to="/events"><FiCalendar /> <span>Events</span></NavLink>
      <NavLink to="/socialMedia"><FiFileText /> <span>Posts</span></NavLink>
      <NavLink to="/groupsManagement"><FiUsers /> <span>Groups</span></NavLink>
      <NavLink to="/membership"><FiBarChart2 /> <span>Membership</span></NavLink>
      <NavLink to="/searchConfig"><FiSearch /> <span>Search</span></NavLink>
      <NavLink to="/notifications"><FiBell /> <span>Notifications</span></NavLink>
      <NavLink to="/bookings"><FiLayers /> <span>Bookings</span></NavLink>
      <NavLink to="/contentLibrary"><FiBook /> <span>Library</span></NavLink>
      <NavLink to="/reports"><FiBarChart2 /> <span>Reports</span></NavLink>
      <NavLink to="/settings"><FiSettings /> <span>Settings</span></NavLink>
    </div>
  );
}