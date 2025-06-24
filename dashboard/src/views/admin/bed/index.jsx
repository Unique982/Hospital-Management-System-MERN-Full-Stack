import { Link } from "react-router-dom";
import {
  MdAdd,
  MdDeleteForever,
  MdEditNote,
  MdVisibility,
} from "react-icons/md";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBed, deleteBed } from "store/feature/bedSlice";
import Loader from "components/loader/Loader";

const ListAllBeds = () => {
  const dispatch = useDispatch();
  const { data: beds, status } = useSelector((state) => state.bed);

  useEffect(() => {
    dispatch(fetchBed());
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delte this Bed?"))
      dispatch(deleteBed(id));
  };
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <>
      <div className=" relative mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="max-w-8xl container">
          <div className="bg-dark overflow-hidden rounded-xl shadow-md dark:bg-gray-800">
            {/* Table Header */}
            <div className="border-b border-gray-200 p-6 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Bed List
                  </h2>
                  <p className="mt-1 text-gray-500 dark:text-gray-300">
                    All Bed List
                  </p>
                </div>
                {/* Add New Bed Button */}
                <Link
                  to="/admin/bed/add"
                  className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:mt-0"
                >
                  <MdAdd className="h-6 w-5" />
                  Add New Bed
                </Link>
              </div>
            </div>
            {/* Table */}

            <div className="mb-10 overflow-x-auto">
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
                      Bed Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      BedType
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Status
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
                  {beds.map((bed, index) => {
                    return (
                      <tr
                        key={bed.id}
                        className="text-center transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800"
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
                            {bed.bedNumber}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {bed.bedType}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {bed.description}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {bed.status === "occupied" ? (
                            <span className="inline-flex rounded-full bg-orange-100 px-2 text-xs font-semibold leading-5 text-orange-800 dark:bg-orange-800 dark:text-orange-100">
                              {bed.status}
                            </span>
                          ) : bed.status === "maintenance" ? (
                            <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                              {bed.status}
                            </span>
                          ) : bed.status === "reserved" ? (
                            <span className="inline-flex rounded-full bg-purple-100 px-2 text-xs font-semibold leading-5 text-purple-800 dark:bg-purple-800 dark:text-red-100">
                              {bed.status}
                            </span>
                          ) : bed.status === "cleaning" ? (
                            <span className="text-blue--800 bg-blue--100 dark:bg-blue--800 dark:text-blue--100 inline-flex rounded-full px-2 text-xs font-semibold leading-5">
                              {bed.status}
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-800 dark:text-green-100">
                              {bed.status}
                            </span>
                          )}
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
                            <button
                              onClick={() => handleDelete(bed.id)}
                              className="inline-flex items-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                            >
                              <MdDeleteForever className="mr-1 h-6 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {/* Row 1 */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAllBeds;
