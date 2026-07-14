import React from "react";
import {
  Calendar,
  Droplets,
  ShieldAlert,
  Sun,
  Pill,
  EyeOff,
} from "lucide-react";

const RiskFactors = () => {

  const riskFactors = [
    {
      icon: Calendar,
      title: "Aging",
      description:
        "As people age, changes occur in the natural lens of the eye, increasing the risk of developing Cataract.",
    },
    {
      icon: Droplets,
      title: "Diabetes",
      description:
        "People with diabetes may have a higher risk of Cataract due to changes in the eye lens.",
    },
    {
      icon: ShieldAlert,
      title: "Eye Injury",
      description:
        "Severe eye injuries or previous eye surgeries can increase the possibility of developing Cataract.",
    },
    {
      icon: Sun,
      title: "Excessive UV Exposure",
      description:
        "Long-term exposure to ultraviolet rays from the sun can damage the eye lens and increase Cataract risk.",
    },
    {
      icon: Pill,
      title: "Steroid Use",
      description:
        "Long-term use of certain steroid medications may increase the risk of Cataract formation.",
    },
    {
      icon: EyeOff,
      title: "Other Eye Conditions",
      description:
        "Some long-term eye diseases can increase the risk of developing Cataract.",
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
            bg-orange-100
            text-orange-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <ShieldAlert size={16}/>
            Risk Factors
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Risk Factors of Cataract
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Certain age-related changes, health conditions, and lifestyle
            factors can increase the chance of developing Cataract.
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


          {riskFactors.map((item,index)=>{

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
                  bg-orange-100
                  text-orange-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-orange-600
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









        {/* Bottom Alert */}
        <div className="
          mt-12
          bg-orange-500
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
            Schedule Regular Eye Checkups
          </h3>



          <p className="
            mt-3
            text-orange-100
          ">
            Regular eye examinations, especially with increasing age, help
            detect Cataract early and ensure timely treatment.
          </p>


        </div>


      </div>


    </section>
  );
};

export default RiskFactors;