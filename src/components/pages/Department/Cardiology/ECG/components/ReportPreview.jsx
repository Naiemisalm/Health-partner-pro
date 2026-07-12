import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaCheckCircle,
  FaFileMedical,
} from "react-icons/fa";

export default function ReportPreview() {

  const reportData = [
    {
      title: "Heart Rate",
      value: "72 BPM",
    },
    {
      title: "Rhythm",
      value: "Normal Sinus Rhythm",
    },
    {
      title: "PR Interval",
      value: "160 ms",
    },
    {
      title: "QRS Duration",
      value: "90 ms",
    },
    {
      title: "QT Interval",
      value: "380 ms",
    },
    {
      title: "ST Segment",
      value: "Normal",
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

          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold">
            Digital ECG Report
          </span>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            Sample ECG Analysis Report
          </h2>


          <p className="mt-5 text-gray-600 leading-8">
            Our digital ECG reports provide detailed heart analysis to help
            doctors make accurate decisions.
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


          {/* Report Header */}
          <div className="flex flex-col md:flex-row justify-between gap-5 border-b pb-6">


            <div className="flex items-center gap-4">

              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-3xl">
                <FaHeartbeat/>
              </div>


              <div>

                <h3 className="text-2xl font-bold text-gray-800">
                  ECG Report
                </h3>

                <p className="text-gray-500">
                  Patient: John Doe
                </p>

              </div>

            </div>



            <div className="flex items-center gap-2 text-green-600 font-bold">

              <FaCheckCircle className="text-2xl"/>

              Normal ECG Result

            </div>


          </div>



          {/* ECG Wave */}
          <div className="my-10 bg-white rounded-2xl p-6 shadow-inner overflow-hidden">


            <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold">

              <FaFileMedical/>
              ECG Wave Pattern

            </div>


            <svg
              viewBox="0 0 800 150"
              className="w-full h-32"
            >

              <polyline

                fill="none"

                stroke="#2563eb"

                strokeWidth="4"

                points="
                0,80
                80,80
                120,80
                150,20
                180,130
                220,80
                300,80
                350,80
                390,40
                420,100
                470,80
                550,80
                620,80
                650,30
                690,120
                730,80
                800,80
                "

              />

            </svg>


          </div>



          {/* Report Details */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">


            {reportData.map((item,index)=>(

              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-md"
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
          <div className="mt-8 bg-blue-600 text-white rounded-2xl p-6 text-center">

            <h3 className="text-2xl font-bold">
              Need Your ECG Report?
            </h3>

            <p className="mt-2 text-blue-100">
              Book an appointment and get professional cardiac evaluation.
            </p>


            <button className="mt-5 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Book ECG Test
            </button>

          </div>


        </motion.div>


      </div>

    </section>

  );
}