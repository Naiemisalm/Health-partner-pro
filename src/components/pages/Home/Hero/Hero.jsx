import { CalendarCheck, Search, ShieldCheck, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
            <ShieldCheck size={18} />
            Trusted Healthcare Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
            Your Health,
            <span className="text-sky-600"> Our Priority</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Find experienced doctors, book appointments instantly, and receive
            quality healthcare services anytime, anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/appointment")}
              className="flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition"
            >
              <CalendarCheck size={20} />
              Book Appointment
            </button>

            <button
              onClick={() => navigate("/doctors")}
              className="flex items-center gap-2 border-2 border-sky-600 text-sky-600 px-6 py-3 rounded-xl hover:bg-sky-600 hover:text-white transition"
            >
              <Search size={20} />
              Find Doctor
            </button>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h2 className="text-3xl font-bold text-sky-600">500+</h2>
              <p className="text-gray-600">Doctors</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-600">15K+</h2>
              <p className="text-gray-600">Patients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-600">24/7</h2>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <div className="w-56 h-56 bg-sky-100 rounded-full flex items-center justify-center">
              <Stethoscope size={100} className="text-sky-600" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-center text-gray-800">
              Professional Healthcare
            </h2>

            <p className="mt-2 text-center text-gray-500">
              Fast • Secure • Trusted Medical Services
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;