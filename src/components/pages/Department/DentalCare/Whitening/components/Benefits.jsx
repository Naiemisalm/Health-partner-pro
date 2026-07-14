import React from "react";
import {
  Smile,
  ShieldCheck,
  Zap,
  HeartPulse,
  Award,
  Sparkles,
} from "lucide-react";

const Benefits = () => {

  const benefits = [
    {
      icon: Smile,
      title: "Confident Smile",
      description:
        "Achieve a brighter smile that improves your confidence and overall appearance.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Treatment",
      description:
        "Professional whitening performed with dentist-approved methods for safety.",
    },
    {
      icon: Zap,
      title: "Fast Results",
      description:
        "See noticeable improvements with advanced whitening technology.",
    },
    {
      icon: HeartPulse,
      title: "Comfortable Experience",
      description:
        "Enjoy a gentle and comfortable whitening procedure with expert care.",
    },
    {
      icon: Award,
      title: "Expert Dentists",
      description:
        "Get treatment from experienced cosmetic dentistry specialists.",
    },
    {
      icon: Sparkles,
      title: "Long Lasting Brightness",
      description:
        "Maintain your beautiful smile with proper aftercare guidance.",
    },
  ];


  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">


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
            <Sparkles size={16}/>
            Why Choose Us
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Benefits of Professional Teeth Whitening
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Experience advanced dental care designed to give you a healthier,
            brighter and more confident smile.
          </p>


        </div>




        {/* Benefit Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          lg:gap-8
        ">


          {benefits.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-6
                  sm:p-8
                  border
                  border-gray-100
                  shadow-sm
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
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-blue-600
                  group-hover:text-white
                  transition
                  duration-300
                ">
                  <Icon size={30}/>
                </div>



                {/* Content */}
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



                {/* Accent */}
                <div className="
                  mt-6
                  w-10
                  h-1
                  bg-blue-600
                  rounded-full
                  group-hover:w-16
                  transition-all
                  duration-300
                "></div>


              </div>

            );

          })}


        </div>


      </div>


    </section>
  );
};

export default Benefits;