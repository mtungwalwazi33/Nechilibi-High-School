
import { useState } from "react";
import {
  FileText,
  User,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function StudentWithdrawal({ onSubmit }) {
  const [formData, setFormData] = useState({
    studentName: "Lwazi Mtungwa",
    studentId: "NHS-2026-001",
    currentForm: "Form 4",
    parentName: "",
    parentPhone: "",
    withdrawalDate: "",
    reason: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [requestReference, setRequestReference] = useState("");

  // Update the form whenever the user types
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Submit the withdrawal request
  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onSubmit !== "function") {
      alert("The withdrawal submission handler is not connected. Please contact administration.");
      return;
    }

    const requestId = Date.now();

    const request = {
      ...formData,
      id: requestId,
      status: "Pending",
      submittedAt: new Date().toLocaleDateString(),
    };

    onSubmit(request);
    setRequestReference(`WDR-${String(requestId).slice(-6)}`);
    setSubmitted(true);
  };

  // Confirmation screen
  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto">
        <CheckCircle
          size={55}
          className="text-green-600 mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-900">
          Request Submitted
        </h2>

        <p className="text-gray-500 mt-3">
          Your withdrawal request has been submitted for administrative
          review. Your school registration remains active until the
          administration makes a decision.
        </p>

        <p className="text-sm text-gray-400 mt-5">
          Request reference: {requestReference}
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 bg-[#C2185B] text-white px-6 py-3 rounded-lg hover:bg-pink-800 transition"
        >
          Return to Form
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Student Withdrawal Request
        </h1>

        <p className="text-gray-500 mt-1">
          Complete this form to request withdrawal from Nechilibi High School.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="text-yellow-600 shrink-0" />

        <p className="text-sm text-yellow-800">
          Submitting this form does not automatically withdraw you from
          school. All requests must be reviewed and approved by the
          administration.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6"
      >

        {/* STUDENT INFORMATION */}
        <section>
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <User className="text-[#C2185B]" />
            Student Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <FormField label="Student Name">
              <input
                name="studentName"
                value={formData.studentName}
                readOnly
                className="form-input bg-gray-100"
              />
            </FormField>

            <FormField label="Student ID">
              <input
                name="studentId"
                value={formData.studentId}
                readOnly
                className="form-input bg-gray-100"
              />
            </FormField>

            <FormField label="Current Form">
              <input
                name="currentForm"
                value={formData.currentForm}
                readOnly
                className="form-input bg-gray-100"
              />
            </FormField>

          </div>
        </section>

        {/* PARENT INFORMATION */}
        <section>
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Phone className="text-[#C2185B]" />
            Parent or Guardian Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <FormField label="Parent / Guardian Name">
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                placeholder="Enter parent or guardian name"
                className="form-input"
              />
            </FormField>

            <FormField label="Parent / Guardian Phone">
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                required
                placeholder="Enter contact number"
                className="form-input"
              />
            </FormField>

          </div>
        </section>

        {/* WITHDRAWAL DETAILS */}
        <section>
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <FileText className="text-[#C2185B]" />
            Withdrawal Details
          </h2>

          <div className="space-y-4">

            <FormField label="Proposed Withdrawal Date">
              <input
                type="date"
                name="withdrawalDate"
                value={formData.withdrawalDate}
                onChange={handleChange}
                required
                className="form-input"
              />
            </FormField>

            <FormField label="Reason for Withdrawal">
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Please explain the reason for requesting withdrawal..."
                className="form-input"
              />
            </FormField>

            <FormField label="New Residential Address">
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={2}
                placeholder="Enter the student's new address"
                className="form-input"
              />
            </FormField>

          </div>
        </section>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#C2185B] text-white px-6 py-3 rounded-lg hover:bg-pink-800 transition"
        >
          <Send size={18} />
          Submit Withdrawal Request
        </button>

      </form>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {children}
    </div>
  );
}

export default StudentWithdrawal;
