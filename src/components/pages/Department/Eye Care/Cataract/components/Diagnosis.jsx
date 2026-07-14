import React from "react";
import {
  Eye,
  Scan,
  Microscope,
  ClipboardCheck,
  SearchCheck,
  Stethoscope,
} from "lucide-react";

const Diagnosis = () => {

  const diagnosisSteps = [
    {
      icon: Eye,
      title: "Vision Test",
      description:
        "A Visual Acuity Test is performed to evaluate how much your vision has decreased.",
    },
    {
      icon: Microscope,
      title: "Slit Lamp Examination",
      description:
        "A specialized microscope is used to examine the eye lens and other eye structures in detail.",
    },
    {
      icon: Scan,
      title: "Eye Examination",
      description:
        "A complete eye examination is performed to evaluate eye health and identify the condition of cataract.",
    },
    {
      icon: SearchCheck,
      title: "Lens Evaluation",
      description:
        "The doctor evaluates how cloudy the natural lens has become and how it affects vision.",
    },
    {
      icon: ClipboardCheck,
      title: "Medical History Review",
      description:
        "Previous eye problems, medication history, and other health information are reviewed.",
    },
    {
      icon: Stethoscope,
      title: "Specialist Consultation",
      description:
        "An experienced ophthalmologist reviews the test results and creates a suitable treatment plan.",
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

      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="
          max-w-3xl
          mx-auto
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
            <ClipboardCheck size={16}/>
            Cataract Diagnosis
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            How is Cataract Diagnosed?
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Cataract is diagnosed through advanced eye examinations and expert
            evaluation to determine the condition and create the right
            treatment plan.
          </p>

        </div>







        {/* Diagnosis Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">


          {diagnosisSteps.map((item,index)=>{

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
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-green-600
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
                  leading-relaxed
                ">
                  {item.description}
                </p>


              </div>

            );

          })}


        </div>








        {/* Bottom Info */}
        <div className="
          mt-12
          bg-green-600
          rounded-3xl
          p-6
          sm:p-8
          text-white
          text-center
        ">


          <h3 className="
            text-2xl
            font-bold
          ">
            Do Not Ignore Vision Problems
          </h3>



          <p className="
            mt-3
            text-green-100
            leading-relaxed
          ">
            If you notice any changes in your vision, consult an eye specialist
            early for proper diagnosis and treatment.
          </p>


        </div>


      </div>

    </section>
  );
};

export default Diagnosis;