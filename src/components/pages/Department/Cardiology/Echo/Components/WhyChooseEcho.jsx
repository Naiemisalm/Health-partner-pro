import { motion } from "framer-motion";
import {
  FaUserMd,
  FaLaptopMedical,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";


export default function WhyChooseEcho() {


  const reasons = [

    {
      icon: FaUserMd,

      title: "Expert Cardiologists",

      description:
        "Our experienced heart specialists provide accurate Echo interpretation and consultation.",

    },


    {
      icon: FaLaptopMedical,

      title: "Advanced Technology",

      description:
        "Modern echocardiography machines provide clear and detailed heart images.",

    },


    {
      icon: FaClock,

      title: "Quick Reporting",

      description:
        "Fast and reliable Echo reports reviewed by qualified cardiac specialists.",

    },


    {
      icon: FaCheckCircle,

      title: "Accurate Diagnosis",

      description:
        "Detailed analysis helps detect heart valve, chamber and function problems.",

    },

  ];



  return (

    <section className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-5">



        {/* Heading */}

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
            duration:0.6,
          }}

          viewport={{
            once:true,
          }}

          className="text-center max-w-3xl mx-auto"

        >


          <span className="
            bg-cyan-100
            text-cyan-600
            px-4
            py-2
            rounded-full
            font-semibold
          ">

            Why Choose Our Echo Service

          </span>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-800
            mt-5
          ">

            Reliable Heart Imaging With Expert Care

          </h2>



          <p className="
            mt-5
            text-gray-600
            leading-8
          ">

            We combine advanced technology, experienced doctors and
            patient-focused care to provide accurate echocardiography services.

          </p>


        </motion.div>







        {/* Cards */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-12
        ">


          {
            reasons.map((item,index)=>{


              const Icon = item.icon;


              return (

                <motion.div


                  key={index}


                  initial={{
                    opacity:0,
                    y:30,
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
                    p-7
                    rounded-2xl
                    text-center
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition
                  "


                >



                  <Icon className="
                    text-4xl
                    text-cyan-600
                    mx-auto
                  "/>




                  <h3 className="
                    text-xl
                    font-bold
                    mt-5
                  ">

                    {item.title}

                  </h3>




                  <p className="
                    text-gray-600
                    mt-3
                    text-sm
                    leading-6
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