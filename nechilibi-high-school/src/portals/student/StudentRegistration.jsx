
import { useState } from "react";
import {
  UserPlus,
  User,
  CalendarDays,
  Phone,
  BookOpen,
  MapPin,
  Send,
  X,
} from "lucide-react";

function StudentRegistration({ onClose, onSubmit }) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    form: "",
    parentName: "",
    parentPhone: "",
    previousSchool: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Submit registration application
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value.trim())) {
      setMessage("Please complete all required fields.");
      return;
    }

    const application = {
      ...formData,
      id: Date.now(),
      status: "Pending",
      submittedAt: new Date().toLocaleDateString(),
    };

    onSubmit(application);

    setMessage("Registration application submitted successfully!");
    
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      form: "",
      parentName: "",
      parentPhone: "",
      previousSchool: "",
      address: "",
    });
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#C2185B] focus:ring-2 focus:ring-pink-100";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">

      {/* HEADER */}
      <div className="flex justify-between items-center border-b p-6">

        <div className="flex items-center gap-3">

          <div className="bg-pink-100 text-[#C2185B] p-3 rounded-lg">
            <UserPlus size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Student Registration
            </h2>

            <p className="text-sm text-gray-500">
              New student admission application
            </p>
          </div>

        </div>

        {onClose && (
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <X size={22} />
          </button>
        )}

      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">

        {/* PERSONAL DETAILS */}
        <section>
          <h3 className="font-semibold text-[#C2185B] mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                First Name *
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name *
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Date of Birth *
              </label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Gender *
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputStyle}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Applying for *
              </label>

              <select
                name="form"
                value={formData.form}
                onChange={handleChange}
                className={inputStyle}
                required
              >
                <option value="">Select form</option>
                <option value="Form 1">Form 1</option>
                <option value="Form 2">Form 2</option>
                <option value="Form 3">Form 3</option>
                <option value="Form 4">Form 4</option>
                <option value="Form 5">Form 5</option>
                <option value="Form 6">Form 6</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Previous School *
              </label>

              <input
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                placeholder="Previous school"
                className={inputStyle}
                required
              />
            </div>

          </div>
        </section>

        {/* PARENT DETAILS */}
        <section className="border-t pt-6">

          <h3 className="font-semibold text-[#C2185B] mb-4">
            Parent / Guardian Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Parent / Guardian Name *
              </label>

              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter guardian's full name"
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Contact Number *
              </label>

              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className={inputStyle}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Residential Address *
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter residential address"
                rows="3"
                className={inputStyle}
                required
              />
            </div>

          </div>

        </section>

        {/* MESSAGE */}
        {message && (
          <div className="rounded-lg bg-pink-50 text-[#C2185B] p-4 text-sm">
            {message}
          </div>
        )}

        {/* SUBMIT */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 border-t pt-6">

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg"
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C2185B] text-white rounded-lg hover:bg-[#9D174D] transition"
          >
            <Send size={18} />
            Submit Application
          </button>

        </div>

      </form>

    </div>
  );
}

export default StudentRegistration;
