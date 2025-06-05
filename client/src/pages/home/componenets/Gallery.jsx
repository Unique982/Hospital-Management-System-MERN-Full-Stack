import HospitalOver from "../../../assets/images/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.avif";
const Gallery = () => {
  return (
    <>
      <section id="gallery">
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-4 lg:px-6">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-orange-400 bg-clip-text text-transparent">
                Our Gallery
              </h2>
              <div className="flex flex-col items-center gap-1">
                <span className="w-50 h-1 bg-rose-500 rounded"></span>
                <span className="w-20 h-1 bg-rose-500 rounded"></span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Large item */}
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={HospitalOver}
                  alt="Modern Hospital Facility"
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Hospital Overview
                    </h3>
                    <p className="text-white/90 mb-4">
                      Centralized care with modern infrastructure and expert
                      medical staff
                    </p>
                    <button className="px-6 py-2 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Emergency Services */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1605881121733-53a18d5a12fe?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Emergency Department"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Emergency Services
                    </h4>
                    <p className="text-white/80 text-sm">24/7 emergency care</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  24/7
                </div>
              </div>

              {/* Pharmacy */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hospital Pharmacy"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Pharmacy
                    </h4>
                    <p className="text-white/80 text-sm">
                      Comprehensive medication services
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert Doctors */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664303317740-885ff08684e0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Medical Professionals"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Expert Doctors
                    </h4>
                    <p className="text-white/80 text-sm">
                      Specialized medical professionals
                    </p>
                  </div>
                </div>
              </div>

              {/* Surgery Department */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1703809047974-4de2c5276087?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Surgical Theater"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Surgery Department
                    </h4>
                    <p className="text-white/80 text-sm">
                      Advanced surgical procedures
                    </p>
                  </div>
                </div>
              </div>

              {/* Diagnostic Lab */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Medical Laboratory"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Diagnostic Lab
                    </h4>
                    <p className="text-white/80 text-sm">
                      Accurate test results
                    </p>
                  </div>
                </div>
              </div>

              {/* ICU & Critical Care */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Intensive Care Unit"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      ICU & Critical Care
                    </h4>
                    <p className="text-white/80 text-sm">
                      Specialized intensive care
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient Care */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                  alt="Patient Care Services"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Patient Care
                    </h4>
                    <p className="text-white/80 text-sm">
                      Compassionate healthcare
                    </p>
                  </div>
                </div>
              </div>

              {/* Billing & Records */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Medical Billing"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Billing & Records
                    </h4>
                    <p className="text-white/80 text-sm">
                      Transparent financial services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
