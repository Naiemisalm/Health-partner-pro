import { motion } from "framer-motion";
import {
  CalendarCheck,
  SearchCheck,
  HeartPulse,
  BedPulse,
  Activity,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Initial Consultation",
    description:
      "Our cardiac specialists evaluate your health history and discuss the best treatment options.",
  },
  {
    icon: SearchCheck,
    step: "02",
    title: "Diagnosis & Tests",
    description:
      "Advanced cardiac tests including ECG, Echo, CT Scan, and angiography help create your treatment plan.",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Heart Surgery",
    description:
      "Experienced surgeons perform advanced cardiac procedures using modern surgical technology.",
  },
  {
    icon: BedPulse,
    step: "04",
    title: "ICU Recovery",
    description:
      "Dedicated ICU teams provide continuous monitoring and specialized post-operative care.",
  },
  {
    icon: Activity,
    step: "05",
    title: "Rehabilitation",
    description:
      "Personalized recovery programs help patients return to a healthy and active lifestyle.",
  },
  {
    icon: CheckCircle,
    step: "06",
    title: "Follow Up Care",
    description:
      "Regular checkups and guidance ensure long-term heart health after surgery.",
  },
];

export default function SurgeryProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Treatment Process
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Your Heart Surgery Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From consultation to complete recovery, our dedicated team
            provides continuous support throughout your heart treatment.
          </p>
        </motion.div>


        {/* Timeline */}
        <div className="relative">

          {/* Desktop Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-red-100 lg:block" />


          <div className="space-y-10 lg:space-y-0">

            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity:0,
                    x:index % 2 === 0 ? -50 : 50
                  }}
                  whileInView={{
                    opacity:1,
                    x:0
                  }}
                  transition={{
                    duration:.6,
                    delay:index * .1
                  }}
                  viewport={{once:true}}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0
                      ? "lg:justify-start"
                      : "lg:justify-end"
                  }`}
                >

                  {/* Card */}
                  <div className="w-full lg:w-[45%] rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

                    <div className="flex items-start gap-5">

                      {/* Icon */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                        <Icon size={28}/>
                      </div>


                      <div>
                        <span className="text-sm font-bold text-red-600">
                          STEP {item.step}
                        </span>

                        <h3 className="mt-2 text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>

                    </div>

                  </div>


                  {/* Center Dot */}
                  <div className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-red-600 shadow-lg lg:block" />


                </motion.div>
              );
            })}

          </div>

        </div>


        {/* Bottom Message */}
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:.3}}
          viewport={{once:true}}
          className="mt-20 rounded-3xl bg-red-50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Safe Treatment With Expert Medical Support
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Our multidisciplinary cardiac team ensures every patient receives
            safe surgery, advanced care, and a smooth recovery experience.
          </p>
        </motion.div>

      </div>
    </section>
  );
}