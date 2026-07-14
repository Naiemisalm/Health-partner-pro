import React from "react";
import {
  Eye,
  Microscope,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const Treatment = () => {

  const treatments = [
    {
      icon: Microscope,
      title: "Phaco Cataract Surgery",
      description:
        "Using advanced Phaco technology, the cloudy lens is removed through a small incision and replaced with a new artificial lens.",
    },
    {
      icon: Eye,
      title: "Intraocular Lens (IOL)",
      description:
        "An advanced artificial lens (IOL) is placed instead of the natural lens to restore clear vision.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Advanced Procedure",
      description:
        "Modern technology and experienced surgeons ensure safe and effective Cataract Surgery.",
    },
    {
      icon: HeartPulse,
      title: "Post Surgery Care",
      description:
        "Regular follow-ups, prescribed medications, and proper eye care guidance are provided after surgery.",
    },
  ];



  const benefits = [
    "Helps improve blurry vision",
    "Improves ability to perform daily activities",
    "Faster recovery with modern technology",
    "Helps maintain better long-term vision",
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
            bg-purple-100
            text-purple-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Sparkles size={16}/>
            Cataract Treatment
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Modern Treatment Methods for Cataract
          </h2>




          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Based on the patient's eye condition, specialists select the most
            suitable treatment approach for effective results.
          </p>


        </div>









        {/* Treatment Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


          {treatments.map((item,index)=>{

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
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-purple-600
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
                  text-sm
                ">
                  {item.description}
                </p>


              </div>

            );

          })}


        </div>









        {/* Benefits Section */}
        <div className="
          mt-14
          bg-gradient-to-r
          from-blue-600
          to-cyan-600
          rounded-3xl
          p-6
          sm:p-10
          text-white
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          items-center
        ">



          <div>


            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
            ">
              Benefits of Cataract Surgery
            </h3>



            <p className="
              mt-3
              text-blue-100
              leading-relaxed
            ">
              With proper treatment, patients can regain clear vision and
              return to their normal daily activities.
            </p>


          </div>






          <div className="space-y-4">


            {benefits.map((item,index)=>(

              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <CheckCircle2
                  size={22}
                  className="text-green-300"
                />

                <p>
                  {item}
                </p>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
};

export default Treatment;