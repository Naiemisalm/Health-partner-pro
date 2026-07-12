import { motion } from "framer-motion";

import { ecgServices } from "../components/data/ecgServices";


export default function ECGServices() {


  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">


        {/* Header */}
        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.7,
          }}

          viewport={{
            once:true,
          }}

          className="text-center max-w-3xl mx-auto"

        >


          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold">

            Our Services

          </span>



          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">

            ECG Tests We Provide

          </h2>



          <p className="mt-5 text-gray-600 leading-8">

            We provide advanced ECG testing services with accurate reports and
            expert cardiac evaluation.

          </p>


        </motion.div>





        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">


          {
            ecgServices.map((service,index)=>{


              const Icon = service.icon;


              return (

                <motion.div


                  key={service.id}


                  initial={{
                    opacity:0,
                    y:40,
                  }}


                  whileInView={{
                    opacity:1,
                    y:0,
                  }}


                  transition={{
                    duration:0.5,
                    delay:index*0.1,
                  }}


                  viewport={{
                    once:true,
                  }}


                  whileHover={{
                    y:-10,
                  }}


                  className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition group"


                >




                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition">


                    <Icon/>


                  </div>





                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-gray-800">

                    {service.title}

                  </h3>




                  <p className="text-blue-600 font-semibold mt-2">

                    {service.shortTitle}

                  </p>





                  {/* Description */}
                  <p className="mt-3 text-gray-600 leading-7">

                    {service.description}

                  </p>






                  {/* Info */}
                  <div className="mt-5 flex justify-between text-sm">


                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">

                      {service.category}

                    </span>



                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">

                      {service.duration}

                    </span>


                  </div>





                  <button

                    className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition"

                  >

                    Learn More →

                  </button>



                </motion.div>

              );


            })
          }


        </div>





        {/* CTA */}
        <motion.div


          initial={{
            opacity:0,
            y:30,
          }}


          whileInView={{
            opacity:1,
            y:0,
          }}


          transition={{
            duration:0.6,
          }}


          viewport={{
            once:true,
          }}


          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-center text-white"


        >


          <h3 className="text-3xl md:text-4xl font-bold">

            Need an ECG Test?

          </h3>



          <p className="mt-4 text-blue-100">

            Book your appointment with our expert cardiac team today.

          </p>




          <button

            className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"

          >

            Book ECG Now

          </button>



        </motion.div>



      </div>


    </section>

  );

}