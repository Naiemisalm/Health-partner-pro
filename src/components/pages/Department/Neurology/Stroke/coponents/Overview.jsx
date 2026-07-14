import React from "react";
import {
  Brain,
  Activity,
  Clock3,
  Stethoscope,
} from "lucide-react";

const Overview = () => {

  const highlights = [
    {
      icon: Brain,
      title: "Brain Disorder",
      description:
        "Stroke occurs when blood flow to the brain is interrupted or reduced, affecting brain function.",
    },
    {
      icon: Activity,
      title: "Emergency Condition",
      description:
        "Quick diagnosis and treatment are important to reduce complications and improve recovery.",
    },
    {
      icon: Clock3,
      title: "Early Treatment",
      description:
        "Timely medical care can help protect brain cells and improve patient outcomes.",
    },
    {
      icon: Stethoscope,
      title: "Expert Care",
      description:
        "Our neurologists provide advanced stroke diagnosis, treatment and rehabilitation support.",
    },
  ];


  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        <div className="
          max-w-3xl
          mx-auto
          text-center
          mb-12
        ">


          <span className="
            inline-block
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            Stroke Overview
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Understanding Stroke & Its Care
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Stroke is a serious neurological condition that requires immediate
            medical attention. Our specialized stroke care team focuses on
            rapid diagnosis, advanced treatment and complete recovery support.
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


          {/* Left Text */}
          <div>


            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
            ">
              What is a Stroke?
            </h3>


            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              A stroke happens when the blood supply to a part of the brain is
              blocked or when a blood vessel in the brain bursts. This can
              damage brain cells and affect movement, speech, memory and other
              body functions.
            </p>


            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              Our multidisciplinary team provides comprehensive stroke care,
              including emergency management, neurological evaluation,
              rehabilitation and long-term prevention planning.
            </p>



            <button className="
              mt-6
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-7
              py-3
              rounded-xl
              font-semibold
              transition
            ">
              Learn More
            </button>


          </div>





          {/* Right Cards */}
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
                    bg-blue-100
                    text-blue-600
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