
import {
  FileText,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

function WithdrawalRequests({ requests, onDecision }) {
  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approved = requests.filter(
    (request) => request.status === "Approved"
  ).length;

  const rejected = requests.filter(
    (request) => request.status === "Rejected"
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Withdrawal Requests</h1>
        <p className="text-gray-500 mt-1">
          Review and manage student withdrawal applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Summary title="Pending" value={pending} icon={<Clock />} />
        <Summary title="Approved" value={approved} icon={<CheckCircle />} />
        <Summary title="Rejected" value={rejected} icon={<XCircle />} />
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <FileText className="text-[#C2185B]" />
          <h2 className="font-bold text-lg">Submitted Applications</h2>
        </div>

        {requests.length === 0 ? (
          <p className="text-gray-500 py-8 text-center">
            No withdrawal requests have been submitted yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-pink-50 text-gray-600 text-sm">
                  <th className="p-3">Student</th>
                  <th className="p-3">Student ID</th>
                  <th className="p-3">Parent / Guardian</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Reason</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr key={request.id} className="border-b text-sm">
                    <td className="p-3 font-medium">{request.studentName}</td>
                    <td className="p-3">{request.studentId}</td>
                    <td className="p-3">{request.parentName}</td>
                    <td className="p-3">{request.submittedAt}</td>
                    <td className="p-3 max-w-48">{request.reason}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : request.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="p-3">
                      {request.status === "Pending" ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => onDecision(request.id, "Approved")}
                            className="bg-green-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-green-700"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => onDecision(request.id, "Rejected")}
                            className="bg-red-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-red-700"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-400">Reviewed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function Summary({ title, value, icon }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
      <div className="text-[#C2185B] mb-3">{icon}</div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

export default WithdrawalRequests;
