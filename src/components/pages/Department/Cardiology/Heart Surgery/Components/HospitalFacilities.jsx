import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Microscope,
  Ambulance,
  BedDouble,
  MonitorCheck,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const facilities = [
  {
    icon: HeartPulse,
    title: "Advanced Cardiac ICU",
    description:
      "Dedicated cardiac ICU with continuous monitoring systems and expert critical care teams.",
  },
  {
    icon: Microscope,
    title: "Modern Cath Lab",
    description:
      "Advanced catheterization laboratory equipped with latest cardiac diagnostic technology.",
  },
  {
    icon: Building2,
    title: "Modular Operation Theater",
    description:
      "Fully equipped surgical rooms designed for safe and advanced heart procedures.",
  },
  {
    icon: Ambulance,
    title: "24/7 Emergency Service",
    description:
      "Quick response emergency unit with ambulance and critical cardiac support.",
  },
  {
    icon: BedDouble,
    title: "Premium Patient Rooms",
    description:
      "Comfortable private rooms with complete patient care facilities.",
  },
  {
    icon: MonitorCheck,
    title: "Advanced Monitoring",
    description:
      "High-end patient monitoring technology for accurate and safe treatment.",
  },
];

export default function HospitalFacilities() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          viewport={{once:true}}
          className="mx-auto mb-14 max-w-3xl text-center"
        >

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Hospital Facilities
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            World-Class Cardiac Care Infrastructure
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our hospital combines advanced medical technology, modern
            infrastructure, and experienced healthcare professionals to
            provide safe heart treatment.
          </p>

        </motion.div>


        {/* Facilities Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {facilities.map((facility,index)=>{

            const Icon = facility.icon;

            return (

              <motion.div
                key={index}
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  duration:.5,
                  delay:index*.1
                }}
                viewport={{once:true}}
                whileHover={{y:-8}}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-red-200 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">

                  <Icon size={30}/>

                </div>


                <h3 className="text-xl font-bold text-slate-900">
                  {facility.title}
                </h3>


                <p className="mt-4 leading-7 text-slate-600">
                  {facility.description}
                </p>


              </motion.div>

            );

          })}

        </div>


        {/* Highlight Section */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{delay:.3}}
          viewport={{once:true}}
          className="mt-20 rounded-[32px] bg-gradient-to-r from-red-600 to-rose-500 p-8 text-white lg:p-12"
        >

          <div className="grid items-center gap-10 lg:grid-cols-2">


            <div>

              <h3 className="text-3xl font-bold md:text-4xl">
                Safe & Reliable Heart Treatment
              </h3>

              <p className="mt-5 leading-8 text-red-100">
                From diagnosis to recovery, our hospital provides complete
                cardiac care under one roof with international safety standards.
              </p>


              <button className="mt-7 rounded-xl bg-white px-8 py-4 font-semibold text-red-600 transition hover:bg-red-50">
                Explore Facilities
              </button>

            </div>



            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/20 p-6 backdrop-blur">

                <ShieldCheck size={32}/>

                <h4 className="mt-3 text-xl font-bold">
                  Safe Care
                </h4>

                <p className="mt-2 text-sm text-red-100">
                  International patient safety standards
                </p>

              </div>



              <div className="rounded-2xl bg-white/20 p-6 backdrop-blur">

                <Clock3 size={32}/>

                <h4 className="mt-3 text-xl font-bold">
                  24/7 Support
                </h4>

                <p className="mt-2 text-sm text-red-100">
                  Emergency medical assistance
                </p>

              </div>


            </div>


          </div>

        </motion.div>


      </div>
    </section>
  );
}