const VerifyOtp = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <h1 className="text-center text-2xl font-bold mb-6">OTP Verfiy</h1>
          <p className="text-center text-red-600 mb-6 border border-red-600 rounded-md p-3">
            The OTP has been sent to your email. Please check your inbox.
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="otp"
              >
                Enter Otp
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="otp"
                placeholder="Enter your otp code"
              />
            </div>
            <button
              className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default VerifyOtp;
