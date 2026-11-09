import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  GraduationCap,
  Users,
  UserCheck,
  Clock,
  BookOpen,
  TrendingUp,
  CalendarDays,
  CheckCircle,
  UserPlus,
} from "lucide-react";

// COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCard from "./components/DashboardCard";
import LandingPage from "./pages/LandingPage";
import SDCPage from "./pages/SDCPage";
import ContactPage from "./pages/ContactPage";

// STUDENT PORTALS
import StudentRegistration from "./portals/student/StudentRegistration";
import StudentDashboard from "./portals/student/StudentDashboard";
import StudentAttendance from "./portals/student/StudentAttendance";
import StudentWithdrawal from "./portals/student/StudentWithdrawal";

// OTHER PORTALS
import ParentDashboard from "./portals/parent/ParentDashboard";
import PrincipalDashboard from "./portals/principal/PrincipalDashboard";
import StaffDashboard from "./portals/staff/StaffDashboard";
import HODDashboard from "./portals/hod/HODDashboard";
import SportsDashboard from "./portals/sports/SportsDashboard";
import AdministrationDashboard from "./portals/administration/AdministrationDashboard";


  function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // URL TO DASHBOARD SECTION
  const routeSections = {
    "/dashboard": "Dashboard",
    "/sdc": "School Development Committee",
    "/students": "Students",
    "/student-portal": "Student Portal",
    "/parents": "Parents",
    "/principal": "Principal",
    "/staff": "Staff",
    "/departments": "Departments",
    "/sports": "Sports",
    "/attendance": "Attendance",
    "/registration": "Students",
    "/withdrawal": "Withdrawal",
    "/administration": "Administration",
    "/contact": "Contact Us",
    "/settings": "Settings",
  };

  const activeSection =
    routeSections[location.pathname] || "Dashboard";
    console.log("Current URL:", location.pathname);
console.log("Active Section:", activeSection);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // NAVIGATION FUNCTION
  const navigateToSection = (section) => {
    const sectionRoutes = {
      Dashboard: "/dashboard",
      "School Development Committee": "/sdc",
"SDC": "/sdc",
      Students: "/students",
      "Student Portal": "/student-portal",
      Parents: "/parents",
      "Parent Portal": "/parents",
      Principal: "/principal",
      Staff: "/staff",
      Departments: "/departments",
      Sports: "/sports",
      Attendance: "/attendance",
      Withdrawal: "/withdrawal",
      Administration: "/administration",
      "Withdrawal Requests": "/administration",
      "Contact Us": "/contact",
      Settings: "/settings",
    };

    navigate(sectionRoutes[section] || "/dashboard");
    setSidebarOpen(false);
  };

  const [schoolStats, setSchoolStats] = useState({
    students: 850,
    staff: 48,
    attendance: 92,
    pendingRequests: 12,
  });

  const [applications, setApplications] = useState([]);
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);
  const [showRegistration, setShowRegistration] = useState(false);

  // STUDENT REGISTRATION SUBMISSION
  const handleApplicationSubmit = (application) => {
    setApplications((previous) => [
      ...previous,
      application,
    ]);

    setSchoolStats((previous) => ({
      ...previous,
      pendingRequests: previous.pendingRequests + 1,
    }));

    setShowRegistration(false);
  };

  // STUDENT WITHDRAWAL SUBMISSION
  const handleWithdrawalSubmit = (request) => {
    setWithdrawalRequests((previous) => [
      request,
      ...previous,
    ]);
  };

  // APPROVE OR REJECT REGISTRATION
  const handleApplicationDecision = (id, decision) => {
    const selectedApplication = applications.find(
      (application) => application.id === id
    );

    if (
      !selectedApplication ||
      selectedApplication.status !== "Pending"
    ) {
      return;
    }

    setApplications((previous) =>
      previous.map((application) =>
        application.id === id
          ? { ...application, status: decision }
          : application
      )
    );

    setSchoolStats((previous) => ({
      ...previous,
      pendingRequests: Math.max(
        0,
        previous.pendingRequests - 1
      ),
      students:
        decision === "Approved"
          ? previous.students + 1
          : previous.students,
    }));
  };

  // APPROVE OR REJECT WITHDRAWAL
  const handleWithdrawalDecision = (id, decision) => {
    const selectedRequest = withdrawalRequests.find(
      (request) => request.id === id
    );

    if (
      !selectedRequest ||
      selectedRequest.status !== "Pending"
    ) {
      return;
    }

    setWithdrawalRequests((previous) =>
      previous.map((request) =>
        request.id === id
          ? { ...request, status: decision }
          : request
      )
    );

    // A real student record must be updated by the backend.
  };

  // UPDATE BROWSER TAB TITLE
  useEffect(() => {
    document.title = `Nechilibi High School | ${activeSection}`;
  }, [activeSection]);

  // DEPARTMENT INFORMATION
  const departments = [
    { name: "Sciences", students: 180, performance: 85 },
    { name: "Arts", students: 160, performance: 78 },
    { name: "Commercials", students: 145, performance: 90 },
    { name: "Sports", students: 120, performance: 88 },
    { name: "Other", students: 65, performance: 72 },
  ];

  // APPLICATION COUNTS
  const pendingApplications = applications.filter(
    (application) => application.status === "Pending"
  ).length;

  const approvedApplications = applications.filter(
    (application) => application.status === "Approved"
  ).length;



  // LANDING PAGE
if (location.pathname === "/") {
  return <LandingPage onNavigate={navigateToSection} />;
}

  // EXISTING SCHOOL DASHBOARD
  return (
    <div className="min-h-screen bg-[#F8F5F7]">

      {/* SIDEBAR */}
      <Sidebar
  activeSection={activeSection}
  setActiveSection={navigateToSection}
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
/>

      {/* MAIN PAGE */}
      <main className="min-h-screen lg:ml-64">

        {/* NAVBAR */}
        <Navbar
          activeSection={activeSection}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="p-5 md:p-8">

          {/* MAIN DASHBOARD */}
          {activeSection === "Dashboard" ? (
            <>
              <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Welcome to Nechilibi High School
                  </h1>

                  <p className="mt-2 text-sm text-gray-500">
                    Your central school management platform.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigateToSection("Attendance")}
                  className="flex items-center gap-2 rounded-lg bg-[#C2185B] px-5 py-3 text-white transition hover:bg-[#9D174D]"
                >
                  <CalendarDays size={19} />
                  School Attendance
                </button>
              </section>

              {/* SCHOOL STATISTICS */}
              <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <DashboardCard
                  title="Total Students"
                  value={schoolStats.students}
                  description="Registered students"
                  icon={<GraduationCap size={25} />}
                  color="bg-pink-100 text-[#C2185B]"
                />

                <DashboardCard
                  title="Total Staff"
                  value={schoolStats.staff}
                  description="Teaching and non-teaching"
                  icon={<Users size={25} />}
                  color="bg-purple-100 text-purple-700"
                />

                <DashboardCard
                  title="Attendance"
                  value={`${schoolStats.attendance}%`}
                  description="Today's student attendance"
                  icon={<UserCheck size={25} />}
                  color="bg-green-100 text-green-700"
                />

                <DashboardCard
                  title="Pending Requests"
                  value={schoolStats.pendingRequests}
                  description="Awaiting approval"
                  icon={<Clock size={25} />}
                  color="bg-yellow-100 text-yellow-700"
                />
              </section>

              {/* ATTENDANCE AND QUICK ACTIONS */}
              <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* ATTENDANCE OVERVIEW */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 xl:col-span-2">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold">
                        Student Attendance
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Daily attendance overview
                      </p>
                    </div>

                    <TrendingUp className="text-green-600" size={25} />
                  </div>

                  <div className="flex flex-col items-center gap-8 sm:flex-row">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-green-500">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold">
                          {schoolStats.attendance}%
                        </h3>

                        <p className="text-xs text-gray-500">
                          Present
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex-1 space-y-5">
                      <AttendanceRow
                        label="Present"
                        percentage={92}
                        color="bg-green-500"
                      />

                      <AttendanceRow
                        label="Absent"
                        percentage={5}
                        color="bg-red-500"
                      />

                      <AttendanceRow
                        label="Late"
                        percentage={3}
                        color="bg-yellow-500"
                      />
                    </div>
                  </div>
                </div>

{/* QUICK ACTIONS */}
<div className="rounded-xl border border-gray-200 bg-white p-6">
  <h2 className="mb-5 text-lg font-bold">
    Quick Actions
  </h2>

  <div className="space-y-3">
    <QuickAction
      label="Manage Students"
      icon={<GraduationCap size={20} />}
      onClick={() => navigateToSection("Students")}
    />

    <QuickAction
      label="Manage Staff"
      icon={<Users size={20} />}
      onClick={() => navigateToSection("Staff")}
    />

    <QuickAction
      label="View Attendance"
      icon={<UserCheck size={20} />}
      onClick={() => navigateToSection("Attendance")}
    />

    <QuickAction
      label="Review Applications"
      icon={<CheckCircle size={20} />}
      onClick={() => navigateToSection("Administration")}
    />

    <QuickAction
      label="Student Portal"
      icon={<GraduationCap size={20} />}
      onClick={() => navigateToSection("Student Portal")}
    />

    <QuickAction
      label="Parent Portal"
      icon={<Users size={20} />}
      onClick={() => navigateToSection("Parents")}
    />

    <QuickAction
      label="Principal Portal"
      icon={<CheckCircle size={20} />}
      onClick={() => navigateToSection("Principal")}
    />

    <QuickAction
      label="Sports Portal"
      icon={<TrophyIcon />}
      onClick={() => navigateToSection("Sports")}
    />
  </div>
</div>

</section>
              {/* DEPARTMENT OVERVIEW */}
              <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-bold">
                    Department Overview
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Academic and sporting departments
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {departments.map((department) => (
                    <div
                      key={department.name}
                      className="rounded-xl border border-gray-200 p-5 transition hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">
                          {department.name}
                        </h3>

                        <BookOpen
                          className="text-[#C2185B]"
                          size={20}
                        />
                      </div>

                      <h2 className="mt-4 text-2xl font-bold">
                        {department.students}
                      </h2>

                      <p className="text-xs text-gray-500">
                        Participating students
                      </p>

                      <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#C2185B]"
                          style={{
                            width: `${department.performance}%`,
                          }}
                        />
                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        Performance indicator: {department.performance}%
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* REGISTRATION REQUESTS */}
              <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-bold">
                      Student Registration Requests
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Applications awaiting administrative review.
                    </p>
                  </div>

                  <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#C2185B]">
                    {pendingApplications} Pending
                  </span>
                </div>

               <button
  type="button"
  onClick={() => navigateToSection("Administration")}
  className="mt-5 rounded-lg bg-[#C2185B] px-5 py-3 text-white hover:bg-[#9D174D]"
>
  Review Applications
</button>
              </section>
            </>

          ) : activeSection === "Students" ? (

            /* STUDENT MANAGEMENT */
            <section className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Student Management
                  </h1>

                  <p className="mt-2 text-sm text-gray-500">
                    Register students and review admission applications.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowRegistration(!showRegistration)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#C2185B] px-5 py-3 text-white transition hover:bg-[#9D174D]"
                >
                  <UserPlus size={19} />
                  Register New Student
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                <DashboardCard
                  title="Registered Students"
                  value={schoolStats.students}
                  description="Currently registered"
                  icon={<GraduationCap size={25} />}
                  color="bg-pink-100 text-[#C2185B]"
                />

                <DashboardCard
                  title="Pending Applications"
                  value={pendingApplications}
                  description="Awaiting approval"
                  icon={<Clock size={25} />}
                  color="bg-yellow-100 text-yellow-700"
                />

                <DashboardCard
                  title="Approved Applications"
                  value={approvedApplications}
                  description="Approved in this session"
                  icon={<CheckCircle size={25} />}
                  color="bg-green-100 text-green-700"
                />
              </div>

              {showRegistration && (
                <StudentRegistration
                  onSubmit={handleApplicationSubmit}
                  onClose={() => setShowRegistration(false)}
                />
              )}

              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-5">
                  <h2 className="text-lg font-bold">
                    Student Applications
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Review applications before students are officially registered.
                  </p>
                </div>

                {applications.length === 0 ? (
                  <div className="py-12 text-center">
                    <GraduationCap
                      size={42}
                      className="mx-auto mb-3 text-gray-300"
                    />

                    <h3 className="font-semibold text-gray-700">
                      No applications yet
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      New student applications will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-pink-50 text-gray-700">
                        <tr>
                          <th className="p-3">Student Name</th>
                          <th className="p-3">Form</th>
                          <th className="p-3">Parent/Guardian</th>
                          <th className="p-3">Date Submitted</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {applications.map((application) => (
                          <tr
                            key={application.id}
                            className="border-b border-gray-100"
                          >
                            <td className="p-3 font-medium">
                              {application.studentName ||
                                `${application.firstName || ""} ${application.lastName || ""}`}
                            </td>

                            <td className="p-3">
                              {application.form || application.currentForm || "—"}
                            </td>

                            <td className="p-3">
                              {application.parentName || "—"}
                            </td>

                            <td className="p-3">
                              {application.submittedAt || "—"}
                            </td>

                            <td className="p-3">
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                  application.status === "Approved"
                                    ? "bg-green-100 text-green-700"
                                    : application.status === "Rejected"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {application.status}
                              </span>
                            </td>

                            <td className="p-3">
                              {application.status === "Pending" ? (
                                <div className="flex flex-wrap gap-2">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleApplicationDecision(
                                        application.id,
                                        "Approved"
                                      )
                                    }
                                    className="rounded-lg bg-green-100 px-3 py-2 text-green-700 hover:bg-green-200"
                                  >
                                    Approve
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleApplicationDecision(
                                        application.id,
                                        "Rejected"
                                      )
                                    }
                                    className="rounded-lg bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200"
                                  >
                                    Reject
                                  </button>
                                </div>
                              ) : (
                                <span className="text-gray-500">
                                  {application.status}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </section>

          ) : activeSection === "Student Portal" ? (

            <StudentDashboard onNavigate={navigateToSection} />

          ) : activeSection === "Attendance" ? (

            <StudentAttendance />

          ) : activeSection === "Withdrawal" ? (

            <StudentWithdrawal onSubmit={handleWithdrawalSubmit} />

          ) : activeSection === "Administration" ||
              activeSection === "Withdrawal Requests" ? (

            <AdministrationDashboard
              applications={applications}
              onApplicationDecision={handleApplicationDecision}
              withdrawalRequests={withdrawalRequests}
              onWithdrawalDecision={handleWithdrawalDecision}
            />

          ) : activeSection === "Parents" ||
              activeSection === "Parent Portal" ? (

            <ParentDashboard />

          ) : activeSection === "Principal" ? (

            <PrincipalDashboard />

          ) : activeSection === "Staff" ? (

            <StaffDashboard />

          ) : activeSection === "Departments" ? (

            <HODDashboard />

          ) : activeSection === "Sports" ? (

  <SportsDashboard />

          ) : activeSection === "School Development Committee" ? (
  <SDCPage />
) : activeSection === "Contact Us" ? (
  <ContactPage />
) : (

            /* OTHER / SETTINGS */
            <section className="rounded-xl border border-gray-200 bg-white p-8">
              <h1 className="text-2xl font-bold text-[#C2185B]">
                {activeSection}
              </h1>

              <p className="mt-3 text-gray-500">
                This section is not connected to a dedicated portal yet.
              </p>
            </section>

          )}

          {/* FOOTER */}
          <footer className="mt-10 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
            © 2026 Nechilibi High School. All rights reserved.
          </footer>

        </div>
      </main>
    </div>
  );
}

// REUSABLE ATTENDANCE ROW
function AttendanceRow({ label, percentage, color }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-semibold">{percentage}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// REUSABLE QUICK ACTION
function QuickAction({ label, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-lg border border-gray-200 p-3 text-sm font-medium transition hover:border-[#C2185B] hover:bg-pink-50"
    >
      <span className="text-[#C2185B]">{icon}</span>
      {label}
    </button>
  );
}

// REUSABLE SPORTS ICON
function TrophyIcon() {
  return <BookOpen size={20} />;
}

export default App;
