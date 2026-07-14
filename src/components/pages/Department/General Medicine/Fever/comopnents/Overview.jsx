import React from "react";
import {
  Thermometer,
  Stethoscope,
  SearchCheck,
  HeartPulse,
} from "lucide-react";


const Overview = () => {


  const highlights = [
    {
      icon: Thermometer,
      title: "High Temperature",
      description:
        "Fever occurs when body temperature rises above the normal range due to infection or other health conditions.",
    },
    {
      icon: SearchCheck,
      title: "Proper Diagnosis",
      description:
        "Finding the exact cause of fever helps doctors provide the right treatment and faster recovery.",
    },
    {
      icon: Stethoscope,
      title: "Medical Evaluation",
      description:
        "Experienced physicians evaluate symptoms, medical history, and required tests for accurate diagnosis.",
    },
    {
      icon: HeartPulse,
      title: "Complete Care",
      description:
        "Personalized treatment plans help patients recover safely with proper monitoring and guidance.",
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
            Fever Overview
          </span>





          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Understanding Fever & Treatment
          </h2>





          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Fever is a common health condition where body temperature increases,
            usually as a response to infection or illness.
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
              What is Fever?
            </h3>





            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              Fever is a temporary increase in body temperature that often
              occurs when the immune system fights against infections such as
              viral or bacterial illnesses.
            </p>





            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              Although mild fever may improve with rest and care, persistent or
              high fever requires proper medical evaluation to identify the
              underlying cause.
            </p>







            <button className="
              mt-6
              bg-red-600
              hover:bg-red-700
              text-white
              px-7
              py-3
              rounded-xl
              font-semibold
              transition
            ">
              Consult Physician
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
                      bg-red-100
                      text-red-600
                      flex
                      items-center
                      justify-center
                      group-hover:bg-red-600
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