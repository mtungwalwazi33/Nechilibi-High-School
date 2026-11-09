
import { useState } from "react";
import {
  Trophy,
  Users,
  CalendarCheck,
  Medal,
  Activity,
  Plus,
  Search,
  CheckCircle,
} from "lucide-react";

const initialTeams = [
  {
    id: 1,
    name: "Football",
    coach: "Mr. Ncube",
    category: "Boys",
    members: 18,
    matches: 8,
    wins: 6,
  },
  {
    id: 2,
    name: "Netball",
    coach: "Mrs. Dube",
    category: "Girls",
    members: 12,
    matches: 7,
    wins: 5,
  },
  {
    id: 3,
    name: "Athletics",
    coach: "Mr. Moyo",
    category: "Mixed",
    members: 20,
    matches: 5,
    wins: 4,
  },
  {
    id: 4,
    name: "Volleyball",
    coach: "Mrs. Ndlovu",
    category: "Mixed",
    members: 14,
    matches: 6,
    wins: 3,
  },
];

const initialAthletes = [
  {
    id: 1,
    name: "Lwazi Mtungwa",
    studentId: "NHS-2026-001",
    sport: "Football",
    attendance: "Present",
    performance: "Excellent",
  },
  {
    id: 2,
    name: "Elvis Moyo",
    studentId: "NHS-2026-002",
    sport: "Athletics",
    attendance: "Present",
    performance: "Very Good",
  },
  {
    id: 3,
    name: "Mfanelo Ndlovu",
    studentId: "NHS-2026-003",
    sport: "Netball",
    attendance: "Not Marked",
    performance: "Good",
  },
  {
    id: 4,
    name: "Mandla Sibanda",
    studentId: "NHS-2026-004",
    sport: "Football",
    attendance: "Present",
    performance: "Very Good",
  },
];

function SportsStat({ icon: Icon, title, value, description }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
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

export default function SportsDashboard() {
  const [teams, setTeams] = useState(initialTeams);
  const [athletes, setAthletes] = useState(initialAthletes);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTeamForm, setShowTeamForm] = useState(false);

  const [newTeam, setNewTeam] = useState({
    name: "",
    coach: "",
    category: "Mixed",
  });

  const presentAthletes = athletes.filter(
    (athlete) => athlete.attendance === "Present"
  ).length;

  const filteredAthletes = athletes.filter((athlete) =>
    `${athlete.name} ${athlete.sport} ${athlete.studentId}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const markAttendance = (id, attendance) => {
    setAthletes((previous) =>
      previous.map((athlete) =>
        athlete.id === id ? { ...athlete, attendance } : athlete
      )
    );
  };

  const handleTeamChange = (e) => {
    const { name, value } = e.target;
    setNewTeam((previous) => ({ ...previous, [name]: value }));
  };

  const addTeam = (e) => {
    e.preventDefault();

    if (!newTeam.name.trim() || !newTeam.coach.trim()) return;

    setTeams((previous) => [
      ...previous,
      {
        ...newTeam,
        id: Date.now(),
        members: 0,
        matches: 0,
        wins: 0,
      },
    ]);

    setNewTeam({ name: "", coach: "", category: "Mixed" });
    setShowTeamForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C2185B] to-[#8E1746] text-white p-7 rounded-2xl">
        <p className="text-pink-100 text-sm">Nechilibi High School</p>
        <h1 className="text-3xl font-bold mt-2">Sports Portal</h1>
        <p className="text-pink-100 mt-2">
          Manage school teams, athletes, participation and sports performance.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <SportsStat
          icon={Trophy}
          title="Sports Teams"
          value={teams.length}
          description="Registered teams"
        />
        <SportsStat
          icon={Users}
          title="Athletes"
          value={athletes.length}
          description="Sample athlete records"
        />
        <SportsStat
          icon={CalendarCheck}
          title="Present Today"
          value={presentAthletes}
          description="Sports attendance"
        />
        <SportsStat
          icon={Medal}
          title="Matches Played"
          value={teams.reduce((total, team) => total + team.matches, 0)}
          description="Across all teams"
        />
      </div>

      {/* Teams */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold">School Sports Teams</h2>
            <p className="text-sm text-gray-500">
              Manage sports teams and their coaches.
            </p>
          </div>

          <button
            onClick={() => setShowTeamForm((previous) => !previous)}
            className="flex items-center justify-center gap-2 bg-[#C2185B] text-white px-4 py-2 rounded-lg hover:bg-[#a3154c]"
          >
            <Plus size={18} />
            Add Team
          </button>
        </div>

        {showTeamForm && (
          <form
            onSubmit={addTeam}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-pink-50 p-5 rounded-xl mb-6"
          >
            <input
              name="name"
              value={newTeam.name}
              onChange={handleTeamChange}
              placeholder="Sport name"
              className="p-3 rounded-lg border border-gray-200 outline-none focus:border-[#C2185B]"
              required
            />

            <input
              name="coach"
              value={newTeam.coach}
              onChange={handleTeamChange}
              placeholder="Coach name"
              className="p-3 rounded-lg border border-gray-200 outline-none focus:border-[#C2185B]"
              required
            />

            <select
              name="category"
              value={newTeam.category}
              onChange={handleTeamChange}
              className="p-3 rounded-lg border border-gray-200 outline-none focus:border-[#C2185B]"
            >
              <option>Mixed</option>
              <option>Boys</option>
              <option>Girls</option>
            </select>

            <button
              type="submit"
              className="sm:col-span-3 bg-[#C2185B] text-white p-3 rounded-lg font-semibold hover:bg-[#a3154c]"
            >
              Save Team
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {teams.map((team) => (
            <div
              key={team.id}
              className="border border-gray-100 rounded-xl p-5 hover:border-pink-200 transition"
            >
              <div className="bg-pink-50 text-[#C2185B] p-3 rounded-xl w-fit mb-4">
                <Trophy size={24} />
              </div>

              <h3 className="font-bold text-lg">{team.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Coach: {team.coach}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Category: {team.category}
              </p>

              <div className="border-t mt-4 pt-4 flex justify-between text-sm">
                <div>
                  <p className="text-gray-400 text-xs">Members</p>
                  <p className="font-bold">{team.members}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Wins</p>
                  <p className="font-bold text-green-600">{team.wins}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Matches</p>
                  <p className="font-bold">{team.matches}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Athletes and attendance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
          <div>
            <h2 className="text-lg font-bold">Athlete Management</h2>
            <p className="text-sm text-gray-500">
              View athletes and record sports attendance.
            </p>
          </div>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search athletes..."
              className="border border-gray-200 rounded-lg pl-10 pr-3 py-2 w-full sm:w-60 outline-none focus:border-[#C2185B]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-pink-50 text-gray-600">
              <tr>
                <th className="p-3">Athlete</th>
                <th className="p-3">Student ID</th>
                <th className="p-3">Sport</th>
                <th className="p-3">Performance</th>
                <th className="p-3">Attendance</th>
                <th className="p-3">Record Attendance</th>
              </tr>
            </thead>

            <tbody>
              {filteredAthletes.map((athlete) => (
                <tr key={athlete.id} className="border-b border-gray-100">
                  <td className="p-3 font-semibold">{athlete.name}</td>
                  <td className="p-3">{athlete.studentId}</td>
                  <td className="p-3">{athlete.sport}</td>
                  <td className="p-3">{athlete.performance}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        athlete.attendance === "Present"
                          ? "bg-green-100 text-green-700"
                          : athlete.attendance === "Absent"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {athlete.attendance}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => markAttendance(athlete.id, "Present")}
                        className="text-green-700 bg-green-50 px-2 py-1 rounded text-xs"
                      >
                        Present
                      </button>
                      <button
                        onClick={() => markAttendance(athlete.id, "Absent")}
                        className="text-red-700 bg-red-50 px-2 py-1 rounded text-xs"
                      >
                        Absent
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredAthletes.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-500">
                    No athletes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sports responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#C2185B]">
            <Activity size={22} />
            <h3 className="font-bold">Sports Development</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Coordinate training sessions, school competitions, athlete
            development and inter-school sporting events.
          </p>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#C2185B]">
            <CheckCircle size={22} />
            <h3 className="font-bold">Performance Monitoring</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Track participation, attendance, match results and individual
            athlete progress.
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center">
        Sports Management Portal · Nechilibi High School
      </p>
    </div>
  );
}
