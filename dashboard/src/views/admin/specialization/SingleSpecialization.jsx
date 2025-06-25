import { Link, useParams } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Loader from "components/loader/Loader";
import { singleSpecialization } from "store/feature/specializationSlice";
const SingleSpecialization = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleData, status } = useSelector((state) => state.specialization);
  useEffect(() => {
    dispatch(singleSpecialization(id));
  }, [dispatch, id]);

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
                  <h2 className=" mb-4 text-xl  font-bold text-gray-800 dark:text-gray-100">
                    Specilization
                  </h2>
                </div>
              </div>

              {/* Table */}
              <div className="mt-4 overflow-x-auto">
                {singleData && (
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        id
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleData.id}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        Specilization
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleData.specialization}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        symptoms
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleData.symptoms}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300"
                      >
                        Description
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleData.description}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        CreatedAt
                      </th>
                      <td className="whitespace-nowrap px-5 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {new Date(singleData.createdAt).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        UpdatedAt
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {new Date(singleData.updatedAt).toLocaleString()}
                      </td>
                    </tr>
                  </table>
                )}
              </div>
              <div className="p-6">
                <Link
                  to="/admin/specialization"
                  className="inline-flex items-center rounded-md bg-indigo-500 px-5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                >
                  Go BAck
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleSpecialization;
