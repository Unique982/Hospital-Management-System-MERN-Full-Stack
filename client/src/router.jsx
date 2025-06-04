import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/componenets/About";
import Login from "./pages/auth/login/Login";
import ForgotPassword from "./pages/auth/forgetpasssword/ForgetPassword";
import VerifyOtp from "./pages/auth/verifyOtp/VerifyOtp";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";
import Register from "./pages/auth/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: "<h1> this is service page</h1>",
  },
  {
    path: "/team",
    element: "<h1>This is team page<h1>",
  },
  {
    path: "/blog",
    element: "<h1>This is blog page</h1>",
  },
  {
    path: "/contact",
    element: "<h1>this is contact page</h1>",
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget",
    element: <ForgotPassword />,
  },
  {
    path: "/otp",
    element: <VerifyOtp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
export default router;
