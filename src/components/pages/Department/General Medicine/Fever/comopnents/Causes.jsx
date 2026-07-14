import React from "react";
import {
  Activity,
  Bug,
  ShieldAlert,
  HeartPulse,
  Thermometer,
  Stethoscope,
} from "lucide-react";


const Causes = () => {


  const causes = [
    {
      icon: Bug,
      title: "Viral Infection",
      description:
        "Most fevers are caused by viral infections such as flu, cold, and other common viral illnesses.",
    },
    {
      icon: Activity,
      title: "Bacterial Infection",
      description:
        "Bacterial infections can trigger fever when the body's immune system responds to harmful bacteria.",
    },
    {
      icon: ShieldAlert,
      title: "Weak Immune System",
      description:
        "A weakened immune system can increase the risk of infections that may cause fever.",
    },
    {
      icon: HeartPulse,
      title: "Inflammation",
      description:
        "Certain inflammatory conditions can increase body temperature and lead to fever.",
    },
    {
      icon: Thermometer,
      title: "Seasonal Illness",
      description:
        "Changes in weather and seasonal infections may contribute to fever symptoms.",
    },
    {
      icon: Stethoscope,
      title: "Other Medical Conditions",
      description:
        "Some underlying health conditions may cause persistent or recurring fever.",
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
            inline-flex
            items-center
            gap-2
            bg-red-100
            text-red-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">

            <Thermometer size={16}/>
            Fever Causes

          </span>





          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            Common Causes of Fever

          </h2>





          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">

            Fever can happen due to infections, immune responses, and
            different health conditions.

          </p>



        </div>








        {/* Cards */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">


          {
            causes.map((item,index)=>{


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
                    bg-red-100
                    text-red-600
                    flex
                    items-center
                    justify-center
                    group-hover:bg-red-600
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
          bg-red-600
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

            Identify The Cause Early

          </h3>




          <p className="
            mt-3
            text-red-100
            leading-relaxed
          ">

            Proper diagnosis helps doctors find the exact cause of fever
            and provide the right treatment.

          </p>



        </div>



      </div>


    </section>
  );
};


export default Causes;