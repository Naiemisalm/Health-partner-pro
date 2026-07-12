import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import { testimonials } from "../components/data/testimonials";


export default function Testimonials() {


  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">


        {/* Header */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="text-center max-w-3xl mx-auto"

        >

          <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-semibold">
            Patient Reviews
          </span>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            What Our Patients Say
          </h2>


          <p className="mt-5 text-gray-600 leading-8">
            Read feedback from patients who trusted our ECG and cardiac care
            services.
          </p>


        </motion.div>





        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">


          {testimonials.map((item, index)=>(


            <motion.div


              key={item.id}


              initial={{
                opacity:0,
                y:50,
              }}


              whileInView={{
                opacity:1,
                y:0,
              }}


              transition={{
                duration:0.5,
                delay:index*0.15,
              }}


              viewport={{
                once:true,
              }}


              whileHover={{
                y:-10,
              }}


              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition relative"


            >



              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100 text-5xl">

                <FaQuoteLeft/>

              </div>





              {/* Patient Info */}
              <div className="flex items-center gap-4">


                <img

                  src={item.image}

                  alt={item.name}

                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"

                />



                <div>

                  <h3 className="font-bold text-lg text-gray-800">

                    {item.name}

                  </h3>


                  <p className="text-gray-500 text-sm">

                    {item.role}

                  </p>


                </div>


              </div>





              {/* Rating */}
              <div className="flex gap-1 mt-5 text-yellow-400">


                {
                  Array(item.rating)
                  .fill(0)
                  .map((_, i)=>(

                    <FaStar key={i}/>

                  ))
                }


              </div>





              {/* Review */}
              <p className="mt-5 text-gray-600 leading-7">

                "{item.review}"

              </p>




            </motion.div>


          ))}



        </div>


      </div>


    </section>

  );

}