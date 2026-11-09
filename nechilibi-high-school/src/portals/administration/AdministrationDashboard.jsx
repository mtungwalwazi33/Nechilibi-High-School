
import {
  ClipboardList,
  GraduationCap,
  UserMinus,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  ShieldCheck,
} from "lucide-react";

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-2xl font-bold mt-2">{value}</h2>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon size={25} />
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status || "Pending"}
    </span>
  );
}

export default function AdministrationDashboard({
  applications = [],
  onApplicationDecision,
  withdrawalRequests = [],
  onWithdrawalDecision,
}) {
  const pendingApplications = applications.filter(
    (item) => item.status === "Pending"
  );

  const pendingWithdrawals = withdrawalRequests.filter(
    (item) => item.status === "Pending"
  );

  const approvedApplications = applications.filter(
    (item) => item.status === "Approved"
  ).length;

  const approvedWithdrawals = withdrawalRequests.filter(
    (item) => item.status === "Approved"
  ).length;

  const getStudentName = (application) =>
    application.studentName ||
    [application.firstName, application.lastName]
      .filter(Boolean)
      .join(" ") ||
    "Student name unavailable";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C2185B] to-[#8E1746] text-white rounded-2xl p-7">
        <p className="text-pink-100 text-sm">Nechilibi High School</p>
        <h1 className="text-3xl font-bold mt-2">
          Administration Portal
        </h1>
        <p className="text-pink-100 mt-2">
          Manage student admissions, withdrawal requests and administrative
          decisions.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Pending Admissions"
          value={pendingApplications.length}
          icon={GraduationCap}
          color="bg-pink-50 text-[#C2185B]"
        />

        <StatCard
          title="Pending Withdrawals"
          value={pendingWithdrawals.length}
          icon={UserMinus}
          color="bg-yellow-50 text-yellow-700"
        />

        <StatCard
          title="Approved Admissions"
          value={approvedApplications}
          icon={CheckCircle}
          color="bg-green-50 text-green-700"
        />

        <StatCard
          title="Approved Withdrawals"
          value={approvedWithdrawals}
          icon={Users}
          color="bg-blue-50 text-blue-700"
        />
      </div>

      {/* Registration applications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <GraduationCap className="text-[#C2185B]" size={24} />
          <div>
            <h2 className="text-lg font-bold">
              Student Registration Applications
            </h2>
            <p className="text-sm text-gray-500">
              Review new student admission requests.
            </p>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-10">
            <ClipboardList
              size={38}
              className="mx-auto text-gray-300 mb-3"
            />
            <p className="font-semibold text-gray-600">
              No registration applications yet
            </p>
            <p className="text-sm text-gray-400 mt-1">
              New applications will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-pink-50 text-gray-600">
                <tr>
                  <th className="p-3">Student</th>
                  <th className="p-3">Form</th>
                  <th className="p-3">Parent / Guardian</th>
                  <th className="p-3">Submitted</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Decision</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr
                    key={application.id}
                    className="border-b border-gray-100"
                  >
                    <td className="p-3 font-semibold">
                      {getStudentName(application)}
                    </td>

                    <td className="p-3">
                      {application.form || application.currentForm || "—"}
                    </td>

                    <td className="p-3">
                      <p>{application.parentName || "—"}</p>
                      <p className="text-xs text-gray-400">
                        {application.parentPhone || ""}
                      </p>
                    </td>

                    <td className="p-3">
                      {application.submittedAt || "—"}
                    </td>

                    <td className="p-3">
                      <StatusBadge status={application.status} />
                    </td>

                    <td className="p-3">
                      {application.status === "Pending" ? (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              onApplicationDecision?.(
                                application.id,
                                "Approved"
                              )
                            }
                            className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-green-100"
                          >
                            Approve
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              onApplicationDecision?.(
                                application.id,
                                "Rejected"
                              )
                            }
                            className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-red-100"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">
                          Decision recorded
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

      {/* Withdrawal requests */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <UserMinus className="text-[#C2185B]" size={24} />
          <div>
            <h2 className="text-lg font-bold">
              Student Withdrawal Requests
            </h2>
            <p className="text-sm text-gray-500">
              Review requests before changing a student's registration status.
            </p>
          </div>
        </div>

        {withdrawalRequests.length === 0 ? (
          <div className="text-center py-10">
            <Clock size={38} className="mx-auto text-gray-300 mb-3" />
            <p className="font-semibold text-gray-600">
              No withdrawal requests yet
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Submitted withdrawal requests will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-pink-50 text-gray-600">
                <tr>
                  <th className="p-3">Student</th>
                  <th className="p-3">Student ID</th>
                  <th className="p-3">Parent / Guardian</th>
                  <th className="p-3">Reason</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Decision</th>
                </tr>
              </thead>

              <tbody>
                {withdrawalRequests.map((request) => (
                  <tr key={request.id} className="border-b border-gray-100">
                    <td className="p-3 font-semibold">
                      {request.studentName || "Student"}
                    </td>

                    <td className="p-3">
                      {request.studentId || "—"}
                    </td>

                    <td className="p-3">
                      <p>{request.parentName || "—"}</p>
                      <p className="text-xs text-gray-400">
                        {request.parentPhone || ""}
                      </p>
                    </td>

                    <td className="p-3 max-w-xs">
                      {request.reason || "—"}
                    </td>

                    <td className="p-3">
                      <StatusBadge status={request.status} />
                    </td>

                    <td className="p-3">
                      {request.status === "Pending" ? (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              onWithdrawalDecision?.(
                                request.id,
                                "Approved"
                              )
                            }
                            className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-green-100"
                          >
                            Approve
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              onWithdrawalDecision?.(
                                request.id,
                                "Rejected"
                              )
                            }
                            className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-red-100"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">
                          Decision recorded
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

      {/* Policy reminder */}
      <div className="bg-pink-50 border border-pink-100 rounded-xl p-5">
        <div className="flex items-center gap-2 text-[#C2185B]">
          <ShieldCheck size={23} />
          <h2 className="font-bold">Administrative Approval Policy</h2>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          Student registration applications must be approved by the
          administration before admission is finalised. A student's existing
          registration must remain active until a withdrawal request has been
          approved. Rejected requests must not change the student's
          registration status.
        </p>
      </div>
    </div>
  );
}
