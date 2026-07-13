import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How do I know if I need heart surgery?",
    answer:
      "A cardiac specialist will evaluate your symptoms, medical history, test reports, and heart condition to determine whether surgery is the right treatment option.",
  },
  {
    question: "How long does heart surgery usually take?",
    answer:
      "The duration depends on the type of procedure. Most heart surgeries typically take several hours, followed by close monitoring in the ICU.",
  },
  {
    question: "What is the recovery time after heart surgery?",
    answer:
      "Recovery varies by patient and procedure. Many patients gradually return to normal activities within a few weeks with proper rehabilitation and follow-up care.",
  },
  {
    question: "Is heart surgery safe?",
    answer:
      "Modern heart surgery is highly advanced and safe when performed by experienced cardiac surgeons with proper hospital facilities.",
  },
  {
    question: "What tests are required before heart surgery?",
    answer:
      "Common tests include ECG, Echocardiogram, blood tests, chest X-ray, CT scan, and cardiac catheterization depending on the patient's condition.",
  },
  {
    question: "Can I consult a heart surgeon before deciding?",
    answer:
      "Yes. Consultation with a cardiac surgeon helps you understand your condition, available treatments, risks, and expected outcomes.",
  },
];


export default function FAQ(){

  const [active, setActive] = useState(null);


  return (

    <section className="bg-white py-20">

      <div className="mx-auto max-w-5xl px-6">


        {/* Heading */}

        <motion.div

          initial={{opacity:0,y:40}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:.6}}

          viewport={{once:true}}

          className="mb-14 text-center"

        >

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">

            FAQ

          </span>


          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">

            Frequently Asked Questions

          </h2>


          <p className="mt-5 text-lg text-slate-600">

            Find answers to common questions about heart surgery and cardiac care.

          </p>


        </motion.div>



        {/* Accordion */}

        <div className="space-y-5">


          {faqData.map((item,index)=>(


            <motion.div

              key={index}

              initial={{opacity:0,y:20}}

              whileInView={{opacity:1,y:0}}

              transition={{
                delay:index*.1
              }}

              viewport={{once:true}}

              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"

            >


              {/* Question */}

              <button

                onClick={()=>setActive(active===index ? null : index)}

                className="flex w-full items-center justify-between gap-4 p-6 text-left"

              >

                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">

                  {item.question}

                </h3>


                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">

                  {active===index ? (

                    <Minus size={20}/>

                  ) : (

                    <Plus size={20}/>

                  )}

                </div>


              </button>



              {/* Answer */}

              <AnimatePresence>


                {active===index && (

                  <motion.div

                    initial={{
                      height:0,
                      opacity:0
                    }}

                    animate={{
                      height:"auto",
                      opacity:1
                    }}

                    exit={{
                      height:0,
                      opacity:0
                    }}

                    transition={{
                      duration:.3
                    }}

                    className="overflow-hidden"

                  >

                    <p className="px-6 pb-6 leading-7 text-slate-600">

                      {item.answer}

                    </p>


                  </motion.div>

                )}


              </AnimatePresence>


            </motion.div>


          ))}


        </div>



      </div>

    </section>

  );

}