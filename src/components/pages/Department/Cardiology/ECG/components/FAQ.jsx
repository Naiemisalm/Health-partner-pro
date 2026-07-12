import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "../components/data/faq";

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);


  return (

    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-5">


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

          className="text-center"

        >

          <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-semibold">
            FAQ
          </span>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>


          <p className="mt-5 text-gray-600">
            Find answers to common questions about ECG testing.
          </p>


        </motion.div>



        {/* FAQ Accordion */}
        <div className="mt-12 space-y-5">


          {faqs.map((faq, index) => (

            <motion.div

              key={faq.id}

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              className="border border-gray-200 rounded-2xl overflow-hidden"

            >


              {/* Question Button */}
              <button

                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }

                className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-blue-50 transition"

              >

                <span className="font-bold text-gray-800 text-lg">
                  {faq.question}
                </span>


                <span className="text-blue-600">

                  {
                    openIndex === index
                    ?
                    <FaMinus />
                    :
                    <FaPlus />
                  }

                </span>


              </button>



              {/* Answer */}
              <motion.div

                initial={false}

                animate={{

                  height:
                    openIndex === index
                    ? "auto"
                    : 0,

                  opacity:
                    openIndex === index
                    ? 1
                    : 0,

                }}

                transition={{
                  duration: 0.3,
                }}

                className="overflow-hidden"

              >

                <p className="p-6 text-gray-600 leading-7 bg-white">
                  {faq.answer}
                </p>


              </motion.div>


            </motion.div>

          ))}


        </div>


      </div>

    </section>

  );
}