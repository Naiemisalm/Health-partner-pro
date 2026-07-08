import React, { useState } from "react";


const FAQSection = ({faqs}) => {


  const [openIndex, setOpenIndex] = useState(null);



  return (

    <section className="
      bg-white
      py-16
      px-4
    ">


      <div className="
        max-w-4xl
        mx-auto
      ">


        <div className="text-center mb-10">


          <h2 className="
            text-3xl
            font-bold
            text-gray-800
          ">
            Frequently Asked Questions
          </h2>


          <p className="
            text-gray-600
            mt-3
          ">
            Find answers to common healthcare questions.
          </p>


        </div>





        <div className="space-y-4">


          {
            faqs.map((item,index)=>(


              <div

                key={index}

                className="
                border
                rounded-xl
                overflow-hidden
                "

              >


                <button

                  onClick={()=>setOpenIndex(
                    openIndex === index ? null : index
                  )}

                  className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-5
                  text-left
                  font-semibold
                  text-gray-800
                  "

                >


                  <span>
                    {item.question}
                  </span>


                  <span className="
                    text-blue-600
                    text-xl
                  ">
                    {
                      openIndex === index 
                      ? "−" 
                      : "+"
                    }
                  </span>


                </button>





                {
                  openIndex === index && (

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


export default FAQSection;