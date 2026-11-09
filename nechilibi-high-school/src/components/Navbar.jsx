
import { Menu, Bell, Search, UserCircle } from "lucide-react";

function Navbar({ activeSection, onMenuClick }) {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-5 md:px-8 flex items-center justify-between sticky top-0 z-30">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden text-gray-700 hover:text-[#C2185B]"
          aria-label="Open navigation menu"
        >
          <Menu size={25} />
        </button>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {activeSection}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Nechilibi High School Management System
          </p>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-4">

        <button
          type="button"
          className="hidden sm:block p-2 rounded-lg hover:bg-pink-50 text-gray-600"
          aria-label="Search"
        >
          <Search size={21} />
        </button>

        <button
          type="button"
          className="relative p-2 rounded-lg hover:bg-pink-50 text-gray-600"
          aria-label="Notifications"
        >
          <Bell size={21} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 border-l pl-3 md:pl-4 border-gray-200">
          <UserCircle size={35} className="text-[#C2185B]" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold">
              Administrator
            </p>

            <p className="text-xs text-gray-500">
              School Admin
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
