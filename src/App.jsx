import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import PanelUsers from "./pages/PanelUsers";
import UserManagement from "./pages/UserManagement";
import Temple from "./pages/Temple";
import Sadhu from "./pages/Sadhu";
import Events from "./pages/Events";
import Posts from "./pages/Posts";
import Groups from "./pages/Groups";
import Membership from "./pages/Membership";
import Bookings from "./pages/Bookings";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/panelUsers" element={<PanelUsers />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/temple" element={<Temple />} />
          <Route path="/sadhu" element={<Sadhu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
