import React, { useState } from "react";
import {
  Baby,
  Plus,
  Minus,
} from "lucide-react";


const FAQ = () => {


  const [active, setActive] = useState(null);



  const faqs = [
    {
      question:
        "When should a newborn baby have the first checkup?",
      answer:
        "A newborn should have an early health checkup after birth to monitor feeding, weight, breathing and overall health condition.",
    },
    {
      question:
        "How often should newborns visit a pediatrician?",
      answer:
        "Regular pediatric visits are recommended to monitor growth, development, vaccination and identify any health concerns early.",
    },
    {
      question:
        "What services are included in newborn care?",
      answer:
        "Newborn care includes health checkups, vaccination guidance, feeding support, growth monitoring and treatment of common newborn problems.",
    },
    {
      question:
        "How can parents support newborn health at home?",
      answer:
        "Parents can support newborn health through proper feeding, hygiene, safe sleeping practices and following pediatrician advice.",
    },
    {
      question:
        "When should parents seek emergency newborn care?",
      answer:
        "Parents should seek medical attention if the baby has breathing difficulty, poor feeding, fever, unusual sleepiness or other concerning symptoms.",
    },
  ];





  return (

    <section
      className="
        py-16
        sm:py-20
        bg-white
        px-4
        sm:px-6
        lg:px-8
      "
    >


      <div className="max-w-5xl mx-auto">





        {/* Header */}

        <div
          className="
            text-center
            mb-12
          "
        >

          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-pink-100
              text-pink-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            <Baby size={16}/>
            Newborn Care FAQ
          </span>





          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
            "
          >
            Frequently Asked Questions
          </h2>





          <p
            className="
              mt-4
              text-gray-600
              text-base
              sm:text-lg
            "
          >
            Common questions about newborn healthcare and pediatric services.
          </p>


        </div>









        {/* FAQ Items */}

        <div className="space-y-4">


          {
            faqs.map((item,index)=>{


              const isOpen = active === index;



              return (

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
                    onClick={()=>setActive(isOpen ? null : index)}
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

                    <h3
                      className="
                        font-bold
                        text-gray-900
                        text-base
                        sm:text-lg
                      "
                    >
                      {item.question}
                    </h3>



                    <div
                      className="
                        w-9
                        h-9
                        rounded-xl
                        bg-pink-100
                        text-pink-600
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      "
                    >

                      {
                        isOpen
                        ?
                        <Minus size={20}/>
                        :
                        <Plus size={20}/>
                      }

                    </div>


                  </button>







                  {
                    isOpen && (

                      <div
                        className="
                          px-5
                          pb-5
                          text-gray-600
                          leading-relaxed
                        "
                      >
                        {item.answer}
                      </div>

                    )
                  }



                </div>

              );


            })
          }


        </div>






      </div>


    </section>

  );

};


export default FAQ;