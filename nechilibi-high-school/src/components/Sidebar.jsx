
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  UserCheck,
  BookOpen,
  Trophy,
  ClipboardList,
  Settings,
  School,
  ShieldCheck,
  Landmark,
  Mail,
  X,
} from "lucide-react";

function Sidebar({
  activeSection,
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigation = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Students", icon: GraduationCap },
    { name: "Parents", icon: Users },
    { name: "Principal", icon: School },
    { name: "Staff", icon: UserCheck },
    { name: "Departments", icon: BookOpen },
    { name: "Sports", icon: Trophy },
    { name: "School Development Committee", icon: Landmark },
    { name: "Attendance", icon: ClipboardList },
    { name: "Administration", icon: ShieldCheck },
    { name: "Contact Us", icon: Mail },
    { name: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#C2185B] text-white flex flex-col transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* SCHOOL BRAND */}
        <div className="flex items-center gap-3 px-5 py-6 border-b border-white/20">
          <div className="w-12 h-12 rounded-xl bg-[#F4C2D7] text-[#C2185B] flex items-center justify-center">
            <School size={28} />
          </div>

          <div>
            <h1 className="font-bold tracking-wide">
              NECHILIBI
            </h1>

            <p className="text-xs text-pink-100">
              HIGH SCHOOL
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="ml-auto lg:hidden"
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <p className="text-xs uppercase tracking-widest text-pink-200 px-3 mb-5">
            Main Menu
          </p>

          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;

              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => {
                    setActiveSection(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all
                    ${
                      isActive
                        ? "bg-white text-[#C2185B] font-bold shadow-md"
                        : "text-white hover:bg-white/15"
                    }`}
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* SIDEBAR FOOTER */}
        <div className="p-5 border-t border-white/20">
          <p className="text-xs text-pink-100">
            Education • Excellence • Discipline
          </p>

          <p className="text-xs text-white mt-2">
            © 2026 Nechilibi High School
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
