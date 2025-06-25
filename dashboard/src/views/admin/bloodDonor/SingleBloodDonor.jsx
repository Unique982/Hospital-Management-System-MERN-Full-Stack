import { Link, useParams } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { singleBloodDonorData } from "store/feature/bloodDonroSlice";
import Loader from "components/loader/Loader";
const SingleBloodDonor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleDonor, status } = useSelector((state) => state.bloodDonor);
  useEffect(() => {
    dispatch(singleBloodDonorData(id));
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
                    Blood Donor Details
                  </h2>
                </div>
              </div>

              {/* Table */}
              <div className="mt-4 overflow-x-auto">
                {singleDonor && (
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        id
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleDonor.id}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        Name
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        (singleDonor.name)
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        Email
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleDonor.email}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300"
                      >
                        Phone
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleDonor.phone}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        age
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleDonor.age}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        Gender
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleDonor.gender}
                      </td>
                    </tr>

                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        BloodGroup
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleDonor.bloodGroup}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        LastDonted Date
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {new Date(singleDonor.lastDonated).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        Avaible
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {singleDonor.isAvailable ? "Yes" : "No"}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        CreatedAt
                      </th>
                      <td className="whitespace-nowrap px-5 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {new Date(singleDonor.createdAt).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-black px-6 py-3 text-left text-xs font-bold tracking-wider dark:text-gray-300">
                        UpdatedAt
                      </th>
                      <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900 dark:text-gray-100">
                        {new Date(singleDonor.updatedAt).toLocaleString()}
                      </td>
                    </tr>
                  </table>
                )}
              </div>
              <div className="p-6">
                <Link
                  to="/admin/blood"
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
export default SingleBloodDonor;
