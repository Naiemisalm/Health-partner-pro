import React from "react";
import {
  Thermometer,
  Headphones,
  Droplets,
  Moon,
  Activity,
  AlertCircle,
} from "lucide-react";


const Symptoms = () => {


  const symptoms = [
    {
      icon: Thermometer,
      title: "High Body Temperature",
      description:
        "A rise in body temperature is the most common symptom of fever.",
    },
    {
      icon: Headphones,
      title: "Headache",
      description:
        "Fever may cause headaches, pressure, and discomfort around the head.",
    },
    {
      icon: Droplets,
      title: "Sweating & Chills",
      description:
        "Patients may experience excessive sweating, chills, or feeling cold.",
    },
    {
      icon: Moon,
      title: "Fatigue & Weakness",
      description:
        "Fever can make the body tired and reduce daily activity levels.",
    },
    {
      icon: Activity,
      title: "Body Pain",
      description:
        "Muscle aches and joint pain may occur during fever episodes.",
    },
    {
      icon: AlertCircle,
      title: "Loss of Appetite",
      description:
        "Reduced appetite and general discomfort are common during fever.",
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
            <Thermometer size={16}/>
            Fever Symptoms
          </span>





          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Common Symptoms of Fever
          </h2>





          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Fever symptoms can vary depending on the underlying cause.
            Early recognition helps in getting proper medical care.
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
            Do Not Ignore Persistent Fever
          </h3>




          <p className="
            mt-3
            text-red-100
            leading-relaxed
          ">
            If fever continues for several days or becomes severe, consult a
            qualified physician for proper evaluation and treatment.
          </p>


        </div>



      </div>


    </section>
  );
};


export default Symptoms;