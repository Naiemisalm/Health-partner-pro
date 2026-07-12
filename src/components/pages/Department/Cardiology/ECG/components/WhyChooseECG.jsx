import { motion } from "framer-motion";
import {
  FaUserMd,
  FaMicroscope,
  FaFileMedicalAlt,
  FaShieldAlt,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";

export default function WhyChooseECG() {

  const reasons = [
    {
      icon: <FaMicroscope />,
      title: "Advanced Equipment",
      description:
        "We use modern ECG machines with advanced technology for accurate heart monitoring.",
    },
    {
      icon: <FaUserMd />,
      title: "Expert Cardiologists",
      description:
        "Our experienced cardiologists analyze ECG reports and provide proper guidance.",
    },
    {
      icon: <FaFileMedicalAlt />,
      title: "Fast Digital Reports",
      description:
        "Get quick and detailed ECG reports without unnecessary waiting.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Patient Safety",
      description:
        "We maintain strict safety standards and provide comfortable testing.",
    },
    {
      icon: <FaClock />,
      title: "Quick Testing",
      description:
        "ECG procedure is simple, painless, and completed within minutes.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Complete Heart Care",
      description:
        "From diagnosis to consultation, we provide complete cardiac support.",
    },
  ];


  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-5">
            Why Choose Our ECG Service?
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We provide reliable ECG testing with modern technology,
            experienced doctors, and patient-focused care for accurate
            diagnosis.
          </p>

        </motion.div>


        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {reasons.map((reason, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6">
                {reason.icon}
              </div>


              <h3 className="text-xl font-bold text-gray-800">
                {reason.title}
              </h3>


              <p className="mt-3 text-gray-600 leading-7">
                {reason.description}
              </p>


              <div className="mt-6 h-1 w-16 bg-blue-600 rounded-full"></div>

            </motion.div>

          ))}

        </div>


        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >

          <h3 className="text-3xl md:text-4xl font-bold">
            Your Heart Health Matters To Us ❤️
          </h3>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
            Our mission is to provide accurate diagnosis and quality cardiac
            care through advanced ECG technology and expert medical support.
          </p>

          <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Schedule ECG Test
          </button>

        </motion.div>


      </div>

    </section>
  );
}