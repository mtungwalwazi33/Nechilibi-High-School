
import { useState } from "react";
import {
  Users,
  UserRound,
  Clock,
  BookOpen,
  ClipboardCheck,
  CheckCircle,
  Search,
} from "lucide-react";

const initialStaff = [
  {
    id: 1,
    name: "Mr. Moyo",
    role: "Mathematics Teacher",
    department: "Sciences",
    status: "Present",
  },
  {
    id: 2,
    name: "Mrs. Ndlovu",
    role: "English Teacher",
    department: "Arts",
    status: "Present",
  },
  {
    id: 3,
    name: "Mr. Sibanda",
    role: "Biology Teacher",
    department: "Sciences",
    status: "Not Marked",
  },
  {
    id: 4,
    name: "Mrs. Dube",
    role: "Accounts Teacher",
    department: "Commercials",
    status: "Not Marked",
  },
  {
    id: 5,
    name: "Mr. Ncube",
    role: "Sports Coordinator",
    department: "Sports",
    status: "Present",
  },
];

function StaffStat({ icon: Icon, title, value, description }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p className="text-xs text-gray-400 mt-1">{description}</p>
        </div>
        <div className="bg-pink-50 text-[#C2185B] p-3 rounded-xl">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}

export default function StaffDashboard() {
  const [staff, setStaff] = useState(initialStaff);
  const [searchTerm, setSearchTerm] = useState("");

  const present = staff.filter(
    (member) => member.status === "Present"
  ).length;

  const absent = staff.filter(
    (member) => member.status === "Absent"
  ).length;

  const filteredStaff = staff.filter((member) =>
    `${member.name} ${member.department} ${member.role}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const markAttendance = (id, status) => {
    setStaff((previousStaff) =>
      previousStaff.map((member) =>
        member.id === id ? { ...member, status } : member
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#C2185B] to-[#8E1746] text-white rounded-2xl p-7">
        <p className="text-pink-100 text-sm">Nechilibi High School</p>
        <h1 className="text-3xl font-bold mt-2">Staff Portal</h1>
        <p className="text-pink-100 mt-2">
          Manage staff information, departments and daily attendance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StaffStat
          icon={Users}
          title="Total Staff"
          value={staff.length}
          description="Staff records"
        />
        <StaffStat
          icon={CheckCircle}
          title="Present Today"
          value={present}
          description="Marked present"
        />
        <StaffStat
          icon={Clock}
          title="Absent Today"
          value={absent}
          description="Marked absent"
        />
        <StaffStat
          icon={BookOpen}
          title="Departments"
          value="4"
          description="Teaching and sports"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold">Staff Directory</h2>
              <p className="text-sm text-gray-500">
                View and search school staff.
              </p>
            </div>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-200 rounded-lg pl-10 pr-3 py-2 w-full sm:w-52 outline-none focus:border-[#C2185B]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-pink-50 text-gray-600">
                <tr>
                  <th className="p-3">Staff Member</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Attendance</th>
                </tr>
              </thead>

              <tbody>
                {filteredStaff.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-100"
                  >
                    <td className="p-3">
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-xs text-gray-500">
                        {member.role}
                      </p>
                    </td>

                    <td className="p-3">{member.department}</td>

                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          member.status === "Present"
                            ? "bg-green-100 text-green-700"
                            : member.status === "Absent"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredStaff.length === 0 && (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center p-6 text-gray-500"
                    >
                      No staff members found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <ClipboardCheck className="text-[#C2185B]" />
            <h2 className="font-bold text-lg">Staff Attendance</h2>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Record daily staff attendance.
          </p>

          <div className="space-y-4">
            {staff.map((member) => (
              <div key={member.id} className="border-b pb-4">
                <p className="font-semibold text-sm mb-2">
                  {member.name}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => markAttendance(member.id, "Present")}
                    className="flex-1 bg-green-50 text-green-700 rounded-lg py-2 text-xs font-semibold hover:bg-green-100"
                  >
                    Present
                  </button>

                  <button
                    onClick={() => markAttendance(member.id, "Absent")}
                    className="flex-1 bg-red-50 text-red-700 rounded-lg py-2 text-xs font-semibold hover:bg-red-100"
                  >
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-pink-50 border border-pink-100 rounded-xl p-5 flex gap-3">
        <UserRound className="text-[#C2185B] shrink-0" />
        <div>
          <h3 className="font-bold text-gray-800">
            Staff Management
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Staff attendance and directory information are displayed here
            for school administration and authorised staff.
          </p>
        </div>
      </div>
    </div>
  );
}
