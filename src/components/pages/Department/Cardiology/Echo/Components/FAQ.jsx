import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { echoFaqs } from "../../Echo/Components/data/echoFaq";


export default function FAQ() {


  const [open, setOpen] = useState(null);



  return (

    <section className="py-20 bg-white">


      <div className="max-w-5xl mx-auto px-5">



        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.5,
          }}

          viewport={{
            once:true,
          }}

          className="text-center"

        >


          <span className="
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            font-semibold
          ">

            Frequently Asked Questions

          </span>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
          ">

            Echo Test FAQ

          </h2>



        </motion.div>







        {/* FAQ Items */}

        <div className="mt-10 space-y-5">


          {
            echoFaqs.map((item)=>{


              const isOpen = open === item.id;



              return (

                <div

                  key={item.id}

                  className="
                    border
                    rounded-xl
                    overflow-hidden
                    bg-gray-50
                  "

                >



                  <button

                    onClick={()=> 
                      setOpen(
                        isOpen ? null : item.id
                      )
                    }

                    className="
                      w-full
                      flex
                      justify-between
                      items-center
                      text-left
                      p-5
                      font-semibold
                      text-lg
                    "

                  >


                    {item.question}



                    <FaChevronDown

                      className={`
                        transition
                        ${
                          isOpen 
                          ? "rotate-180"
                          : ""
                        }
                      `}

                    />


                  </button>






                  {
                    isOpen && (

                      <motion.div

                        initial={{
                          opacity:0,
                          height:0,
                        }}

                        animate={{
                          opacity:1,
                          height:"auto",
                        }}

                        className="
                          px-5
                          pb-5
                          text-gray-600
                          leading-7
                        "

                      >

                        {item.answer}

                      </motion.div>

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

}