import React from "react";
import {
  Stethoscope,
  Pill,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";


const Treatment = () => {


  const treatments = [
    {
      icon: Stethoscope,
      title: "Doctor Consultation",
      description:
        "A physician evaluates the fever cause and provides the most suitable treatment plan based on symptoms and diagnosis.",
    },
    {
      icon: Pill,
      title: "Medication Support",
      description:
        "Appropriate medicines may be prescribed to reduce fever symptoms and treat underlying infections.",
    },
    {
      icon: HeartPulse,
      title: "Supportive Care",
      description:
        "Proper hydration, rest, and healthy care help the body recover faster during fever.",
    },
    {
      icon: ShieldCheck,
      title: "Preventive Guidance",
      description:
        "Doctors provide advice on infection prevention and maintaining better health.",
    },
  ];



  const benefits = [
    "Reduces fever discomfort and symptoms",
    "Helps identify and treat the root cause",
    "Provides safe recovery with medical guidance",
    "Improves overall health and wellbeing",
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
            <Sparkles size={16}/>
            Fever Treatment
          </span>





          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Modern Fever Treatment Approach
          </h2>





          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Treatment depends on the cause, severity, and overall health
            condition of the patient.
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


          {
            treatments.map((item,index)=>{


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
                    text-sm
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









        {/* Benefits */}

        <div className="
          mt-14
          bg-gradient-to-r
          from-red-600
          to-orange-600
          rounded-3xl
          p-6
          sm:p-10
          text-white
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          items-center
        ">


          <div>


            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
            ">
              Benefits of Proper Fever Treatment
            </h3>



            <p className="
              mt-3
              text-red-100
              leading-relaxed
            ">
              Timely medical care helps control symptoms and supports a safe
              and faster recovery.
            </p>


          </div>






          <div className="space-y-4">


            {
              benefits.map((item,index)=>(

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <CheckCircle2
                    size={22}
                    className="text-green-300"
                  />

                  <p>
                    {item}
                  </p>


                </div>

              ))
            }



          </div>



        </div>



      </div>


    </section>
  );
};


export default Treatment;