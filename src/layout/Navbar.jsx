import { FiBell, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 style={{ color: "#1F2937" }} className="text-lg font-semibold">
          Dashboard
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-96">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <div className="relative">
          <FiBell className="text-xl text-gray-700" />
          <span
            className="absolute -top-1 -right-1 text-white text-xs px-1 rounded-full"
            style={{ backgroundColor: "#C10007" }}
          >
            2
          </span>
        </div>
        {/* Profile */}
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: "#542126" }}
          >
            N
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-medium">Noor Azam</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
