import React from "react";
import {
  Users,
  Weight,
  Activity,
  Utensils,
  HeartPulse,
  ShieldAlert,
} from "lucide-react";


const Causes = () => {


  const causes = [

    {
      icon: Users,
      title: "Family History",
      description:
        "People with a family history of diabetes may have a higher risk of developing the condition.",
    },

    {
      icon: Weight,
      title: "Overweight & Obesity",
      description:
        "Excess body weight can increase insulin resistance and raise the risk of diabetes.",
    },

    {
      icon: Activity,
      title: "Lack of Physical Activity",
      description:
        "A sedentary lifestyle can affect insulin sensitivity and increase diabetes risk.",
    },

    {
      icon: Utensils,
      title: "Unhealthy Diet",
      description:
        "High sugar intake and unhealthy eating habits may contribute to diabetes development.",
    },

    {
      icon: HeartPulse,
      title: "High Blood Pressure",
      description:
        "Hypertension and cardiovascular problems are often associated with diabetes risk.",
    },

    {
      icon: ShieldAlert,
      title: "Age & Health Factors",
      description:
        "Increasing age and certain health conditions can increase the possibility of diabetes.",
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
            bg-orange-100
            text-orange-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">

            <ShieldAlert size={16}/>
            Diabetes Risk Factors

          </span>








          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            Causes & Risk Factors of Diabetes

          </h2>








          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">

            Several lifestyle, genetic, and health-related factors can increase
            the risk of developing diabetes.

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
          causes.map((item,index)=>{


            const Icon = item.icon;


            return (


              <div
                key={index}
                className="
                  group
                  bg-gray-50
                  rounded-3xl
                  p-6
                  border
                  border-gray-100
                  hover:bg-white
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


          })
        }




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

            Maintain a Healthy Lifestyle

          </h3>





          <p className="
            mt-3
            text-orange-100
            leading-relaxed
          ">

            Regular exercise, balanced nutrition, and routine health checkups
            can help reduce diabetes risk.

          </p>



        </div>



      </div>


    </section>

  );

};


export default Causes;