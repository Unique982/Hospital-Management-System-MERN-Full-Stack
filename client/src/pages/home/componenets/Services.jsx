const Services = () => {
  return (
    <section id="services">
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-orange-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="flex flex-col items-center gap-1">
              <span className="w-40 h-1 bg-rose-500 rounded"></span>
              <span className="w-20 h-1 bg-rose-500 rounded"></span>
            </div>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Our Hospital Management System ensures seamless healthcare
              operations, patient safety, and optimized workflows for hospitals
              and clinics.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service Item */}
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12557/12557600.png"
                  alt="Patient Management"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">
                  Patient Management
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Maintain detailed patient records, appointment history, and
                  treatment logs to provide continuous and personalized care.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3140/3140343.png"
                  alt="Pharmacy Integration"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">
                  Pharmacy Integration
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Manage drug inventory, issue prescriptions, and automate
                  pharmacy operations to ensure timely availability of
                  medicines.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1651/1651965.png"
                  alt="Billing & Insurance"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">
                  Billing & Insurance
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Automate billing processes, insurance claims, and generate
                  invoices with complete transparency and compliance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11411/11411396.png"
                  alt="EMR System"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">EMR System</h4>
                <p className="mt-2 text-base text-gray-500">
                  Store and manage patients’ health records securely with
                  instant access to doctors and medical staff.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7888/7888175.png"
                  alt="Real-Time Reports"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">
                  Real-Time Reports
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Get actionable insights with custom dashboards and detailed
                  reports on hospital performance, finances, and patient care.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2387/2387545.png"
                  alt="Laboratory Management"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">
                  Laboratory Management
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Manage lab test requests, results, and reports while ensuring
                  data accuracy and regulatory compliance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4222/4222571.png"
                  alt="Bed Management"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">
                  Bed Management
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Monitor bed availability in real-time, assign patients
                  quickly, and optimize space usage across departments.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9411/9411437.png"
                  alt="Appointment Booking"
                  className="h-6 w-6"
                />
              </div>
              <div className="ml-16">
                <h4 className="text-lg font-bold text-gray-700">
                  Appointment Booking
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  Enable patients to book, reschedule, or cancel appointments
                  online with instant confirmation and reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
