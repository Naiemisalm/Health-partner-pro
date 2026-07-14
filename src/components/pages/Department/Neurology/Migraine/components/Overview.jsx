import React from "react";
import {
  Brain,
  Zap,
  Activity,
  Stethoscope,
} from "lucide-react";

const Overview = () => {

  const highlights = [
    {
      icon: Brain,
      title: "Neurological Condition",
      description:
        "Migraine is a neurological condition that can cause recurring headaches and affect daily activities.",
    },
    {
      icon: Zap,
      title: "Severe Head Pain",
      description:
        "Migraine attacks may cause intense pain, sensitivity to light, sound and other symptoms.",
    },
    {
      icon: Activity,
      title: "Lifestyle Impact",
      description:
        "Frequent migraine episodes can affect work, sleep, concentration and overall quality of life.",
    },
    {
      icon: Stethoscope,
      title: "Expert Management",
      description:
        "Our neurologists provide personalized diagnosis and treatment plans for better migraine control.",
    },
  ];


  return (
    <section className="
      py-16
      sm:py-20
      bg-white
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
            inline-block
            bg-indigo-100
            text-indigo-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            Migraine Overview
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Understanding Migraine & Its Care
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Migraine is a common neurological disorder that causes repeated
            headache attacks. Proper diagnosis and treatment can help reduce
            symptoms and improve daily life.
          </p>


        </div>





        {/* Main Content */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
        ">



          {/* Text */}
          <div>


            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
            ">
              What is Migraine?
            </h3>



            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              Migraine is a neurological condition that causes moderate to
              severe headache episodes, often affecting one side of the head.
              It may occur with nausea, vomiting and sensitivity to light or
              sound.
            </p>



            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              With proper evaluation, lifestyle adjustments and medical
              treatment, migraine symptoms can be managed effectively.
            </p>




            <button className="
              mt-6
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              px-7
              py-3
              rounded-xl
              font-semibold
              transition
            ">
              Consult Neurologist
            </button>


          </div>







          {/* Cards */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">


            {highlights.map((item,index)=>{

              const Icon = item.icon;


              return (

                <div
                  key={index}
                  className="
                    bg-gray-50
                    border
                    border-gray-100
                    rounded-2xl
                    p-6
                    hover:bg-white
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >


                  <div className="
                    w-12
                    h-12
                    rounded-xl
                    bg-indigo-100
                    text-indigo-600
                    flex
                    items-center
                    justify-center
                  ">
                    <Icon size={26}/>
                  </div>




                  <h4 className="
                    mt-5
                    text-lg
                    font-bold
                    text-gray-900
                  ">
                    {item.title}
                  </h4>




                  <p className="
                    mt-2
                    text-sm
                    text-gray-600
                    leading-relaxed
                  ">
                    {item.description}
                  </p>



                </div>

              );

            })}


          </div>


        </div>


      </div>


    </section>
  );
};

export default Overview;