import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Clock3,
  Activity,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: HeartPulse,
    title: "Advanced Heart Surgery",
    description:
      "State-of-the-art cardiac surgery using the latest medical technology for safer procedures.",
  },
  {
    icon: ShieldCheck,
    title: "High Success Rate",
    description:
      "Our experienced cardiac surgeons deliver excellent surgical outcomes with international standards.",
  },
  {
    icon: Stethoscope,
    title: "Expert Specialists",
    description:
      "Board-certified cardiologists and heart surgeons with decades of experience.",
  },
  {
    icon: Clock3,
    title: "24/7 Emergency Care",
    description:
      "Immediate emergency cardiac support with ICU and ambulance services available.",
  },
  {
    icon: Activity,
    title: "Modern ICU & Cath Lab",
    description:
      "Equipped with advanced monitoring systems and cutting-edge cardiac technology.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description:
      "Every patient receives individualized treatment plans and dedicated follow-up care.",
  },
];

export default function WhyChooseHeartSurgery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Trusted Heart Surgery Center
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We combine advanced cardiac technology, experienced surgeons,
            compassionate nursing care, and world-class facilities to ensure
            the best possible outcomes for every patient.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-red-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-red-600 to-rose-500 p-10 text-white"
        >
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold">25+</h3>
              <p className="mt-2 text-red-100">
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">15K+</h3>
              <p className="mt-2 text-red-100">
                Successful Surgeries
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="mt-2 text-red-100">
                Success Rate
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2 text-red-100">
                Emergency Support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}