import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaCheckCircle,
  FaFileMedical,
} from "react-icons/fa";


export default function ReportPreview() {


  const reportData = [
    {
      title: "Left Main Artery",
      value: "Normal",
    },
    {
      title: "LAD Artery",
      value: "No Blockage",
    },
    {
      title: "RCA Artery",
      value: "Clear Flow",
    },
    {
      title: "Blood Flow",
      value: "Normal",
    },
    {
      title: "Stenosis",
      value: "None Detected",
    },
    {
      title: "Final Result",
      value: "Normal Angiogram",
    },
  ];


  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">


        {/* Heading */}
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

          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Digital Angiography Report
          </span>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            Sample Angiography Analysis Report
          </h2>


          <p className="mt-5 text-gray-600 leading-8">
            Our digital angiography reports provide detailed coronary artery
            analysis to help doctors make accurate treatment decisions.
          </p>


        </motion.div>




        {/* Report Card */}
        <motion.div

          initial={{
            opacity: 0,
            scale: 0.9,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="mt-14 max-w-5xl mx-auto bg-gray-50 rounded-3xl shadow-xl p-6 md:p-10"

        >



          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-5 border-b pb-6">


            <div className="flex items-center gap-4">


              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-3xl">

                <FaHeartbeat/>

              </div>



              <div>

                <h3 className="text-2xl font-bold text-gray-800">
                  Angiography Report
                </h3>


                <p className="text-gray-500">
                  Patient: John Doe
                </p>


              </div>


            </div>




            <div className="flex items-center gap-2 text-green-600 font-bold">


              <FaCheckCircle className="text-2xl"/>


              Normal Angiography Result


            </div>


          </div>





          {/* Angiography Image Preview */}

          <div className="my-10 bg-white rounded-2xl p-6 shadow-inner">


            <div className="flex items-center gap-2 mb-4 text-red-600 font-semibold">


              <FaFileMedical/>


              Coronary Angiography Scan


            </div>



            <img

              src="/images/angiography-scan.png"

              alt="Angiography Scan"

              className="
              w-full
              h-32
              object-cover
              rounded-xl
              "

            />


          </div>





          {/* Report Details */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">


            {reportData.map((item,index)=>(


              <div

                key={index}

                className="
                bg-white
                rounded-2xl
                p-5
                shadow-md
                "

              >


                <p className="text-gray-500 text-sm">

                  {item.title}

                </p>



                <h4 className="text-xl font-bold text-gray-800 mt-2">

                  {item.value}

                </h4>



              </div>


            ))}



          </div>





          {/* Footer */}

          <div className="mt-8 bg-red-600 text-white rounded-2xl p-6 text-center">


            <h3 className="text-2xl font-bold">

              Need Your Angiography Test?

            </h3>



            <p className="mt-2 text-red-100">

              Book an appointment and get expert cardiac evaluation.

            </p>



            <button

              className="
              mt-5
              bg-white
              text-red-600
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-gray-100
              transition
              "

            >

              Book Angiography Test

            </button>



          </div>




        </motion.div>



      </div>


    </section>

  );

}