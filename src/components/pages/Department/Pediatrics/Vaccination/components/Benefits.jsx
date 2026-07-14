import React from "react";
import {
  ShieldCheck,
  HeartPulse,
  Baby,
  Stethoscope,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Benefits = () => {

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Disease Protection",
      description:
        "Vaccines help protect children from serious and preventable infectious diseases.",
    },
    {
      icon: HeartPulse,
      title: "Strong Immunity",
      description:
        "Vaccination strengthens the immune system and prepares the body to fight infections.",
    },
    {
      icon: Baby,
      title: "Healthy Growth",
      description:
        "Proper immunization supports safe growth and development during childhood.",
    },
    {
      icon: Stethoscope,
      title: "Expert Pediatric Care",
      description:
        "Vaccines are provided under the supervision of experienced child specialists.",
    },
  ];


  const points = [
    "Protects against life-threatening diseases",
    "Safe and scientifically tested vaccines",
    "Supports healthy childhood development",
    "Reduces risk of serious complications",
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
            Vaccination Benefits
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Benefits of Child Vaccination
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-lg
            leading-relaxed
          ">
            Vaccination plays an important role in protecting children from
            preventable diseases and ensuring a healthier future.
          </p>


        </div>





        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {
            benefits.map((item,index)=>{

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
                    text-sm
                    leading-relaxed
                  ">
                    {item.description}
                  </p>


                </div>

              );

            })
          }


        </div>






        {/* Benefits List */}
        <div className="
          mt-14
          bg-gradient-to-r
          from-sky-600
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
              Why Vaccination Is Important?
            </h3>


            <p className="
              mt-3
              text-sky-100
              leading-relaxed
            ">
              Timely vaccination gives children essential protection and helps
              build a healthier community.
            </p>

          </div>





          <div className="space-y-4">

            {
              points.map((point,index)=>(

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
                    {point}
                  </p>

                </div>

              ))
            }

          </div>


        </div>


      </div>

    </section>
  );
};

export default Benefits;