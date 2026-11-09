
import { useState } from "react";
import {
  CalendarDays,
  CheckCircle,
  XCircle,
  Clock,
  ClipboardCheck,
} from "lucide-react";

function StudentAttendance() {
  const [attendanceRecords] = useState([
    { date: "03 Nov 2026", subject: "Mathematics", status: "Present" },
    { date: "02 Nov 2026", subject: "English", status: "Present" },
    { date: "30 Oct 2026", subject: "Biology", status: "Late" },
    { date: "29 Oct 2026", subject: "History", status: "Absent" },
    { date: "28 Oct 2026", subject: "Computer Science", status: "Present" },
    { date: "27 Oct 2026", subject: "Mathematics", status: "Present" },
  ]);

  const present = attendanceRecords.filter(
    (record) => record.status === "Present"
  ).length;

  const absent = attendanceRecords.filter(
    (record) => record.status === "Absent"
  ).length;

  const late = attendanceRecords.filter(
    (record) => record.status === "Late"
  ).length;

  const attendanceRate = Math.round(
    (present / attendanceRecords.length) * 100
  );

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          My Attendance
        </h1>
        <p className="text-gray-500 mt-1">
          Review your school attendance record.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <AttendanceCard
          title="Attendance Rate"
          value={`${attendanceRate}%`}
          icon={<ClipboardCheck />}
          color="text-[#C2185B]"
        />

        <AttendanceCard
          title="Present"
          value={present}
          icon={<CheckCircle />}
          color="text-green-600"
        />

        <AttendanceCard
          title="Absent"
          value={absent}
          icon={<XCircle />}
          color="text-red-600"
        />

        <AttendanceCard
          title="Late"
          value={late}
          icon={<Clock />}
          color="text-yellow-600"
        />

      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">

        <div className="flex items-center gap-2 mb-5">
          <CalendarDays className="text-[#C2185B]" />
          <h2 className="text-lg font-bold">
            Attendance History
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead>
              <tr className="border-b bg-pink-50 text-gray-600 text-sm">
                <th className="p-3">Date</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="p-3">{record.date}</td>
                  <td className="p-3">{record.subject}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        record.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : record.status === "Absent"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Demonstration records only. Actual attendance will require
          a connected school database.
        </p>

      </div>

    </div>
  );
}

function AttendanceCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
      <div className={`mb-3 ${color}`}>
        {icon}
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
}

export default StudentAttendance;
