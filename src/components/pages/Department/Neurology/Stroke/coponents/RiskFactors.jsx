import React from "react";
import {
  HeartPulse,
  Droplets,
  Cigarette,
  Activity,
  Weight,
  UserRound,
  ShieldAlert,
} from "lucide-react";

const RiskFactors = () => {

  const riskFactors = [
    {
      icon: HeartPulse,
      title: "High Blood Pressure",
      description:
        "Uncontrolled hypertension is one of the major causes that increases stroke risk.",
    },
    {
      icon: Droplets,
      title: "Diabetes",
      description:
        "High blood sugar levels can damage blood vessels and increase stroke chances.",
    },
    {
      icon: Activity,
      title: "High Cholesterol",
      description:
        "Excess cholesterol can lead to blocked arteries and reduce blood flow to the brain.",
    },
    {
      icon: Cigarette,
      title: "Smoking",
      description:
        "Smoking damages blood vessels and significantly increases stroke risk.",
    },
    {
      icon: Weight,
      title: "Obesity",
      description:
        "Excess weight can contribute to conditions that increase stroke possibility.",
    },
    {
      icon: UserRound,
      title: "Age & Family History",
      description:
        "Risk can increase with age and certain genetic health conditions.",
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
            bg-orange-100
            text-orange-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <ShieldAlert size={16}/>
            Stroke Prevention
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Stroke Risk Factors
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Understanding risk factors can help you take preventive steps and
            maintain better brain and heart health.
          </p>


        </div>





        {/* Risk Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          lg:gap-8
        ">


          {riskFactors.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                  group
                  bg-gray-50
                  rounded-3xl
                  p-6
                  sm:p-8
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



                <div className="
                  mt-6
                  h-1
                  w-10
                  bg-orange-500
                  rounded-full
                  group-hover:w-16
                  transition-all
                "></div>


              </div>

            );

          })}


        </div>





        {/* Prevention Banner */}
        <div className="
          mt-12
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
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

            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
            ">
              Reduce Your Stroke Risk
            </h3>


            <p className="
              mt-3
              text-blue-100
            ">
              Regular checkups, healthy lifestyle choices and proper medical
              guidance can help prevent stroke.
            </p>


          </div>



          <button className="
            bg-white
            text-blue-600
            px-7
            py-3.5
            rounded-xl
            font-semibold
            hover:bg-blue-50
            transition
          ">
            Consult Neurologist
          </button>


        </div>


      </div>


    </section>
  );
};

export default RiskFactors;