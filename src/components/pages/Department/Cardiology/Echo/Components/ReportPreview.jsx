import { motion } from "framer-motion";
import {
  FaFileMedical,
  FaHeartbeat,
  FaCheckCircle,
} from "react-icons/fa";


export default function ReportPreview() {


  const reports = [

    {
      icon: FaHeartbeat,

      title: "Heart Function Analysis",

      description:
        "Evaluation of heart pumping ability, chamber size and overall cardiac performance.",

    },


    {
      icon: FaCheckCircle,

      title: "Valve Assessment",

      description:
        "Detailed analysis of heart valves to identify narrowing or leakage problems.",

    },


    {
      icon: FaFileMedical,

      title: "Detailed Echo Report",

      description:
        "Complete report reviewed by experienced cardiologists with clinical recommendations.",

    },

  ];



  return (

    <section className="py-20 bg-white">


      <div className="max-w-7xl mx-auto px-5">



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
            bg-purple-100
            text-purple-600
            px-4
            py-2
            rounded-full
            font-semibold
          ">

            Echo Report Preview

          </span>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
          ">

            Accurate Heart Assessment Report

          </h2>



          <p className="
            text-gray-600
            mt-4
            max-w-2xl
            mx-auto
          ">

            Our Echo reports provide detailed information about
            heart structure, movement and function.

          </p>


        </motion.div>







        <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-12
        ">


          {
            reports.map((item,index)=>{


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
                    delay:index*0.1,
                  }}


                  viewport={{
                    once:true,
                  }}



                  className="
                    bg-gray-50
                    p-8
                    rounded-2xl
                    text-center
                    hover:shadow-xl
                    transition
                  "


                >


                  <Icon className="
                    text-5xl
                    text-purple-600
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
                    leading-7
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