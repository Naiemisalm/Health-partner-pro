import React from "react";
import {
  Activity,
  HeartPulse,
  Droplets,
  Stethoscope,
} from "lucide-react";


const Overview = () => {


  const highlights = [
    {
      icon: Activity,
      title: "Blood Sugar Control",
      description:
        "Diabetes affects how the body manages blood glucose levels, requiring proper monitoring and care.",
    },
    {
      icon: Droplets,
      title: "Glucose Management",
      description:
        "Regular blood sugar monitoring helps maintain healthy glucose levels and prevent complications.",
    },
    {
      icon: HeartPulse,
      title: "Healthy Lifestyle",
      description:
        "Balanced diet, physical activity, and proper treatment help improve diabetes management.",
    },
    {
      icon: Stethoscope,
      title: "Expert Diabetes Care",
      description:
        "Experienced doctors provide personalized treatment plans based on each patient's condition.",
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
            bg-green-100
            text-green-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">

            <Activity size={16}/>
            Diabetes Overview

          </span>






          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            Understanding Diabetes

          </h2>







          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">

            Diabetes is a chronic health condition where blood sugar levels
            become higher than normal due to problems with insulin production
            or insulin usage.

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

              What is Diabetes?

            </h3>






            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">

              Diabetes occurs when the body cannot properly produce or use
              insulin, causing increased glucose levels in the blood.
              Without proper management, it can affect different organs.

            </p>







            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">

              With regular monitoring, healthy lifestyle choices, and
              appropriate medical treatment, people with diabetes can maintain
              a healthy and active life.

            </p>







            <button className="
              mt-6
              bg-green-600
              hover:bg-green-700
              text-white
              px-7
              py-3
              rounded-xl
              font-semibold
              transition
            ">

              Consult Diabetes Specialist

            </button>



          </div>









          {/* Cards */}

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">



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



                    <div className="
                      w-12
                      h-12
                      rounded-xl
                      bg-green-100
                      text-green-600
                      flex
                      items-center
                      justify-center
                      group-hover:bg-green-600
                      group-hover:text-white
                      transition
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


              })
            }



          </div>





        </div>



      </div>


    </section>

  );

};


export default Overview;