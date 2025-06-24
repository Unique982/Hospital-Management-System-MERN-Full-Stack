import { Link } from "react-router-dom";
import {
  MdAdd,
  MdDeleteForever,
  MdEditNote,
  MdVisibility,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNurse } from "store/feature/nurseSlice";
import Loader from "components/loader/Loader";
import Pagination from "components/pagination";
const ListAllNurse = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.nurse || {});

  useEffect(() => {
    dispatch(fetchNurse());
  }, []);
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <>
      <div className=" relative mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="max-w-8xl container">
          <div className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
            {/* Table Header */}
            <div className="border-b border-gray-200 p-6 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Nurse List
                  </h2>
                  {/* <p className="mt-1 text-gray-500 dark:text-gray-300">
                    All Doctors List
                  </p> */}
                </div>
                {/* Add New Nurse Button */}
                <Link
                  to="/admin/staff/nurse/add"
                  className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:mt-0"
                >
                  <MdAdd className="h-6 w-5" />
                  Add New Nurse
                </Link>
              </div>
              {/* Search and Filter */}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-grow">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="text-dark h-5 w-5 dark:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="border-black w-full rounded-lg border py-2 pl-10 pr-4 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-800"
                    placeholder="Search blogs..."
                  />
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Nurse Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Qualification
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                  {(data || []).map((nurse, index) => {
                    return (
                      <tr
                        key={nurse.id}
                        className="transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {index + 1}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {nurse.user_id}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {nurse.lastName}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {nurse.phoneNumber}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {nurse.qualification}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <div className=" align-items-center flex justify-end space-x-3">
                            <Link
                              to=""
                              className="inline-flex items-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
                            >
                              <MdVisibility className="mr-1 h-6 w-5" />
                            </Link>
                            <Link
                              to=""
                              className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                            >
                              <MdEditNote className="mr-1 h-6 w-5" />
                            </Link>
                            <Link
                              to=""
                              className="inline-flex items-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                            >
                              <MdDeleteForever className="mr-1 h-6 w-5" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAllNurse;
