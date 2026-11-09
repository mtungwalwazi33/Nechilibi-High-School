
import { useState } from "react";
import {
  BookOpen,
  Users,
  GraduationCap,
  TrendingUp,
  ClipboardList,
  Search,
  Award,
  FileText,
  Plus,
} from "lucide-react";

const initialDepartments = [
  {
    name: "Sciences",
    hod: "Mr. Sibanda",
    subjects: ["Mathematics", "Biology", "Physics", "Chemistry"],
    teachers: 8,
    students: 210,
    average: 85,
  },
  {
    name: "Arts",
    hod: "Mrs. Ndlovu",
    subjects: ["English", "History", "Geography", "Literature"],
    teachers: 7,
    students: 180,
    average: 78,
  },
  {
    name: "Commercials",
    hod: "Mr. Dube",
    subjects: ["Accounting", "Business Studies", "Economics"],
    teachers: 6,
    students: 160,
    average: 82,
  },
  {
    name: "Sports",
    hod: "Mr. Ncube",
    subjects: ["Football", "Athletics", "Netball"],
    teachers: 5,
    students: 120,
    average: 90,
  },
  {
    name: "Other",
    hod: "To be assigned",
    subjects: ["Additional subjects and activities"],
    teachers: 2,
    students: 80,
    average: 70,
  },
];

const initialResults = [
  { id: 1, student: "Lwazi Mtungwa", subject: "Mathematics", mark: 82 },
  { id: 2, student: "Elvis Moyo", subject: "Biology", mark: 88 },
  { id: 3, student: "Mfanelo Ndlovu", subject: "English", mark: 76 },
  { id: 4, student: "Mandla Sibanda", subject: "History", mark: 71 },
  { id: 5, student: "Limu Dube", subject: "Accounting", mark: 91 },
];

function HODStat({ icon: Icon, title, value, description }) {
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

export default function HODDashboard() {
  const [departments] = useState(initialDepartments);
  const [selectedDepartment, setSelectedDepartment] = useState("Sciences");
  const [results, setResults] = useState(initialResults);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResultForm, setShowResultForm] = useState(false);

  const [newResult, setNewResult] = useState({
    student: "",
    subject: "",
    mark: "",
  });

  const currentDepartment = departments.find(
    (department) => department.name === selectedDepartment
  );

  const filteredResults = results.filter((result) =>
    `${result.student} ${result.subject}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleResultChange = (e) => {
    const { name, value } = e.target;
    setNewResult((previous) => ({ ...previous, [name]: value }));
  };

  const handleResultSubmit = (e) => {
    e.preventDefault();

    const mark = Number(newResult.mark);

    if (
      !newResult.student.trim() ||
      !newResult.subject.trim() ||
      newResult.mark === "" ||
      mark < 0 ||
      mark > 100
    ) {
      return;
    }

    setResults((previous) => [
      ...previous,
      { ...newResult, id: Date.now(), mark },
    ]);

    setNewResult({ student: "", subject: "", mark: "" });
    setShowResultForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#C2185B] to-[#8E1746] text-white p-7 rounded-2xl">
        <p className="text-pink-100 text-sm">Academic Management</p>
        <h1 className="text-3xl font-bold mt-2">
          Head of Department Portal
        </h1>
        <p className="text-pink-100 mt-2">
          Manage departmental activities, teachers, subjects and student
          academic performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <HODStat
          icon={BookOpen}
          title="Departments"
          value={departments.length}
          description="Available departments"
        />
        <HODStat
          icon={Users}
          title="Teachers"
          value={departments.reduce((total, item) => total + item.teachers, 0)}
          description="Across departments"
        />
        <HODStat
          icon={GraduationCap}
          title="Students"
          value={departments.reduce((total, item) => total + item.students, 0)}
          description="Department enrolments"
        />
        <HODStat
          icon={TrendingUp}
          title="Results Recorded"
          value={results.length}
          description="Demonstration records"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-lg mb-4">Select Department</h2>

        <div className="flex flex-wrap gap-2">
          {departments.map((department) => (
            <button
              key={department.name}
              onClick={() => setSelectedDepartment(department.name)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                selectedDepartment === department.name
                  ? "bg-[#C2185B] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-pink-50"
              }`}
            >
              {department.name}
            </button>
          ))}
        </div>
      </div>

      {currentDepartment && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center gap-3 mb-5">
              <div>
                <h2 className="text-xl font-bold">
                  {currentDepartment.name} Department
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Head: {currentDepartment.hod}
                </p>
              </div>
              <BookOpen className="text-[#C2185B]" size={28} />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-pink-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Teachers</p>
                <p className="text-2xl font-bold text-[#C2185B]">
                  {currentDepartment.teachers}
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Students</p>
                <p className="text-2xl font-bold text-[#C2185B]">
                  {currentDepartment.students}
                </p>
              </div>
            </div>

            <h3 className="font-bold mb-3">Subjects and Activities</h3>

            <div className="flex flex-wrap gap-2">
              {currentDepartment.subjects.map((subject) => (
                <span
                  key={subject}
                  className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-sm">
                  Department Performance
                </span>
                <span className="text-[#C2185B] font-bold">
                  {currentDepartment.average}%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C2185B] rounded-full"
                  style={{ width: `${currentDepartment.average}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-[#C2185B]" />
              <h2 className="font-bold">Department Responsibilities</h2>
            </div>

            {[
              "Monitor subject teachers",
              "Review student results",
              "Prepare departmental reports",
              "Track academic progress",
              "Coordinate assessments",
            ].map((item) => (
              <div key={item} className="flex gap-2 py-3 border-b last:border-0">
                <ClipboardList
                  size={17}
                  className="text-[#C2185B] shrink-0"
                />
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
          <div>
            <h2 className="text-lg font-bold">Student Academic Results</h2>
            <p className="text-sm text-gray-500">
              Review and record student marks.
            </p>
          </div>

          <button
            onClick={() => setShowResultForm((previous) => !previous)}
            className="flex items-center justify-center gap-2 bg-[#C2185B] text-white px-4 py-2 rounded-lg hover:bg-[#a3154c]"
          >
            <Plus size={18} />
            Add Result
          </button>
        </div>

        {showResultForm && (
          <form
            onSubmit={handleResultSubmit}
            className="bg-pink-50 p-5 rounded-xl mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              name="student"
              value={newResult.student}
              onChange={handleResultChange}
              placeholder="Student name"
              className="p-3 rounded-lg border border-gray-200 outline-none focus:border-[#C2185B]"
              required
            />

            <input
              name="subject"
              value={newResult.subject}
              onChange={handleResultChange}
              placeholder="Subject"
              className="p-3 rounded-lg border border-gray-200 outline-none focus:border-[#C2185B]"
              required
            />

            <input
              name="mark"
              type="number"
              min="0"
              max="100"
              value={newResult.mark}
              onChange={handleResultChange}
              placeholder="Mark (0–100)"
              className="p-3 rounded-lg border border-gray-200 outline-none focus:border-[#C2185B]"
              required
            />

            <button
              type="submit"
              className="bg-[#C2185B] text-white rounded-lg p-3 font-semibold hover:bg-[#a3154c]"
            >
              Save Result
            </button>
          </form>
        )}

        <div className="relative mb-5">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search student or subject..."
            className="w-full sm:max-w-sm border border-gray-200 rounded-lg pl-10 pr-3 py-2 outline-none focus:border-[#C2185B]"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-pink-50 text-gray-600">
              <tr>
                <th className="p-3">Student</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Mark</th>
                <th className="p-3">Performance</th>
              </tr>
            </thead>

            <tbody>
              {filteredResults.map((result) => (
                <tr key={result.id} className="border-b border-gray-100">
                  <td className="p-3 font-semibold">{result.student}</td>
                  <td className="p-3">{result.subject}</td>
                  <td className="p-3">{result.mark}%</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        result.mark >= 80
                          ? "bg-green-100 text-green-700"
                          : result.mark >= 50
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {result.mark >= 80
                        ? "Excellent"
                        : result.mark >= 50
                        ? "Satisfactory"
                        : "Needs Improvement"}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredResults.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-500">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-pink-50 border border-pink-100 rounded-xl p-5 flex gap-3">
        <FileText className="text-[#C2185B] shrink-0" />
        <div>
          <h3 className="font-bold">Departmental Reporting</h3>
          <p className="text-sm text-gray-600 mt-1">
            HODs can use this portal to review results and prepare academic
            reports for the principal. Records in this prototype are stored
            temporarily in application state.
          </p>
        </div>
      </div>
    </div>
  );
}
