import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  HeartHandshake,
  ShieldPlus,
  Ambulance,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Coronary Artery Bypass (CABG)",
    description:
      "Restore healthy blood flow to the heart using advanced bypass surgery performed by experienced cardiac surgeons.",
  },
  {
    icon: Activity,
    title: "Valve Repair & Replacement",
    description:
      "Comprehensive treatment for damaged heart valves using minimally invasive and open-heart procedures.",
  },
  {
    icon: Stethoscope,
    title: "Minimally Invasive Surgery",
    description:
      "Smaller incisions, reduced pain, faster recovery, and improved surgical outcomes with advanced techniques.",
  },
  {
    icon: HeartHandshake,
    title: "Congenital Heart Surgery",
    description:
      "Specialized surgical care for congenital heart defects in children and adults by expert specialists.",
  },
  {
    icon: ShieldPlus,
    title: "Post-Surgery Cardiac Care",
    description:
      "Personalized rehabilitation, ICU monitoring, medication management, and long-term recovery plans.",
  },
  {
    icon: Ambulance,
    title: "24/7 Cardiac Emergency",
    description:
      "Round-the-clock emergency response with Cath Lab, ICU support, and rapid intervention for heart patients.",
  },
];

export default function HeartSurgeryServices() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Complete Heart Surgery Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We provide comprehensive cardiac care using modern surgical
            techniques, world-class facilities, and highly experienced heart
            specialists.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

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
                whileHover={{ y: -10 }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Link */}
                <button className="flex items-center gap-2 font-semibold text-red-600 transition-all group-hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-rose-500 p-10 text-white"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold">
                Need Expert Cardiac Consultation?
              </h3>

              <p className="mt-3 max-w-2xl text-red-100">
                Schedule an appointment with our experienced cardiac surgeons
                and receive personalized treatment for your heart health.
              </p>
            </div>

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-red-600 transition hover:bg-red-50">
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}