import React from "react";
import {
  Ambulance,
  Pill,
  HeartPulse,
  Accessibility,
  Brain,
  ShieldCheck,
} from "lucide-react";

const Treatment = () => {

  const treatments = [
    {
      icon: Ambulance,
      title: "Emergency Stroke Care",
      description:
        "Immediate medical attention is provided to stabilize the patient and reduce brain damage.",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Doctors may prescribe medicines to prevent blood clots and manage stroke-related conditions.",
    },
    {
      icon: Brain,
      title: "Neurological Treatment",
      description:
        "Specialized care focuses on restoring brain function and preventing future complications.",
    },
    {
      icon: Accessibility,
      title: "Rehabilitation Therapy",
      description:
        "Physical, speech and occupational therapies help patients regain daily abilities.",
    },
  ];


  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">


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
            <HeartPulse size={16}/>
            Stroke Treatment
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Comprehensive Stroke Treatment & Recovery
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Our multidisciplinary neurology team provides advanced treatment
            and rehabilitation plans based on each patient's condition.
          </p>


        </div>





        {/* Treatment Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


          {treatments.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                  group
                  bg-gray-50
                  rounded-3xl
                  p-6
                  border
                  border-gray-100
                  hover:bg-white
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >


                {/* Icon */}
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
                  text-sm
                  leading-relaxed
                ">
                  {item.description}
                </p>



              </div>

            );

          })}


        </div>






        {/* Recovery Banner */}
        <div className="
          mt-14
          bg-gradient-to-r
          from-green-600
          to-emerald-600
          rounded-3xl
          p-6
          sm:p-10
          text-white
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        ">


          <div>

            <div className="
              flex
              items-center
              gap-3
            ">

              <div className="
                w-12
                h-12
                bg-white/20
                rounded-xl
                flex
                items-center
                justify-center
              ">
                <ShieldCheck size={28}/>
              </div>


              <h3 className="
                text-2xl
                sm:text-3xl
                font-bold
              ">
                Recovery & Long-Term Care
              </h3>

            </div>



            <p className="
              mt-4
              text-green-100
              max-w-2xl
            ">
              Continuous monitoring, lifestyle changes and rehabilitation can
              help improve recovery and reduce the risk of another stroke.
            </p>


          </div>



          <button className="
            bg-white
            text-green-600
            px-7
            py-3.5
            rounded-xl
            font-semibold
            hover:bg-green-50
            transition
            whitespace-nowrap
          ">
            Get Expert Advice
          </button>


        </div>


      </div>


    </section>
  );
};

export default Treatment;