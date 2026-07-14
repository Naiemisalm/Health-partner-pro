import React from "react";
import {
  Baby,
  Syringe,
  Stethoscope,
  HeartPulse,
  Apple,
  Activity,
} from "lucide-react";


const Services = () => {


  const services = [
    {
      icon: Baby,
      title: "Newborn Health Checkup",
      description:
        "Complete newborn examination including physical assessment, growth monitoring and early health evaluation.",
    },
    {
      icon: Syringe,
      title: "Vaccination Guidance",
      description:
        "Proper vaccination schedule guidance and preventive healthcare support for newborn babies.",
    },
    {
      icon: Stethoscope,
      title: "Pediatric Consultation",
      description:
        "Expert consultation for newborn health problems, feeding issues and medical concerns.",
    },
    {
      icon: HeartPulse,
      title: "NICU & Critical Care Support",
      description:
        "Specialized care support for premature babies and newborns requiring close monitoring.",
    },
    {
      icon: Apple,
      title: "Feeding & Nutrition Advice",
      description:
        "Professional guidance about breastfeeding, nutrition and healthy weight gain.",
    },
    {
      icon: Activity,
      title: "Growth & Development Monitoring",
      description:
        "Regular assessment of baby's physical growth and developmental milestones.",
    },
  ];



  return (

    <section
      className="
        py-16
        sm:py-20
        bg-gray-50
        px-4
        sm:px-6
        lg:px-8
      "
    >


      <div className="max-w-7xl mx-auto">





        {/* Header */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-12
          "
        >


          <span
            className="
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
            "
          >
            <Baby size={16}/>
            Newborn Care Services
          </span>





          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
            "
          >
            Complete Medical Services For Newborns
          </h2>





          <p
            className="
              mt-4
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            Our pediatric team provides comprehensive newborn healthcare
            services from birth care to early childhood support.
          </p>


        </div>









        {/* Service Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >



          {
            services.map((item,index)=>{

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



                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-pink-100
                      text-pink-600
                      flex
                      items-center
                      justify-center
                      group-hover:bg-pink-600
                      group-hover:text-white
                      transition
                    "
                  >
                    <Icon size={30}/>
                  </div>







                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-gray-900
                    "
                  >
                    {item.title}
                  </h3>






                  <p
                    className="
                      mt-3
                      text-gray-600
                      leading-relaxed
                      text-sm
                    "
                  >
                    {item.description}
                  </p>



                </div>

              );


            })
          }



        </div>








        {/* Bottom Banner */}

        <div
          className="
            mt-12
            bg-pink-600
            rounded-3xl
            p-6
            sm:p-8
            text-white
            text-center
          "
        >


          <h3
            className="
              text-2xl
              font-bold
            "
          >
            Give Your Baby The Best Start In Life
          </h3>




          <p
            className="
              mt-3
              text-pink-100
              leading-relaxed
            "
          >
            Early medical care, proper nutrition and regular monitoring
            help your newborn grow healthy and strong.
          </p>


        </div>


      </div>


    </section>

  );

};


export default Services;