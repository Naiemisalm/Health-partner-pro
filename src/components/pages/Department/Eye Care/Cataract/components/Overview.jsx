import React from "react";
import {
  Eye,
  CircleDot,
  Scan,
  Stethoscope,
} from "lucide-react";

const Overview = () => {

  const highlights = [
    {
      icon: Eye,
      title: "Vision Problem",
      description:
        "Cataract causes clouding of the natural eye lens, which can result in blurry and unclear vision.",
    },
    {
      icon: CircleDot,
      title: "Lens Clouding",
      description:
        "The clear lens of the eye gradually becomes cloudy and blocks proper light entry into the eye.",
    },
    {
      icon: Scan,
      title: "Early Detection",
      description:
        "Regular eye examinations help detect Cataract early and allow proper treatment at the right time.",
    },
    {
      icon: Stethoscope,
      title: "Expert Treatment",
      description:
        "Experienced ophthalmologists provide advanced diagnosis and personalized treatment plans.",
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
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Eye size={16}/>
            Cataract Overview
          </span>




          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Learn More About Cataract
          </h2>




          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Cataract is a condition where the natural lens of the eye becomes
            cloudy, causing gradual vision problems.
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


          {/* Left Content */}
          <div>


            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
            ">
              What is Cataract?
            </h3>



            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              Cataract is a condition where the natural clear lens of the eye
              gradually becomes cloudy. This prevents light from entering the
              eye properly and causes blurry vision.
            </p>




            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              With modern Cataract Surgery and advanced Intraocular Lens (IOL)
              technology, most patients can regain clear vision safely.
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
              Consult Eye Specialist
            </button>


          </div>












          {/* Cards */}
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
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    group-hover:bg-blue-600
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

            })}


          </div>


        </div>


      </div>


    </section>
  );
};

export default Overview;