import { Link } from "react-router-dom";
import {
  MdAdd,
  MdDeleteForever,
  MdEditNote,
  MdVisibility,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSpecailzation } from "store/feature/specializationSlice";
import Loader from "components/loader/Loader";
import Pagination from "components/pagination";
const ListAllSpecialization = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.specialization);

  useEffect(() => {
    dispatch(fetchSpecailzation());
  }, []);
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
                    Specialization List
                  </h2>
                  <p className="mt-1 text-gray-500 dark:text-gray-300">
                    All Specialization List
                  </p>
                </div>
                {/* Add New Specialization Button */}
                <Link
                  to="/admin/specialization/add"
                  className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:mt-0"
                >
                  <MdAdd className="h-6 w-5" />
                  Add New Specialization
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
                      Specialization
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Symptoms
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-red-500 dark:text-gray-300"
                    >
                      Descrition
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
                  {(data || []).map((specialization, index) => {
                    {
                      /* Row 1 */
                    }
                    return (
                      <tr
                        key={specialization.id}
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
                            {specialization.specialization}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {specialization.symptoms}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-gray-100">
                            {specialization.description}
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
            {/* {Pagination} */}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAllSpecialization;
