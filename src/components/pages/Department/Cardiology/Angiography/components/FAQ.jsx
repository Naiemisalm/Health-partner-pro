import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";


export default function FAQ() {


  const faqData = [
    {
      question: "What is angiography?",
      answer:
        "Angiography is an imaging procedure used to check blood vessels and detect blockages or narrowing in arteries.",
    },

    {
      question: "Is angiography painful?",
      answer:
        "Angiography is usually performed under local anesthesia, so patients feel minimal discomfort during the procedure.",
    },

    {
      question: "How long does angiography take?",
      answer:
        "The procedure generally takes around 30 to 60 minutes depending on the condition.",
    },

    {
      question: "Is angiography safe?",
      answer:
        "Yes, angiography is considered a safe procedure when performed by experienced cardiologists.",
    },

    {
      question: "How should I prepare for angiography?",
      answer:
        "Your doctor may advise fasting and some tests before the procedure. Follow the instructions provided by your healthcare team.",
    },

  ];



  const [activeIndex, setActiveIndex] = useState(null);



  return (

    <section className="py-20 bg-white">


      <div className="max-w-5xl mx-auto px-5">



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
            duration:0.7,
          }}

          viewport={{
            once:true,
          }}

          className="text-center mb-12"

        >


          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">

            FAQ

          </span>



          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">

            Frequently Asked Questions

          </h2>



          <p className="mt-5 text-gray-600 leading-8">

            Find answers to common questions about our angiography services.

          </p>



        </motion.div>





        {/* FAQ Items */}

        <div className="space-y-5">


          {faqData.map((item,index)=>(


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
                duration:0.4,
                delay:index*0.1,
              }}

              viewport={{
                once:true,
              }}


              className="
              border
              border-gray-200
              rounded-2xl
              overflow-hidden
              "

            >



              <button

                onClick={() =>
                  setActiveIndex(
                    activeIndex === index ? null : index
                  )
                }


                className="
                w-full
                flex
                justify-between
                items-center
                p-6
                text-left
                "

              >


                <h3 className="text-lg font-bold text-gray-800">

                  {item.question}

                </h3>



                <span className="text-red-600">

                  {
                    activeIndex === index
                    ?
                    <FaMinus/>
                    :
                    <FaPlus/>
                  }

                </span>



              </button>





              {activeIndex === index && (

                <motion.div

                  initial={{
                    opacity:0,
                    height:0,
                  }}

                  animate={{
                    opacity:1,
                    height:"auto",
                  }}

                  className="px-6 pb-6 text-gray-600 leading-7"

                >

                  {item.answer}

                </motion.div>

              )}



            </motion.div>


          ))}


        </div>



      </div>


    </section>

  );

}