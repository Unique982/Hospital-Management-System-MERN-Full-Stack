import { STATUSES } from "globals/status/StatusCode";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addDoctors } from "store/feature/doctorSlice";

const AddDoctors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.doctor);
  const [doctorData, setDoctorData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    specialization: "",
    qualification: "",
    gender: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDoctors(doctorData));
    if (status === STATUSES.SUCCESS) {
      navigate("/admin/staff/doctors");
    }
    if (status === STATUSES.ERROR) {
      alert("something went wrong,try again");
      return;
    }
  };

  return (
    <>
      <div className="relative  mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="flex items-start justify-between rounded-t border-b border-gray-200 p-5 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Add New Doctors
          </h3>
        </div>

        <div className="space-y-6 p-6">
          <form action="#" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              {/*User Name Doctors */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  User name
                </label>
                <input
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter user name..."
                  required
                />
              </div>
              {/* First Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter firstname..."
                  required
                />
              </div>

              {/* last Name  */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter lastname..."
                  required
                />
              </div>
              {/* Email  */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter email"
                  required
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter phone Number"
                  required
                />
              </div>
              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Address
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="address"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter address"
                  required
                />
              </div>
              {/* Specialization */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Specialization
                </label>
                <select
                  name="specialization"
                  id="specialization"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Choose Specialization
                  </option>
                  <option value="testing">Testing</option>
                  <option value="testing">Testing 2</option>
                </select>
              </div>
              {/* qualification  */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter qualification"
                  required
                />
              </div>
              {/* Gender*/}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Password*/}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700
                                         focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                >
                  Add Doctors
                </button>

                <Link to="/admin/staff/doctors">
                  <button
                    type="cancel"
                    className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700
                                           focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddDoctors;
