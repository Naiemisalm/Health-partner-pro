import React from "react";
import {
  Droplets,
  Weight,
  Eye,
  Activity,
  Utensils,
  AlertCircle,
} from "lucide-react";


const Symptoms = () => {


  const symptoms = [

    {
      icon: Droplets,
      title: "Frequent Urination",
      description:
        "Increased blood sugar levels can cause frequent urination, especially during night.",
    },

    {
      icon: Utensils,
      title: "Increased Hunger",
      description:
        "Diabetes can make the body unable to use glucose properly, causing constant hunger.",
    },

    {
      icon: Droplets,
      title: "Excessive Thirst",
      description:
        "High blood glucose levels may lead to increased thirst and dehydration.",
    },

    {
      icon: Weight,
      title: "Unexplained Weight Loss",
      description:
        "Sudden weight loss may occur when the body cannot use glucose for energy.",
    },

    {
      icon: Eye,
      title: "Blurred Vision",
      description:
        "Changes in blood sugar levels can affect the eye lens and cause blurry vision.",
    },

    {
      icon: Activity,
      title: "Fatigue & Weakness",
      description:
        "Low energy levels and tiredness are common symptoms of uncontrolled diabetes.",
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
            bg-red-100
            text-red-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">

            <AlertCircle size={16}/>
            Diabetes Symptoms

          </span>







          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            Common Symptoms of Diabetes

          </h2>








          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">

            Recognizing diabetes symptoms early can help in getting timely
            diagnosis and proper treatment.

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
          symptoms.map((item,index)=>{


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

            Early Detection Matters

          </h3>





          <p className="
            mt-3
            text-red-100
            leading-relaxed
          ">

            If you notice diabetes symptoms, consult a healthcare professional
            for proper testing and management.

          </p>



        </div>



      </div>


    </section>

  );

};


export default Symptoms;