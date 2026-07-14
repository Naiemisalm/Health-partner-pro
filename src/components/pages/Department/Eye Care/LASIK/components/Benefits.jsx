import React from "react";
import {
  Eye,
  Glasses,
  Clock,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";


const Benefits = () => {


  const benefits = [
    {
      icon: Eye,
      title: "Clear Vision",
      description:
        "LASIK helps correct refractive errors and provides clearer vision without depending on glasses or contact lenses.",
    },
    {
      icon: Glasses,
      title: "Less Dependence on Glasses",
      description:
        "Many patients can reduce or eliminate their need for glasses after successful LASIK surgery.",
    },
    {
      icon: Clock,
      title: "Quick Recovery",
      description:
        "Most patients experience a fast recovery and can return to normal activities within a short time.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Procedure",
      description:
        "Advanced laser technology and expert surgeons make LASIK a safe and effective vision correction option.",
    },
    {
      icon: Smile,
      title: "Improved Lifestyle",
      description:
        "Better vision can improve daily activities, sports, travel, and overall quality of life.",
    },
    {
      icon: Sparkles,
      title: "Long Lasting Results",
      description:
        "LASIK provides long-term vision correction for suitable candidates.",
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

            <Sparkles size={16}/>
            LASIK Benefits

          </span>





          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            Benefits of LASIK Eye Surgery

          </h2>





          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">

            LASIK offers advanced vision correction with faster recovery,
            improved eyesight, and greater freedom from glasses.

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
            benefits.map((item,index)=>{


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


            })
          }



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

            Experience Freedom From Glasses

          </h3>




          <p className="
            mt-3
            text-blue-100
          ">

            Consult an experienced eye specialist to know if LASIK is suitable
            for your vision needs.

          </p>



        </div>



      </div>


    </section>

  );

};


export default Benefits;