
import {
  UserRound,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  Trophy,
  TrendingUp,
  ClipboardList,
  Activity,
} from "lucide-react";

const subjects = [
  { name: "Mathematics", department: "Sciences", mark: 82 },
  { name: "Biology", department: "Sciences", mark: 88 },
  { name: "English", department: "Arts", mark: 76 },
  { name: "History", department: "Arts", mark: 71 },
  { name: "Computer Science", department: "Commercials", mark: 91 },
];

const sports = [
  { name: "Football", position: "Midfielder", performance: "Excellent" },
  { name: "Athletics", position: "100m Sprint", performance: "Very Good" },
];

function StatCard({ icon: Icon, title, value, description }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
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

export default function ParentDashboard() {
  const average = Math.round(
    subjects.reduce((total, subject) => total + subject.mark, 0) /
      subjects.length
  );

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#C2185B] to-[#8E1746] rounded-2xl p-7 text-white">
        <p className="text-pink-100 text-sm">Parent / Guardian Portal</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">
          Welcome, Parent
        </h1>
        <p className="text-pink-100 mt-2">
          Monitor your child's academic progress, attendance and activities.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="bg-pink-100 text-[#C2185B] p-4 rounded-full">
            <UserRound size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Lwazi Mtungwa</h2>
            <p className="text-sm text-gray-500">Student ID: NHS-2026-001</p>
            <p className="text-sm text-gray-500">Form 4 • Class 4A</p>
          </div>
          <span className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            Active Student
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          icon={GraduationCap}
          title="Academic Average"
          value={`${average}%`}
          description="Across listed subjects"
        />
        <StatCard
          icon={CalendarCheck}
          title="Attendance"
          value="92%"
          description="Overall attendance"
        />
        <StatCard
          icon={BookOpen}
          title="Subjects"
          value={subjects.length}
          description="Subjects recorded"
        />
        <StatCard
          icon={Trophy}
          title="Sports"
          value={sports.length}
          description="Active activities"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="text-[#C2185B]" />
          <h2 className="text-lg font-bold">Academic Performance</h2>
        </div>

        <div className="space-y-5">
          {subjects.map((subject) => (
            <div key={subject.name}>
              <div className="flex justify-between text-sm mb-2">
                <div>
                  <span className="font-semibold">{subject.name}</span>
                  <span className="text-gray-400 ml-2">
                    {subject.department}
                  </span>
                </div>
                <span className="font-bold">{subject.mark}%</span>
              </div>

              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-[#C2185B] h-full rounded-full"
                  style={{ width: `${subject.mark}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Activity className="text-[#C2185B]" />
            <h2 className="text-lg font-bold">Department Overview</h2>
          </div>

          {["Sciences", "Arts", "Commercials"].map((department) => (
            <div
              key={department}
              className="flex justify-between border-b border-gray-100 py-4 last:border-0"
            >
              <span className="font-medium">{department}</span>
              <span className="text-green-600 text-sm font-semibold">
                Performance recorded
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="text-[#C2185B]" />
            <h2 className="text-lg font-bold">Sports Participation</h2>
          </div>

          {sports.map((sport) => (
            <div
              key={sport.name}
              className="border-b border-gray-100 py-4 last:border-0"
            >
              <div className="flex justify-between">
                <span className="font-semibold">{sport.name}</span>
                <span className="text-green-600 text-sm">
                  {sport.performance}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Position: {sport.position}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-pink-50 border border-pink-100 rounded-xl p-5">
        <div className="flex items-center gap-2 text-[#C2185B]">
          <ClipboardList size={22} />
          <h2 className="font-bold">Parent Information</h2>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          This portal provides a view of the student's academic results,
          attendance, departmental progress and extracurricular activities.
          Contact the school administration for assistance with student records.
        </p>
      </div>
    </div>
  );
}
