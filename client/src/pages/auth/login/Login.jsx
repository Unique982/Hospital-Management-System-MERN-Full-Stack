import { Link } from "react-router-dom";
import ForgotPassword from "../forgetpasssword/ForgetPassword";

const Login = () => {
  return (
    <>
      <div className="bg-gray-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
        <div className="relative  w-full max-w-lg p-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-5">
              <h3 className="text-2xl mb-0.5 font-medium" />
              <p className="mb-4 text-sm font-normal text-gray-800" />
              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                  Login to your account
                </p>
                <p className="mt-2 text-sm leading-4 text-slate-600">
                  You must be logged in to perform this action.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-2">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  Continue with Google
                </button>
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/448224/facebook.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  Continue with Facebook
                </button>
              </div>
              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-200" />
                OR
                <div className="h-px w-full bg-slate-200" />
              </div>
              <form className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Email Address"
                  defaultValue
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Password"
                  defaultValue
                />
                <p className="mb-3 mt-2 text-sm text-gray-500">
                  <Link
                    to="/forget"
                    className="text-blue-800 hover:text-blue-600"
                  >
                    Reset your password?
                  </Link>
                </p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                >
                  Continue
                </button>
              </form>
              <div className="mt-6 text-center text-sm text-slate-600">
                Don't have an account?
                <Link to="/register" className="font-medium text-[#4285f4]">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
