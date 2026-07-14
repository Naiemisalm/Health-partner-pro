import React from "react";
import {
  ScanLine,
  Brain,
  Activity,
  TestTube2,
  Stethoscope,
  ClipboardCheck,
} from "lucide-react";

const Diagnosis = () => {

  const diagnosisMethods = [
    {
      icon: ScanLine,
      title: "CT Scan",
      description:
        "A brain CT scan helps doctors quickly identify bleeding or other stroke-related changes in the brain.",
    },
    {
      icon: Brain,
      title: "MRI Brain",
      description:
        "MRI provides detailed images of brain tissue to detect affected areas and support accurate diagnosis.",
    },
    {
      icon: Activity,
      title: "Neurological Examination",
      description:
        "Doctors evaluate speech, movement, reflexes and other neurological functions.",
    },
    {
      icon: TestTube2,
      title: "Blood Tests",
      description:
        "Blood tests help identify conditions that may contribute to stroke risk and guide treatment decisions.",
    },
  ];


  const steps = [
    "Initial symptom evaluation",
    "Medical history and physical examination",
    "Brain imaging and laboratory tests",
    "Personalized treatment planning",
  ];


  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="
            inline-flex
            items-center
            gap-2
            bg-purple-100
            text-purple-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <ClipboardCheck size={16}/>
            Stroke Diagnosis
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Advanced Diagnostic Evaluation
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Accurate diagnosis helps our neurologists choose the right
            treatment approach for every stroke patient.
          </p>


        </div>





        {/* Diagnostic Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


          {diagnosisMethods.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-6
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >


                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-purple-600
                  group-hover:text-white
                  transition
                ">
                  <Icon size={30}/>
                </div>



                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-gray-900
                ">
                  {item.title}
                </h3>



                <p className="
                  mt-3
                  text-gray-600
                  text-sm
                  leading-relaxed
                ">
                  {item.description}
                </p>


              </div>

            );

          })}


        </div>





        {/* Process Section */}
        <div className="
          mt-14
          bg-white
          rounded-3xl
          p-6
          sm:p-10
          border
          border-gray-100
        ">


          <div className="
            flex
            items-center
            gap-3
            mb-8
          ">


            <div className="
              w-12
              h-12
              rounded-xl
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <Stethoscope size={26}/>
            </div>


            <h3 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              Diagnostic Process
            </h3>


          </div>




          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
          ">


            {steps.map((step,index)=>(

              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  bg-gray-50
                  rounded-xl
                  p-4
                "
              >

                <span className="
                  w-10
                  h-10
                  rounded-full
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  flex-shrink-0
                ">
                  {index + 1}
                </span>


                <p className="
                  text-gray-700
                  font-medium
                  text-sm
                ">
                  {step}
                </p>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
};

export default Diagnosis;
