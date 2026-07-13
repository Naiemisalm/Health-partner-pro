import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Heart Surgery Patient",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The entire cardiac team was extremely supportive. My bypass surgery was successful and the recovery process was excellent.",
  },
  {
    name: "Sarah Johnson",
    role: "Valve Replacement Patient",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Professional doctors, modern facilities, and caring staff. I felt safe throughout my heart treatment journey.",
  },
  {
    name: "David Miller",
    role: "Cardiac Care Patient",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "The surgeons explained everything clearly and provided exceptional care before and after surgery.",
  },
];


export default function Testimonials(){

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
            Patient Reviews
          </span>


          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            What Our Patients Say
          </h2>


          <p className="mt-5 text-lg leading-8 text-slate-600">
            Thousands of patients trust our cardiac specialists for safe,
            advanced, and compassionate heart treatment.
          </p>


        </motion.div>



        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {testimonials.map((item,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.5,
                delay:index*.15
              }}

              viewport={{once:true}}

              whileHover={{
                y:-8
              }}

              className="relative rounded-3xl bg-white p-8 shadow-lg"

            >


              {/* Quote */}

              <div className="absolute right-8 top-8 text-red-100">

                <Quote size={50}/>

              </div>



              {/* Stars */}

              <div className="mb-5 flex gap-1">

                {[1,2,3,4,5].map((star)=>(

                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>



              {/* Review */}

              <p className="leading-8 text-slate-600">

                "{item.review}"

              </p>



              {/* User */}

              <div className="mt-8 flex items-center gap-4">


                <img

                  src={item.image}

                  alt={item.name}

                  className="h-14 w-14 rounded-full object-cover"

                />


                <div>

                  <h4 className="font-bold text-slate-900">

                    {item.name}

                  </h4>


                  <p className="text-sm text-red-600">

                    {item.role}

                  </p>


                </div>


              </div>



            </motion.div>


          ))}


        </div>




        {/* Trust Banner */}

        <motion.div

          initial={{opacity:0,scale:.9}}

          whileInView={{
            opacity:1,
            scale:1
          }}

          transition={{duration:.5}}

          viewport={{once:true}}

          className="mt-16 rounded-3xl bg-gradient-to-r from-red-600 to-rose-500 p-8 text-center text-white"

        >

          <h3 className="text-3xl font-bold">

            Trusted By Thousands Of Heart Patients

          </h3>


          <p className="mx-auto mt-3 max-w-2xl text-red-100">

            Our commitment is to provide safe surgery, expert medical care,
            and a healthier future for every patient.

          </p>


        </motion.div>


      </div>

    </section>

  );

}