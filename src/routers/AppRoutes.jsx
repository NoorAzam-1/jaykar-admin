import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import PanelUsers from "../pages/PanelUsers";
import Settings from "../pages/Settings";
import Temples from "../pages/Temples";
import Maharasaheb from "../pages/Maharasaheb";
import Events from "../pages/Events";
import SocialMedia from "../pages/SocialMedia";
import GroupsManagement from "../pages/GroupsManagement";
import Membership from "../pages/Membership";
import SearchConfig from "../pages/SearchConfig";
import Notifications from "../pages/Notifications";
import Bookings from "../pages/Bookings";
import ContentLibrary from "../pages/ContentLibrary";
import Reports from "../pages/Reports";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          
          <Route path="/panel-users" element={<PanelUsers />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/maharasaheb" element={<Maharasaheb />} />
          <Route path="/events" element={<Events />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
          <Route path="/groupsManagement" element={<GroupsManagement />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/searchConfig" element={<SearchConfig />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contentLibrary" element={<ContentLibrary />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}