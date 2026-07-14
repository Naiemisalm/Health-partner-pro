import React from "react";
import {
  Eye,
  Moon,
  Sun,
  Palette,
  Glasses,
  AlertCircle,
} from "lucide-react";

const Symptoms = () => {

  const symptoms = [
    {
      icon: Eye,
      title: "Blurred Vision",
      description:
        "Cataract can gradually cause blurry vision and make it difficult to see clearly.",
    },
    {
      icon: Moon,
      title: "Difficulty Seeing at Night",
      description:
        "Difficulty seeing in low light conditions or at night with reduced vision clarity.",
    },
    {
      icon: Sun,
      title: "Light Glare",
      description:
        "Bright lights or car headlights may cause excessive glare and discomfort.",
    },
    {
      icon: Palette,
      title: "Faded Colors",
      description:
        "Colors may appear less bright and everything may look dull or faded.",
    },
    {
      icon: Glasses,
      title: "Frequent Prescription Changes",
      description:
        "Frequent changes in eyeglass prescription may be required due to vision changes.",
    },
    {
      icon: AlertCircle,
      title: "Reduced Vision",
      description:
        "Vision may become weaker gradually as Cataract progresses over time.",
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
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Eye size={16}/>
            Cataract Symptoms
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Common Symptoms of Cataract
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Cataract symptoms may develop gradually over time. Early diagnosis
            helps in getting the right treatment at the right time.
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


          {symptoms.map((item, index) => {

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
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-blue-600
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









        {/* Bottom Banner */}
        <div className="
          mt-12
          bg-blue-600
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
            Get Your Eyes Checked When Vision Changes
          </h3>



          <p className="
            mt-3
            text-blue-100
            leading-relaxed
          ">
            Early detection of Cataract allows timely treatment and helps
            maintain better vision quality.
          </p>


        </div>


      </div>


    </section>
  );
};

export default Symptoms;