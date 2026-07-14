import React from "react";
import {
  Baby,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";


const Overview = () => {


  const highlights = [
    {
      icon: Baby,
      title: "Newborn Health",
      description:
        "Newborn babies require special care and regular monitoring to ensure healthy growth and development.",
    },
    {
      icon: HeartPulse,
      title: "Growth Monitoring",
      description:
        "Regular checkups help track baby's weight, feeding, immunity and overall physical development.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Baby Care",
      description:
        "Expert pediatric care provides a safe environment for newborn health and early protection.",
    },
    {
      icon: Stethoscope,
      title: "Expert Pediatric Support",
      description:
        "Experienced pediatricians provide guidance for newborn problems, nutrition and preventive care.",
    },
  ];



  return (

    <section
      className="
        py-16
        sm:py-20
        bg-white
        px-4
        sm:px-6
        lg:px-8
      "
    >


      <div className="max-w-7xl mx-auto">



        {/* Header */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-12
          "
        >


          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-pink-100
              text-pink-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            <Baby size={16}/>
            Newborn Care Overview
          </span>




          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
            "
          >
            Complete Care For Your Newborn Baby
          </h2>




          <p
            className="
              mt-4
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            Newborn care focuses on providing proper medical support,
            nutrition guidance and health monitoring during the early
            stages of a baby's life.
          </p>


        </div>









        {/* Main Content */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
          "
        >



          {/* Text */}

          <div>


            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-gray-900
              "
            >
              What is Newborn Care?
            </h3>




            <p
              className="
                mt-4
                text-gray-600
                leading-relaxed
              "
            >
              Newborn care is specialized medical care provided to babies
              immediately after birth and during the first few months of life.
              It helps identify health issues early and supports healthy growth.
            </p>





            <p
              className="
                mt-4
                text-gray-600
                leading-relaxed
              "
            >
              Proper feeding support, vaccination guidance, regular health
              assessments and pediatric consultation play an important role
              in ensuring a baby's healthy future.
            </p>






            <button
              className="
                mt-6
                bg-pink-600
                hover:bg-pink-700
                text-white
                px-7
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Consult Pediatrician
            </button>


          </div>









          {/* Cards */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
            "
          >


            {
              highlights.map((item,index)=>{

                const Icon = item.icon;


                return (

                  <div
                    key={index}
                    className="
                      group
                      bg-gray-50
                      rounded-2xl
                      p-6
                      border
                      border-gray-100
                      hover:bg-white
                      hover:shadow-xl
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >



                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-pink-100
                        text-pink-600
                        flex
                        items-center
                        justify-center
                        group-hover:bg-pink-600
                        group-hover:text-white
                        transition
                      "
                    >
                      <Icon size={26}/>
                    </div>






                    <h4
                      className="
                        mt-5
                        text-lg
                        font-bold
                        text-gray-900
                      "
                    >
                      {item.title}
                    </h4>





                    <p
                      className="
                        mt-2
                        text-sm
                        text-gray-600
                        leading-relaxed
                      "
                    >
                      {item.description}
                    </p>



                  </div>

                );

              })
            }


          </div>


        </div>


      </div>


    </section>

  );

};


export default Overview;