import Footer from "../../globals/components/footer/footer";
import Navbar from "../../globals/components/navbar/Navbar";
import About from "./componenets/About";
import DoctorsSection from "./componenets/DoctorSection";
import Hero from "./componenets/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <DoctorsSection />
      <Footer />
    </>
  );
};
export default Home;
