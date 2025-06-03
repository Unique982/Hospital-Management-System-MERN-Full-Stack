import { RouterProvider } from "react-router-dom";
import router from "./router";
import Navbar from "./globals/components/navbar/Navbar";
import About from "./pages/home/componenets/About";
import Home from "./pages/home/Home";
import Footer from "./globals/components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};
export default App;
