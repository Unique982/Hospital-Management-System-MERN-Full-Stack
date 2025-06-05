import img from "../../../assets/images/team-doctors-standing-row_107420-84772.jpg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="py-12 bg-white">
          <div className="container m-auto px-4 text-gray-600 md:px-12 xl:px-4">
            <div className="flex flex-col items-center gap-2 mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-orange-400 bg-clip-text text-transparent">
                About Section
              </h2>
              <span className="w-50 h-1 bg-rose-500 rounded"></span>
              <span className="w-20 h-1 bg-rose-500 rounded"></span>
            </div>
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="md:w-5/12 lg:w-5/12">
                <img
                  src={img}
                  alt="about_img"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mb-6">
                  Efficient, reliable, and user-friendly system designed to
                  streamline hospital operations and enhance patient care.
                </h2>
                <p className=" text-gray-600 mb-4">
                  Our Hospital Management System (HMS) is an integrated software
                  solution that simplifies hospital processes such as patient
                  registration, appointment scheduling, billing, medical
                  records, and inventory management.
                </p>
                <p className=" text-gray-600">
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
                <p className=" text-gray-600">
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
