// components/DoctorsSection.jsx
import React from "react";

const doctors = [
  { name: "Dr. Smith", specialty: "Cardiologist" },
  { name: "Dr. Jane", specialty: "Neurologist" },
  { name: "Dr. Alex", specialty: "Pediatrician" },
];

const DoctorsSection = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-orange-400 bg-clip-text text-transparent">
            Meet Our Talented Team
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-2 rounded-full" />
          <p className="text-gray-600 text-lg">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">Alex Morgan</h3>
              <p className="text-indigo-600 font-medium">CEO &amp; Founder</p>
              <p className="text-gray-600 mt-2">
                Visionary leader with 15+ years of experience in tech
                innovation.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-indigo-600 font-medium">
                Chief Design Officer
              </p>
              <p className="text-gray-600 mt-2">
                Award-winning designer with a passion for creating beautiful,
                functional interfaces.
              </p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">Michael Chen</h3>
              <p className="text-indigo-600 font-medium">CTO</p>
              <p className="text-gray-600 mt-2">
                Tech genius with expertise in AI and machine learning
                technologies.
              </p>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Emily Rodriguez
              </h3>
              <p className="text-indigo-600 font-medium">Marketing Director</p>
              <p className="text-gray-600 mt-2">
                Creative strategist who excels at building and promoting brands.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Team Member 5 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">David Wilson</h3>
              <p className="text-indigo-600 font-medium">Lead Developer</p>
              <p className="text-gray-600 mt-2">
                Full-stack developer with a knack for solving complex problems.
              </p>
            </div>
          </div>
          {/* Team Member 6 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">Sophia Lee</h3>
              <p className="text-indigo-600 font-medium">UX Researcher</p>
              <p className="text-gray-600 mt-2">
                Human-centered designer focused on creating intuitive user
                experiences.
              </p>
            </div>
          </div>
          {/* Team Member 7 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">James Taylor</h3>
              <p className="text-indigo-600 font-medium">Product Manager</p>
              <p className="text-gray-600 mt-2">
                Strategic thinker who bridges the gap between business and
                technology.
              </p>
            </div>
          </div>
          {/* Team Member 8 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Olivia Martinez
              </h3>
              <p className="text-indigo-600 font-medium">Customer Success</p>
              <p className="text-gray-600 mt-2">
                Dedicated to ensuring our clients achieve their goals and
                succeed.
              </p>
            </div>
          </div>
        </div>
        {/* Join Our Team CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-px rounded-lg">
            <a
              href="#"
              className="block bg-white hover:bg-gray-50 transition-colors duration-200 rounded-lg px-8 py-4 font-medium text-indigo-600"
            >
              Join Our Team <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsSection;
