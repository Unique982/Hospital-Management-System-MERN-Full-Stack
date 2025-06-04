const ResetPassword = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Reset Passsword
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newpassword"
              >
                New Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="newPassword"
                type="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="confirmPassword"
                name="confirmPassword"
                placeholder="Enter your confirm passwords"
              />
            </div>

            <button
              className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
