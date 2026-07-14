import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);


  const faqs = [
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes, professional teeth whitening is safe when performed by qualified dental professionals using approved whitening products.",
    },
    {
      question: "How long does the whitening treatment take?",
      answer:
        "In-clinic whitening usually takes around 60 to 90 minutes depending on your dental condition and treatment plan.",
    },
    {
      question: "How long do whitening results last?",
      answer:
        "Results can last from several months to a few years depending on your oral care routine and lifestyle habits.",
    },
    {
      question: "Will teeth whitening cause sensitivity?",
      answer:
        "Some patients may experience temporary sensitivity, but our dentists provide guidance to minimize discomfort.",
    },
    {
      question: "Can everyone get teeth whitening?",
      answer:
        "Most people are suitable candidates, but a dental consultation is recommended before starting treatment.",
    },
  ];



  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (

    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">


      <div className="max-w-5xl mx-auto">


        {/* Header */}
        <div className="text-center mb-12">


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
            FAQ
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Frequently Asked Questions
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Find answers to common questions about our teeth whitening
            treatments.
          </p>


        </div>




        {/* FAQ Items */}
        <div className="space-y-4">


          {faqs.map((faq,index)=>(

            <div
              key={index}
              className="
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                bg-gray-50
                hover:border-blue-200
                transition
              "
            >


              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-5
                  sm:p-6
                  text-left
                "
              >

                <span className="
                  font-semibold
                  text-gray-900
                  text-base
                  sm:text-lg
                ">
                  {faq.question}
                </span>


                <ChevronDown
                  size={22}
                  className={`
                    text-blue-600
                    flex-shrink-0
                    transition-transform
                    duration-300
                    ${
                      activeIndex === index
                      ? "rotate-180"
                      : ""
                    }
                  `}
                />

              </button>




              {/* Answer */}
              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                  }
                `}
              >

                <div className="overflow-hidden">


                  <p className="
                    px-5
                    sm:px-6
                    pb-5
                    sm:pb-6
                    text-gray-600
                    leading-relaxed
                  ">
                    {faq.answer}
                  </p>


                </div>


              </div>



            </div>

          ))}


        </div>


      </div>


    </section>

  );
};

export default FAQ;