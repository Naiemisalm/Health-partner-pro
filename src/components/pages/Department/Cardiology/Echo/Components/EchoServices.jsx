import { motion } from "framer-motion";
import { echoServices } from "../../Echo/Components/data/echoServices";


export default function EchoServices() {


  return (

    <section className="py-20 bg-white">


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
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            font-semibold
          ">

            Our Echo Services

          </span>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
            text-gray-800
          ">

            Complete Echocardiography Solutions

          </h2>



          <p className="
            text-gray-600
            mt-4
            max-w-2xl
            mx-auto
          ">

            Advanced heart imaging services with modern equipment
            and experienced cardiac specialists.

          </p>


        </motion.div>







        {/* Service Cards */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-7
          mt-12
        ">


          {
            echoServices.map((service,index)=>{


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
                    delay:index*0.1,
                  }}


                  viewport={{
                    once:true,
                  }}



                  className="
                    bg-gray-50
                    rounded-2xl
                    p-6
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition
                  "


                >



                  <Icon className="
                    text-5xl
                    text-blue-600
                  "/>




                  <h3 className="
                    text-xl
                    font-bold
                    mt-5
                  ">

                    {service.title}

                  </h3>




                  <p className="
                    text-blue-600
                    font-medium
                    mt-2
                  ">

                    {service.shortTitle}

                  </p>




                  <p className="
                    text-gray-600
                    text-sm
                    leading-6
                    mt-4
                  ">

                    {service.description}

                  </p>





                  <div className="
                    flex
                    justify-between
                    items-center
                    mt-5
                    text-sm
                  ">


                    <span className="
                      bg-blue-100
                      text-blue-700
                      px-3
                      py-1
                      rounded-full
                    ">

                      {service.category}

                    </span>



                    <span className="text-gray-500">

                      {service.duration}

                    </span>



                  </div>



                </motion.div>

              );


            })
          }



        </div>



      </div>


    </section>

  );

}