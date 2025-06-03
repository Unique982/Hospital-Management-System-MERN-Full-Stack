import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/componenets/About";

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
]);
export default router;
