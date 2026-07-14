import React from "react";
import {
  Baby,
  ShieldCheck,
  Syringe,
  HeartHandshake,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Baby size={18} />
              Pediatrics Department
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Child Vaccination
              <span className="text-sky-600"> & Immunization</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Protect your child from preventable diseases with safe,
              effective, and WHO-recommended vaccination programs provided by
              experienced pediatric specialists.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-7 py-3.5 rounded-xl font-semibold transition">
                Book Appointment
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center justify-center gap-2 border border-sky-600 text-sky-600 hover:bg-sky-50 px-7 py-3.5 rounded-xl font-semibold transition">
                <PhoneCall size={20} />
                Contact Pediatrician
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>

                <p className="text-sm font-medium text-gray-700">
                  Safe Vaccines
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Syringe size={22} />
                </div>

                <p className="text-sm font-medium text-gray-700">
                  WHO Schedule
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <HeartHandshake size={22} />
                </div>

                <p className="text-sm font-medium text-gray-700">
                  Expert Care
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-sky-200 rounded-full blur-3xl opacity-40"></div>

            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=900"
              alt="Child Vaccination"
              className="relative w-full h-[350px] sm:h-[500px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg p-5">
              <p className="text-sm text-gray-500">
                Trusted Child Care
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-1">
                Immunize Today
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Protect your child with timely vaccinations and regular
                pediatric care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;