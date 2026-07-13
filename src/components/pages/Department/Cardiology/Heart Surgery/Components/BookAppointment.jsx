import { motion } from "framer-motion";
import {
  CalendarDays,
  PhoneCall,
  UserRound,
  Mail,
  MessageSquare,
  Clock3,
  HeartPulse,
} from "lucide-react";

export default function BookAppointment() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              Book Appointment
            </span>


            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Schedule Your Heart Consultation Today
            </h2>


            <p className="mt-5 leading-8 text-slate-600">
              Get expert advice from our experienced cardiac surgeons.
              Book an appointment and take the first step toward better
              heart health.
            </p>



            {/* Contact Cards */}

            <div className="mt-8 space-y-5">


              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <div className="rounded-xl bg-red-100 p-3 text-red-600">
                  <PhoneCall size={25}/>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Emergency Hotline
                  </h4>

                  <p className="text-slate-600">
                    +880 1700-000000
                  </p>
                </div>

              </div>



              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <div className="rounded-xl bg-red-100 p-3 text-red-600">
                  <Clock3 size={25}/>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Working Hours
                  </h4>

                  <p className="text-slate-600">
                    24 Hours Emergency Service
                  </p>
                </div>

              </div>



              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <div className="rounded-xl bg-red-100 p-3 text-red-600">
                  <HeartPulse size={25}/>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Expert Cardiac Team
                  </h4>

                  <p className="text-slate-600">
                    Experienced Heart Specialists
                  </p>
                </div>

              </div>


            </div>


          </motion.div>




          {/* Form */}

          <motion.div

            initial={{
              opacity:0,
              x:40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.6
            }}

            viewport={{
              once:true
            }}

            className="rounded-3xl bg-white p-8 shadow-xl md:p-10"

          >

            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Make An Appointment
            </h3>


            <form className="space-y-5">


              {/* Name */}

              <div className="relative">

                <UserRound
                  className="absolute left-4 top-4 text-red-500"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-red-500"
                />

              </div>



              {/* Email */}

              <div className="relative">

                <Mail
                  className="absolute left-4 top-4 text-red-500"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-red-500"
                />

              </div>



              {/* Phone */}

              <div className="relative">

                <PhoneCall
                  className="absolute left-4 top-4 text-red-500"
                  size={20}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-red-500"
                />

              </div>



              {/* Date */}

              <div className="relative">

                <CalendarDays
                  className="absolute left-4 top-4 text-red-500"
                  size={20}
                />

                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-red-500"
                />

              </div>



              {/* Message */}

              <div className="relative">

                <MessageSquare
                  className="absolute left-4 top-4 text-red-500"
                  size={20}
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-red-500"
                />

              </div>



              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Submit Appointment Request
              </button>


            </form>


          </motion.div>


        </div>

      </div>
    </section>
  );
}