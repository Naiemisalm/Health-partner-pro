import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const FAQ = () => {

  const faqs = [
    {
      question: "Are vaccines safe for children?",
      answer:
        "Yes, vaccines are carefully tested for safety and effectiveness before being approved for children.",
    },
    {
      question: "Why does my child need vaccination?",
      answer:
        "Vaccination protects children from serious infectious diseases and helps build strong immunity.",
    },
    {
      question: "Can my child receive multiple vaccines at the same time?",
      answer:
        "Yes, many vaccines can be safely given during the same visit according to the recommended schedule.",
    },
    {
      question: "Can vaccination cause fever?",
      answer:
        "Some children may experience mild fever or discomfort after vaccination. These effects are usually temporary.",
    },
    {
      question: "What should I do if my child misses a vaccine dose?",
      answer:
        "Contact your pediatrician. A missed dose can usually be completed without restarting the vaccination schedule.",
    },
    {
      question: "Where can I get my child vaccinated?",
      answer:
        "You can visit our pediatric department where experienced doctors provide safe vaccination services.",
    },
  ];


  const [open, setOpen] = useState(null);



  return (
    <section className="
      py-16
      sm:py-20
      bg-white
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
            bg-sky-100
            text-sky-600
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
            font-bold
            text-gray-900
          ">
            Common Vaccination Questions
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-lg
          ">
            Find answers to common questions about child vaccination and
            immunization.
          </p>


        </div>







        {/* FAQ List */}
        <div className="space-y-4">


          {
            faqs.map((item,index)=>(
              
              <div
                key={index}
                className="
                  border
                  border-gray-200
                  rounded-2xl
                  overflow-hidden
                  bg-gray-50
                "
              >


                <button
                  onClick={()=>setOpen(open === index ? null : index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    p-5
                    text-left
                  "
                >

                  <span className="
                    font-semibold
                    text-gray-900
                  ">
                    {item.question}
                  </span>


                  <ChevronDown
                    size={22}
                    className={`
                      text-sky-600
                      transition-transform
                      ${
                        open === index
                        ? "rotate-180"
                        : ""
                      }
                    `}
                  />

                </button>





                {
                  open === index && (

                    <div className="
                      px-5
                      pb-5
                      text-gray-600
                      leading-relaxed
                    ">
                      {item.answer}
                    </div>

                  )
                }


              </div>

            ))
          }


        </div>


      </div>


    </section>
  );
};

export default FAQ;