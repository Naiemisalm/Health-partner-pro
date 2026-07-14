import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";

const FAQ = () => {

  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "What is LASIK eye surgery?",
      answer:
        "LASIK is a laser vision correction procedure that reshapes the cornea to reduce or eliminate the need for glasses or contact lenses.",
    },
    {
      question: "Who is a good candidate for LASIK?",
      answer:
        "Adults with stable vision, healthy eyes, and suitable corneal thickness are generally considered good candidates after a comprehensive eye examination.",
    },
    {
      question: "Is LASIK surgery painful?",
      answer:
        "No. Numbing eye drops are used before the procedure, so most patients feel little to no pain. Mild discomfort may occur for a few hours afterward.",
    },
    {
      question: "How long does the procedure take?",
      answer:
        "The laser treatment usually takes only a few minutes for each eye, while the complete visit generally lasts less than an hour.",
    },
    {
      question: "How soon can I return to normal activities?",
      answer:
        "Many patients resume normal daily activities within 24–48 hours, although the doctor may recommend avoiding swimming, eye makeup, and strenuous activities for a short period.",
    },
    {
      question: "Are the results permanent?",
      answer:
        "LASIK provides long-lasting vision correction for most patients. However, natural age-related vision changes may still occur over time.",
    },
  ];



  return (

    <section className="
      py-16
      sm:py-20
      bg-gray-50
      px-4
      sm:px-6
      lg:px-8
    ">

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="
          text-center
          mb-12
        ">

          <span className="
            inline-flex
            items-center
            gap-2
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">

            <HelpCircle size={16}/>
            Frequently Asked Questions

          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            LASIK FAQ

          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">

            Find answers to the most common questions about
            LASIK eye surgery and recovery.

          </p>

        </div>







        {/* FAQ */}

        <div className="space-y-4">

          {faqs.map((faq,index)=>(

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-200
                overflow-hidden
              "
            >

              <button

                onClick={()=>
                  setActive(
                    active===index ? -1 : index
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

                <h3 className="
                  font-semibold
                  text-gray-900
                ">
                  {faq.question}
                </h3>

                {
                  active===index ?

                  <ChevronUp className="text-blue-600"/>

                  :

                  <ChevronDown className="text-gray-500"/>

                }

              </button>





              {
                active===index && (

                  <div className="
                    px-6
                    pb-6
                    text-gray-600
                    leading-relaxed
                  ">

                    {faq.answer}

                  </div>

                )
              }

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default FAQ;