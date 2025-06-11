import { Link } from "react-router-dom";

const AddOurTeams = () => {
  return (
    <>
      <div className="relative  mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="flex items-start justify-between rounded-t border-b border-gray-200 p-5 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Add New Teams
          </h3>
        </div>
        <div className="space-y-6 p-6">
          <form action="#">
            <div className="grid grid-cols-1 gap-6">
              {/* user Name */}
              <div>
                <label
                  htmlFor="userName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter title"
                  required
                />
              </div>
              {/* Postion */}
              <div>
                <label
                  htmlFor="postion"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Postion
                </label>
                <input
                  type="text"
                  name="postion"
                  id="postion"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter postion"
                  required
                />
              </div>
              {/* Eduction */}
              <div>
                <label
                  htmlFor="eduction"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Eduction
                </label>
                <input
                  type="text"
                  name="eduction"
                  id="education"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Enter Eduction"
                  required
                />
              </div>

              {/* Description */}
              <div className="col-6">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                  placeholder="Your address here..."
                />
              </div>

              {/* Blog Img */}
              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  name="teamsImage"
                  id="teamsImage"
                  accept="image/*"
                  className="block w-full text-sm text-gray-900
                           file:mr-4 file:rounded file:border-0 file:bg-green-600 file:px-4 file:py-2
                           file:text-white hover:file:bg-green-700
                           dark:file:bg-green-500 dark:file:hover:bg-green-600"
                />
              </div>

              <div className="space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700
                     focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                >
                  Save Teams
                </button>

                <Link to="/admin/our-teams">
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
export default AddOurTeams;
