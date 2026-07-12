import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaAward } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";

export default function Hero() {
  const stats = [
    {
      id: 1,
      icon: <FaHeartbeat />,
      value: "15K+",
      label: "ECG Tests",
    },
    {
      id: 2,
      icon: <FaUserMd />,
      value: "20+",
      label: "Cardiologists",
    },
    {
      id: 3,
      icon: <FaAward />,
      value: "99%",
      label: "Accuracy",
    },
    {
      id: 4,
      icon: <MdMonitorHeart />,
      value: "24/7",
      label: "Emergency",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-red-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
              ❤️ Advanced Cardiac Care
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-6 leading-tight">
              Advanced ECG
              <span className="text-blue-600"> Diagnosis </span>
              For A Healthy Heart
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Our advanced ECG service helps detect heart rhythm disorders,
              monitor cardiac health, and identify heart conditions quickly
              using modern technology and experienced cardiologists.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition">
                Book Appointment
              </button>

              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-3 rounded-xl font-semibold transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900"
              alt="ECG Diagnosis"
              className="rounded-3xl shadow-2xl w-full"
            />

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3">
              <MdMonitorHeart className="text-red-500 text-4xl" />
              <div>
                <h4 className="font-bold">ECG Monitoring</h4>
                <p className="text-sm text-gray-500">
                  Fast & Accurate Results
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-4xl text-red-500 flex justify-center mb-3">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-800">
                {item.value}
              </h3>

              <p className="text-gray-500 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}