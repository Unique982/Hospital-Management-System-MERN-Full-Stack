import { Link } from "react-router-dom";

const AddReport = () => {
  return (
    <>
      <div className="relative  mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="flex items-start justify-between rounded-t border-b border-gray-200 p-5 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Add Report
          </h3>
        </div>
        <div className="space-y-6 p-6">
          <form action="#">
            <div className="grid grid-cols-1 gap-6">
              {/* Select Doctor  */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Doctor
                </label>
                <select
                  name="doctor"
                  id=""
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Select Doctor
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {/* First Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Patient
                </label>
                <select
                  name="patient"
                  id=""
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Select Patient
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {/* Report Types */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Report Types
                </label>
                <select
                  name="reportType"
                  id=""
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Select Report Types
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {/* Description */}
              {/* Description */}
              <div className="col-6">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Description
                </label>
                <textarea
                  name="reportDescription"
                  id="description"
                  rows={3}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter Description"
                />
              </div>
              {/* Date   */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                                   focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                                   dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  required
                />
              </div>
              {/* Button */}
              <div className="space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
                <button
                  type="submit"
                  className="hover:bg-green-700focus:ring-4 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white focus:ring-green-200 dark:focus:ring-green-800"
                >
                  Save Teams
                </button>

                <Link to="/admin/patient">
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
export default AddReport;
