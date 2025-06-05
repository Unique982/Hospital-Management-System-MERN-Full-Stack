import Footer from "../../globals/components/footer/Footer";
import Navbar from "../../globals/components/navbar/Navbar";
import About from "./componenets/About";
import AdsBanner from "./componenets/AdsBanner";
import Blog from "./componenets/Blog";
import Contact from "./componenets/Contact";
import DoctorsSection from "./componenets/Teams";
import Gallery from "./componenets/Gallery";
import Hero from "./componenets/Hero";
import Services from "./componenets/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <DoctorsSection />
      <Gallery />
      <Services />
      <AdsBanner />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
