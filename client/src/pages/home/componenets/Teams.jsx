// components/DoctorsSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  return (
    <>
      <section id="our-teams">
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-4 lg:px-6">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-orange-400 bg-clip-text text-transparent">
                Our Teams
              </h2>
              <div className="flex flex-col items-center gap-1">
                <span className="w-50 h-1 bg-rose-500 rounded"></span>
                <span className="w-20 h-1 bg-rose-500 rounded"></span>
              </div>
            </div>

            {/* Team Grid - First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Alex Morgan"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        to="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        to="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Dr. Alex Morgan
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Chief Medical Officer
                  </p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Experienced healthcare leader dedicated to improving patient
                    care and hospital operations with over 15 years in the
                    medical field.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1659353887804-fc7f9313021a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        a="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        to="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Sarah Thompson
                  </h3>
                  <p className="text-indigo-600 font-medium">Head Nurse</p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Compassionate nursing leader overseeing patient care and
                    staff coordination with 10+ years of clinical experience.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1683121051768-c17becde6735?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Michael Chen"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Michael Lee
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Hospital Administrator
                  </p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Skilled administrator managing hospital operations and
                    ensuring compliance with healthcare regulations.
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Emily Rodriguez"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Dr. Priya Sharma
                  </h3>
                  <p className="text-indigo-600 font-medium">Head of Surgery</p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Renowned surgeon with expertise in minimally invasive
                    procedures and patient safety protocols.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="David Wilson"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Emily Davis
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Chief Pharmacist
                  </p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Pharmacy specialist managing medication safety and effective
                    pharmaceutical care for patients.
                  </p>
                </div>
              </div>

              {/* Team Member 6 */}
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661578535048-7a30e3a71d25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sophia Lee"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    James Wilson
                  </h3>
                  <p className="text-indigo-600 font-medium">IT Director</p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Technology expert driving innovative IT solutions to support
                    hospital systems and patient data security.
                  </p>
                </div>
              </div>

              {/* Team Member 7 */}
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1612943733919-f9661f1331f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="James Taylor"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Dr. Nina Patel
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Pediatrics Specialist
                  </p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Dedicated pediatrician committed to children’s health and
                    wellbeing with over 12 years of experience.
                  </p>
                </div>
              </div>

              {/* Team Member 8 */}
              <div className="group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661764895266-f0b195221b77?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Olivia Martinez"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Mark Johnson
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Radiology Supervisor
                  </p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Expert in diagnostic imaging and managing radiology staff to
                    ensure accurate patient diagnostics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
