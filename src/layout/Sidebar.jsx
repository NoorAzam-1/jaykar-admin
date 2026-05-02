import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiMap,
  FiUser,
  FiCalendar,
  FiImage,
  FiLayers,
  FiCreditCard,
  FiFileText,
  FiSettings,
  FiClipboard,
  FiLogOut,
} from "react-icons/fi";

const menuItems = [
  { icon: <FiHome />, label: "Dashboard", path: "/" },
  { icon: <FiUsers />, label: "Panel Users", path: "/panelUsers" },
  { icon: <FiUserCheck />, label: "User Management", path: "/user-management" },
  { icon: <FiMap />, label: "Temple & Tirtha", path: "/temple" },
  { icon: <FiUser />, label: "Sadhu-Sant", path: "/sadhu" },
  { icon: <FiCalendar />, label: "Events & Mahotsav", path: "/events" },
  { icon: <FiImage />, label: "Posts / Social", path: "/posts" },
  { icon: <FiLayers />, label: "Groups", path: "/groups" },
  { icon: <FiCreditCard />, label: "Membership", path: "/membership" },
  { icon: <FiClipboard />, label: "Bookings", path: "/bookings" },
  { icon: <FiFileText />, label: "Reports", path: "/reports" },
  { icon: <FiSettings />, label: "Settings", path: "/settings" },
  { icon: <FiLogOut />, label: "Logout", danger: true },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (item, index) => {
    setActiveIndex(index);

    if (item.label === "Logout") {
      alert("Logout clicked"); 
      return;
    }

    navigate(item.path);
  };

  return (
    <div
      className={`h-screen bg-white shadow-md transition-all duration-300 
      ${isOpen ? "w-64" : "w-16"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center justify-center py-4 border-b">
        <span style={{ color: "#542126" }}>🪷</span>
      </div>

      <div className="flex flex-col gap-2 mt-4 px-2">
        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => handleClick(item, index)}
              className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer"
              style={{backgroundColor: isActive ? "#542126" : "transparent",
                color: item.danger ? "#C10007" : isActive ? "#fff" : "#1F2937",
              }}
            >
              <div className="text-xl">{item.icon}</div>

              {isOpen && <span>{item.label}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
