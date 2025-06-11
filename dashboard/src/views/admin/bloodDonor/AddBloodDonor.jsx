import { Link } from "react-router-dom";

const AddBooldDonor = () => {
  return (
    <>
      <div className="relative  mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="flex items-start justify-between rounded-t border-b border-gray-200 p-5 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Add New Blood Donor
          </h3>
        </div>
        <div className="space-y-6 p-6">
          <form action="#">
            <div className="grid grid-cols-1 gap-6">
              {/*donor Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter name..."
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
                  name="phone"
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
                  name="address"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter address"
                  required
                />
              </div>
              {/* Age  */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter age"
                  required
                />
              </div>
              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Gender
                </label>
                <select
                  name="gender"
                  id=""
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
              {/* Blood Group */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Gender
                </label>
                <select
                  name="bloodGroup"
                  id=""
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Select Blood Group
                  </option>
                  <option value="+o">O+</option>
                  <option value="a+">A+</option>
                </select>
              </div>
              {/* Last Date donted */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Last Donated
                </label>
                <input
                  type="date"
                  name="lastDonated"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm  focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600  dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  required
                />
              </div>
              {/* Button */}
              <div className="space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                >
                  Save Donor
                </button>

                <Link to="/admin/blood">
                  <button
                    type="cancel"
                    className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
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
export default AddBooldDonor;
