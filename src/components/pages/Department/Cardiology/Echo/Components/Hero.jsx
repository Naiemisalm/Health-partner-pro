import { motion } from "framer-motion";
import { FaHeartbeat, FaStethoscope } from "react-icons/fa";


export default function Hero() {


  return (

    <section className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white py-20">


      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">


        {/* Left Content */}

        <motion.div

          initial={{
            opacity:0,
            x:-50,
          }}

          animate={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:0.7,
          }}

        >


          <span className="
            inline-block
            bg-white/20
            px-5
            py-2
            rounded-full
            font-semibold
          ">

            Advanced Cardiac Imaging

          </span>





          <h1 className="
            text-4xl
            md:text-6xl
            font-bold
            mt-6
            leading-tight
          ">

            Echocardiography
            <br />

            Advanced Heart Ultrasound

          </h1>





          <p className="
            mt-6
            text-blue-100
            text-lg
            leading-8
            max-w-xl
          ">

            Get detailed images of your heart with modern
            echocardiography technology. Our expert cardiologists
            provide accurate diagnosis and complete heart care.

          </p>





          <div className="flex flex-wrap gap-4 mt-8">


            <button className="
              bg-white
              text-blue-600
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-gray-100
              transition
            ">

              Book Echo Test

            </button>



            <button className="
              border
              border-white
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-white
              hover:text-blue-600
              transition
            ">

              Learn More

            </button>


          </div>



        </motion.div>







        {/* Right Illustration */}

        <motion.div


          initial={{
            opacity:0,
            scale:0.8,
          }}


          animate={{
            opacity:1,
            scale:1,
          }}


          transition={{
            duration:0.7,
          }}


          className="flex justify-center"


        >


          <div className="
            relative
            w-72
            h-72
            md:w-96
            md:h-96
            bg-white/20
            rounded-full
            flex
            items-center
            justify-center
          ">


            <FaHeartbeat className="
              text-white
              text-8xl
              md:text-9xl
            "/>




            <div className="
              absolute
              bottom-8
              right-5
              bg-white
              text-blue-600
              p-5
              rounded-2xl
              shadow-xl
            ">


              <FaStethoscope className="text-3xl mx-auto"/>


              <p className="
                text-sm
                font-bold
                mt-2
              ">

                Expert Care

              </p>


            </div>



          </div>



        </motion.div>



      </div>


    </section>

  );

}