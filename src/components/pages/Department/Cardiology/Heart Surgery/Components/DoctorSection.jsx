import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Michael Anderson",
    role: "Chief Cardiac Surgeon",
    experience: "25+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    speciality:
      "CABG, Valve Replacement, Minimally Invasive Heart Surgery",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Senior Cardiothoracic Surgeon",
    experience: "18+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    speciality:
      "Adult Cardiac Surgery, Heart Failure Treatment",
  },
  {
    name: "Dr. David Wilson",
    role: "Cardiac Specialist",
    experience: "15+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    speciality:
      "Coronary Surgery, Emergency Cardiac Care",
  },
];

export default function DoctorSection() {
  return (
    <section className="bg-slate-50 py-20">
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
            Our Specialists
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Meet Our Expert Cardiac Surgeons
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our highly experienced heart specialists provide advanced surgical
            care with compassion, precision, and dedication.
          </p>

        </motion.div>


        {/* Doctor Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{
                duration:.5,
                delay:index*.15
              }}
              viewport={{once:true}}
              whileHover={{y:-10}}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
                />


                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-lg">

                  <div className="flex items-center gap-2 text-red-600">
                    <Award size={18}/>
                    <span className="text-sm font-semibold">
                      {doctor.experience}
                    </span>
                  </div>

                </div>

              </div>


              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 font-semibold text-red-600">
                  {doctor.role}
                </p>


                <div className="mt-5 space-y-3 text-sm text-slate-600">

                  <div className="flex gap-3">
                    <GraduationCap
                      className="text-red-600"
                      size={20}
                    />

                    <span>
                      Board Certified Cardiac Surgeon
                    </span>
                  </div>


                  <div className="flex gap-3">
                    <CalendarDays
                      className="text-red-600"
                      size={20}
                    />

                    <span>
                      Available For Consultation
                    </span>
                  </div>

                </div>


                <p className="mt-5 leading-7 text-slate-600">
                  {doctor.speciality}
                </p>


                <button className="mt-6 flex items-center gap-2 font-semibold text-red-600 transition group-hover:gap-3">

                  View Profile

                  <ArrowRight size={18}/>

                </button>


              </div>

            </motion.div>

          ))}

        </div>


        {/* CTA */}
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:.3}}
          viewport={{once:true}}
          className="mt-16 rounded-3xl bg-gradient-to-r from-red-600 to-rose-500 p-10 text-center text-white"
        >

          <h3 className="text-3xl font-bold">
            Consult With Our Heart Experts
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-red-100">
            Get professional advice from experienced cardiac surgeons
            and choose the right treatment plan for your heart health.
          </p>


          <button className="mt-7 rounded-xl bg-white px-8 py-4 font-semibold text-red-600 hover:bg-red-50">
            Book Appointment
          </button>

        </motion.div>


      </div>
    </section>
  );
}