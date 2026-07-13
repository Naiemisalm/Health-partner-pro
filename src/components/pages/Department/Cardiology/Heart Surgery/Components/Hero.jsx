import { motion } from "framer-motion";
import {
  HeartPulse,
  CalendarCheck,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              <HeartPulse size={18} />
              Advanced Cardiac Care Center
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl xl:text-6xl">
              Trusted
              <span className="text-red-600"> Heart Surgery </span>
              with Advanced Cardiac Care
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Our experienced cardiac surgeons provide world-class heart
              treatment using advanced technology, personalized care, and
              internationally recognized surgical procedures.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700">
                Book Appointment
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-red-200 bg-white px-7 py-4 font-semibold text-red-600 transition hover:bg-red-50">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
              <div className="rounded-2xl bg-white p-5 shadow-lg">
                <h2 className="text-3xl font-bold text-red-600">25+</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-lg">
                <h2 className="text-3xl font-bold text-red-600">15K+</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Surgeries
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-lg">
                <h2 className="text-3xl font-bold text-red-600">98%</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Success Rate
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-lg">
                <h2 className="text-3xl font-bold text-red-600">24/7</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Emergency
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
              alt="Heart Surgery"
              className="w-full rounded-[32px] object-cover shadow-2xl"
            />

            {/* Floating Card 1 */}
            <div className="absolute left-4 top-6 rounded-2xl bg-white p-4 shadow-xl md:left-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-red-100 p-3">
                  <ShieldCheck className="text-red-600" size={22} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Certified Surgeons
                  </p>

                  <p className="text-sm text-gray-500">
                    International Standard
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute right-4 top-1/2 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-red-100 p-3">
                  <CalendarCheck className="text-red-600" size={22} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Same Day
                  </p>

                  <p className="text-sm text-gray-500">
                    Consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute bottom-5 left-10 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-red-100 p-3">
                  <PhoneCall className="text-red-600" size={22} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Emergency
                  </p>

                  <p className="text-sm text-gray-500">
                    +880 1700-000000
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-3xl bg-red-600 px-8 py-6 text-white shadow-2xl lg:block">
              <h2 className="text-4xl font-bold">25+</h2>
              <p className="mt-1 text-red-100">
                Years of Excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}