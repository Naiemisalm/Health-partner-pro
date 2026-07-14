import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";


const FAQ = () => {


  const faqs = [
    {
      question: "What causes fever?",
      answer:
        "Fever is usually caused by infections such as viral, bacterial, or other inflammatory conditions that affect the body's immune response.",
    },
    {
      question: "When should I consult a doctor for fever?",
      answer:
        "You should consult a doctor if fever is high, lasts for several days, or is associated with severe symptoms like breathing difficulty, chest pain, or dehydration.",
    },
    {
      question: "How can fever be managed at home?",
      answer:
        "Drink enough fluids, take proper rest, maintain a comfortable temperature, and follow medical advice for fever management.",
    },
    {
      question: "Is every fever dangerous?",
      answer:
        "Most fevers are temporary and improve with proper care. However, persistent or severe fever may require medical evaluation.",
    },
    {
      question: "Can children get fever frequently?",
      answer:
        "Children may experience fever more often due to developing immune systems. Regular monitoring and medical consultation are important.",
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
            bg-green-100
            text-green-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">

            <HelpCircle size={16}/>
            Fever FAQ

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

            Common questions about fever symptoms, causes, diagnosis and treatment.

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

                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }

                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-6
                    py-5
                    font-semibold
                    text-gray-900
                  "

                >


                  <span>
                    {item.question}
                  </span>



                  <ChevronDown

                    size={22}

                    className={`
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
                      px-6
                      pb-5
                      text-gray-600
                      leading-relaxed
                      bg-white
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