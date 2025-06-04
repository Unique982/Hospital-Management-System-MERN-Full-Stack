import img from "../../../assets/images/team-doctors-standing-row_107420-84772.jpg";

const About = () => {
  return (
    <>
      <div className="py-8 bg-white">
        <div className="container m-auto px-4 text-gray-600 md:px-12 xl:px-4">
          <div className="flex flex-col items-center gap-5 mb-2 md:mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-orange-400 bg-clip-text text-transparent">
              About Section
            </h2>
            <span className="w-50 h-[4px] bg-rose-500 rounded"></span>
            <span className="w-20 h-[4px] bg-rose-500 rounded"></span>
          </div>
          <div className="space-y-6 mb-40 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={img} alt="about_img" loading="lazy" width height />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Nuxt development is carried out by passionate developers
              </h2>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
