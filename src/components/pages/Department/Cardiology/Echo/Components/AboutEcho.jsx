import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaWaveSquare,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";


export default function AboutEcho() {


  const features = [

    {
      icon: FaHeartbeat,
      title: "Heart Function Analysis",
      description:
        "Echocardiography provides detailed images of heart chambers, valves and pumping function.",
    },


    {
      icon: FaWaveSquare,
      title: "Blood Flow Monitoring",
      description:
        "Color Doppler Echo helps evaluate blood flow direction and detect valve problems.",
    },


    {
      icon: FaShieldAlt,
      title: "Safe & Non-Invasive",
      description:
        "Echo uses ultrasound technology without radiation and is completely painless.",
    },


    {
      icon: FaUserMd,
      title: "Expert Cardiologist Review",
      description:
        "Reports are analyzed by experienced cardiac specialists for accurate diagnosis.",
    },

  ];



  return (

    <section className="py-16 md:py-20 bg-white">


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

          className="
            text-center
            max-w-3xl
            mx-auto
          "

        >


          <span className="
            inline-block
            bg-blue-100
            text-blue-600
            px-5
            py-2
            rounded-full
            font-semibold
          ">

            About Echocardiography

          </span>




          <h2 className="
            text-3xl
            md:text-5xl
            font-bold
            text-gray-800
            mt-5
          ">

            Advanced Echo Heart Imaging

          </h2>




          <p className="
            text-gray-600
            mt-5
            leading-8
          ">

            Echocardiography (Echo) is an advanced ultrasound test
            that creates real-time images of the heart. It helps doctors
            check heart muscles, valves, chambers and blood circulation.

          </p>



        </motion.div>








        {/* Feature Cards */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-12
        ">



          {
            features.map((item,index)=>{


              const Icon = item.icon;



              return (

                <motion.div


                  key={index}


                  initial={{
                    opacity:0,
                    y:40,
                  }}


                  whileInView={{
                    opacity:1,
                    y:0,
                  }}


                  transition={{
                    delay:index * 0.1,
                  }}


                  viewport={{
                    once:true,
                  }}



                  className="
                    bg-gray-50
                    rounded-2xl
                    p-6
                    text-center
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition
                  "


                >



                  <div className="
                    w-16
                    h-16
                    bg-blue-100
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mx-auto
                  ">


                    <Icon className="
                      text-3xl
                      text-blue-600
                    "/>


                  </div>





                  <h3 className="
                    text-xl
                    font-bold
                    mt-5
                  ">

                    {item.title}

                  </h3>





                  <p className="
                    text-gray-600
                    text-sm
                    leading-6
                    mt-3
                  ">

                    {item.description}

                  </p>




                </motion.div>

              );


            })
          }



        </div>




      </div>


    </section>

  );

}