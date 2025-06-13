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
import Card from "../../globals/components/card/Card";

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
      <section id="blog">
        <div className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-700 to-orange-400 bg-clip-text text-transparent">
                Our Blog
              </h2>
              <div className="flex flex-col items-center gap-1">
                <span className="w-40 h-1 bg-rose-500 rounded"></span>
                <span className="w-20 h-1 bg-rose-500 rounded"></span>
              </div>

              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                Stay informed with our latest updates, healthcare news, and
                expert insights to help you make better decisions for your
                well-being.
              </p>
            </div>
            <Card limit={6} />
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
