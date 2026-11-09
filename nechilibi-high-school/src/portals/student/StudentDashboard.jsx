
import {
  GraduationCap,
  Users,
  CalendarCheck,
  UserCheck,
  ClipboardList,
  TrendingUp,
  BookOpen,
  Trophy,
  Bell,
  Clock,
} from "lucide-react";

const schoolStats = [
  {
    title: "Total Students",
    value: "850",
    description: "Enrolled students",
    icon: GraduationCap,
  },
  {
    title: "Total Staff",
    value: "48",
    description: "Teaching and support staff",
    icon: Users,
  },
  {
    title: "Attendance Rate",
    value: "92%",
    description: "Today's school attendance",
    icon: CalendarCheck,
  },
  {
    title: "Pending Applications",
    value: "12",
    description: "Awaiting administration",
    icon: ClipboardList,
  },
];

const departments = [
  { name: "Sciences", hod: "Mr. Sibanda", students: 210, progress: 85 },
  { name: "Arts", hod: "Mrs. Ndlovu", students: 180, progress: 78 },
  { name: "Commercials", hod: "Mr. Dube", students: 160, progress: 82 },
  { name: "Sports", hod: "Mr. Ncube", students: 120, progress: 90 },
  { name: "Other", hod: "To be assigned", students: 80, progress: 70 },
];

const recentActivities = [
  {
    title: "New student registration submitted",
    time: "Today",
    status: "Pending",
  },
  {
    title: "Staff attendance recorded",
    time: "Today",
    status: "Completed",
  },
  {
    title: "Department performance updated",
    time: "Yesterday",
    status: "Completed",
  },
  {
    title: "Student withdrawal request submitted",
    time: "Yesterday",
    status: "Pending",
  },
];

function PrincipalStatCard({ title, value, description, icon: Icon }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p className="text-xs text-gray-400 mt-1">{description}</p>
        </div>

        <div className="bg-pink-50 text-[#C2185B] p-3 rounded-xl">
          <Icon size={25} />
        </div>
      </div>
    </div>
  );
}

export default function PrincipalDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-[#C2185B] to-[#8E1746] text-white p-7 rounded-2xl">
        <p className="text-pink-100 text-sm">School Management</p>

        <h1 className="text-2xl md:text-3xl font-bold mt-2">
          Principal's Dashboard
        </h1>

        <p className="text-pink-100 mt-2">
          Welcome to Nechilibi High School's central management portal.
          Monitor school operations and academic progress.
        </p>
      </div>

      {/* School statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {schoolStats.map((stat) => (
          <PrincipalStatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Overview and performance */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-[#C2185B]" />
            <h2 className="text-lg font-bold">Department Performance</h2>
          </div>

          <div className="space-y-6">
            {departments.map((department) => (
              <div key={department.name}>
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <div>
                    <p className="font-semibold">{department.name}</p>
                    <p className="text-xs text-gray-500">
                      HOD: {department.hod} · {department.students} students
                    </p>
                  </div>

                  <span className="font-bold text-[#C2185B]">
                    {department.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C2185B] h-full rounded-full"
                    style={{ width: `${department.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick overview */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="text-[#C2185B]" />
            <h2 className="text-lg font-bold">School Overview</h2>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-pink-50 text-[#C2185B] p-3 rounded-lg">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="font-semibold">Student Management</p>
                <p className="text-xs text-gray-500">
                  Enrolment and student records
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-pink-50 text-[#C2185B] p-3 rounded-lg">
                <UserCheck size={22} />
              </div>
              <div>
                <p className="font-semibold">Staff Management</p>
                <p className="text-xs text-gray-500">
                  Staff records and attendance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-pink-50 text-[#C2185B] p-3 rounded-lg">
                <Trophy size={22} />
              </div>
              <div>
                <p className="font-semibold">Sports Management</p>
                <p className="text-xs text-gray-500">
                  Teams and student participation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-pink-50 text-[#C2185B] p-3 rounded-lg">
                <CalendarCheck size={22} />
              </div>
              <div>
                <p className="font-semibold">School Attendance</p>
                <p className="text-xs text-gray-500">
                  Monitor daily attendance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent activities */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <Bell className="text-[#C2185B]" />
          <h2 className="text-lg font-bold">Recent School Activities</h2>
        </div>

        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <div className="bg-pink-50 text-[#C2185B] p-2 rounded-lg">
                  <ClipboardList size={20} />
                </div>

                <div>
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>

              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  activity.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notices */}
      <div className="bg-pink-50 border border-pink-100 rounded-xl p-5">
        <div className="flex items-center gap-2 text-[#C2185B]">
          <Clock size={22} />
          <h2 className="font-bold">Administrative Reminder</h2>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          Review pending student registrations and withdrawal requests.
          Ensure departmental reports and staff attendance records are
          updated regularly.
        </p>
      </div>

      <p className="text-xs text-gray-400 text-center">
        Principal Portal · Nechilibi High School
      </p>
    </div>
  );
}
