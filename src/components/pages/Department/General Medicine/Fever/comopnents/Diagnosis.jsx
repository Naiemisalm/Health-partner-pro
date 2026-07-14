import React from "react";
import {
  Stethoscope,
  ClipboardCheck,
  Thermometer,
  Microscope,
  SearchCheck,
  FileText,
} from "lucide-react";


const Diagnosis = () => {


  const diagnosisSteps = [
    {
      icon: Stethoscope,
      title: "Physical Examination",
      description:
        "Doctor checks body temperature, symptoms, and overall health condition during examination.",
    },
    {
      icon: ClipboardCheck,
      title: "Medical History Review",
      description:
        "Previous illnesses, medications, and recent health problems are reviewed to identify possible causes.",
    },
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description:
        "Regular temperature checks help understand fever pattern and severity.",
    },
    {
      icon: Microscope,
      title: "Laboratory Tests",
      description:
        "Blood, urine, or other tests may be recommended to detect infections or underlying conditions.",
    },
    {
      icon: SearchCheck,
      title: "Cause Identification",
      description:
        "Doctors analyze symptoms and test results to determine the exact reason behind fever.",
    },
    {
      icon: FileText,
      title: "Treatment Planning",
      description:
        "Based on diagnosis results, a personalized treatment plan is prepared.",
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
            Fever Diagnosis
          </span>





          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            How Fever Is Diagnosed?
          </h2>





          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Doctors use physical examination, medical history, and necessary
            tests to identify the exact cause of fever.
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


          {
            diagnosisSteps.map((item,index)=>{


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


            })
          }



        </div>








        {/* Bottom Banner */}

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
            Accurate Diagnosis Leads To Better Recovery
          </h3>




          <p className="
            mt-3
            text-green-100
            leading-relaxed
          ">
            Consulting a physician helps identify serious causes of fever and
            ensures proper medical care at the right time.
          </p>


        </div>



      </div>


    </section>
  );
};


export default Diagnosis;