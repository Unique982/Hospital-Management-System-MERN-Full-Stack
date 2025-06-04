import { RouterProvider } from "react-router-dom";
import router from "./router";
import Navbar from "./globals/components/navbar/Navbar";

import Footer from "./globals/components/footer/footer";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
