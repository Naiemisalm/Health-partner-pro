import React from "react";
import {
  ClipboardCheck,
  SearchCheck,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const ProcedureSteps = () => {

  const steps = [
    {
      icon: SearchCheck,
      number: "01",
      title: "Dental Consultation",
      description:
        "Our dentist examines your teeth and evaluates your oral health before starting the whitening process.",
    },
    {
      icon: ClipboardCheck,
      number: "02",
      title: "Smile Assessment",
      description:
        "We check your current tooth shade and create a personalized whitening plan for your smile.",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Whitening Treatment",
      description:
        "Advanced whitening technology is applied carefully to achieve a brighter and cleaner smile.",
    },
    {
      icon: HeartHandshake,
      number: "04",
      title: "Aftercare Guidance",
      description:
        "Receive expert advice and maintenance tips to keep your smile brighter for longer.",
    },
  ];


  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

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
            Treatment Process
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            How Our Whitening Process Works
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            A simple and safe step-by-step process designed to give you a
            confident and brighter smile.
          </p>

        </div>




        {/* Steps */}
        <div className="
          relative
          max-w-5xl
          mx-auto
        ">


          {/* Desktop Line */}
          <div className="
            hidden
            lg:block
            absolute
            top-16
            left-0
            right-0
            h-1
            bg-blue-100
          "></div>



          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            relative
          ">


            {steps.map((step, index)=>{

              const Icon = step.icon;


              return (

                <div
                  key={index}
                  className="
                    group
                    bg-gray-50
                    rounded-3xl
                    p-6
                    text-center
                    border
                    border-gray-100
                    hover:bg-white
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >


                  {/* Number + Icon */}
                  <div className="
                    relative
                    mx-auto
                    w-20
                    h-20
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    text-white
                    shadow-lg
                    z-10
                    group-hover:scale-110
                    transition
                  ">

                    <Icon size={34}/>


                    <span className="
                      absolute
                      -top-2
                      -right-2
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      text-blue-600
                      text-sm
                      font-bold
                      flex
                      items-center
                      justify-center
                      shadow
                    ">
                      {step.number}
                    </span>


                  </div>




                  <h3 className="
                    mt-6
                    text-xl
                    font-bold
                    text-gray-900
                  ">
                    {step.title}
                  </h3>



                  <p className="
                    mt-3
                    text-gray-600
                    leading-relaxed
                    text-sm
                    sm:text-base
                  ">
                    {step.description}
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

export default ProcedureSteps;