import React from "react";
import { Link } from "react-router-dom";

const AddAllocatedBeds = () => {
  return (
    <>
      <div className="relative  mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="flex items-start justify-between rounded-t border-b border-gray-200 p-5 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Add Allocated
          </h3>
        </div>
        <div className="space-y-6 p-6">
          <form action="#">
            <div className="grid grid-cols-1 gap-6">
              {/* Bed  Number*/}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Bed Number
                </label>
                <select
                  name="bedNumber"
                  id=""
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Select Bed Number
                  </option>
                  <option value="">100</option>
                  <option value="">101</option>
                </select>
              </div>
              {/* Patient*/}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Patient Name
                </label>
                <select
                  name="patient_id"
                  id=""
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
               focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
               dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                >
                  <option selected disabled>
                    Select Patient
                  </option>
                  <option value="">100</option>
                  <option value="">101</option>
                </select>
              </div>
              {/* Allocated Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Allocated Date
                </label>
                <input
                  type="date"
                  name="allocated_date"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  required
                />
              </div>
              {/* Discharge */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                  Discharge Date
                </label>
                <input
                  type="date"
                  name="discharge"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  required
                />
              </div>

              {/* Button  */}
              <div className="space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                >
                  Save
                </button>
                <Link to="/admin/bed/allocated">
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

export default AddAllocatedBeds;
