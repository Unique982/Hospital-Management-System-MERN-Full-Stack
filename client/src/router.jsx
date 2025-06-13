import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/componenets/About";
import Login from "./pages/auth/login/Login";
import ForgotPassword from "./pages/auth/forgetpasssword/ForgetPassword";
import VerifyOtp from "./pages/auth/verifyOtp/VerifyOtp";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";
import Register from "./pages/auth/register/Register";
import Services from "./pages/home/componenets/Services";
import Teams from "./pages/home/componenets/Teams";
import Blog from "./pages/home/componenets/Blog";
import Contact from "./pages/home/componenets/Contact";
import Gallery from "./pages/home/componenets/Gallery";
import SinglePage from "./pages/home/componenets/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/single-page",
    element: <SinglePage />,
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
