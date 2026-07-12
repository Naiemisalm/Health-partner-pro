import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { echoTestimonials } from "../Components/data/echoTestimonials";


export default function Testimonials() {


  return (

    <section className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-5">



        {/* Heading */}

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
            duration:0.5,
          }}

          viewport={{
            once:true,
          }}

          className="text-center"

        >


          <span className="
            bg-yellow-100
            text-yellow-600
            px-4
            py-2
            rounded-full
            font-semibold
          ">

            Patient Reviews

          </span>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
            text-gray-800
          ">

            What Patients Say About Our Echo Service

          </h2>


        </motion.div>







        {/* Testimonials */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-7
          mt-12
        ">


          {
            echoTestimonials.map((item,index)=>(


              <motion.div


                key={item.id}


                initial={{
                  opacity:0,
                  y:40,
                }}


                whileInView={{
                  opacity:1,
                  y:0,
                }}


                transition={{
                  delay:index*0.1,
                }}


                viewport={{
                  once:true,
                }}


                className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  p-6
                  hover:shadow-xl
                  transition
                "


              >



                <FaQuoteLeft className="
                  text-3xl
                  text-blue-600
                "/>





                <p className="
                  text-gray-600
                  mt-4
                  leading-7
                  text-sm
                ">

                  {item.review}

                </p>





                <div className="
                  flex
                  gap-1
                  mt-4
                ">


                  {
                    [...Array(item.rating)].map((_,i)=>(

                      <FaStar
                        key={i}
                        className="text-yellow-400"
                      />

                    ))
                  }


                </div>






                <div className="
                  flex
                  items-center
                  gap-4
                  mt-5
                ">


                  <img

                    src={item.image}

                    alt={item.name}

                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                    "

                  />



                  <div>


                    <h3 className="
                      font-bold
                    ">

                      {item.name}

                    </h3>



                    <p className="
                      text-sm
                      text-gray-500
                    ">

                      {item.role}

                    </p>



                  </div>


                </div>



              </motion.div>


            ))
          }



        </div>




      </div>


    </section>

  );

}