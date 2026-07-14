import React from "react";
import {
  Baby,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";


const Benefits = () => {


  const benefits = [
    "Early detection of newborn health problems",
    "Better growth and development monitoring",
    "Expert guidance for feeding and nutrition",
    "Protection through proper vaccination planning",
    "Safe care from experienced pediatric specialists",
    "Improved long-term health outcomes for babies",
  ];



  return (

    <section
      className="
        py-16
        sm:py-20
        bg-white
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
              bg-green-100
              text-green-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            <Sparkles size={16}/>
            Newborn Care Benefits
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
            Benefits Of Professional Newborn Care
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
            Proper newborn care helps babies stay healthy, supports growth
            and provides parents with expert medical guidance.
          </p>


        </div>









        {/* Content */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
          "
        >





          {/* Left Card */}

          <div
            className="
              bg-gradient-to-br
              from-pink-600
              to-purple-600
              rounded-3xl
              p-8
              sm:p-10
              text-white
            "
          >


            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/20
                flex
                items-center
                justify-center
              "
            >
              <Baby size={32}/>
            </div>





            <h3
              className="
                mt-6
                text-3xl
                font-bold
              "
            >
              Healthy Beginning For Your Baby
            </h3>





            <p
              className="
                mt-4
                text-pink-100
                leading-relaxed
              "
            >
              Newborn babies need special attention during their early
              days. Professional pediatric care ensures proper growth,
              safety and healthy development.
            </p>






            <div
              className="
                mt-8
                flex
                gap-5
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <ShieldCheck size={22}/>
                <span className="text-sm">
                  Safe Care
                </span>
              </div>



              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <HeartPulse size={22}/>
                <span className="text-sm">
                  Healthy Growth
                </span>
              </div>


            </div>


          </div>









          {/* Benefits List */}

          <div className="space-y-5">


            {
              benefits.map((item,index)=>(


                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                    bg-gray-50
                    rounded-2xl
                    p-5
                    border
                    border-gray-100
                    hover:shadow-md
                    transition
                  "
                >


                  <CheckCircle2
                    size={26}
                    className="
                      text-green-500
                      flex-shrink-0
                      mt-1
                    "
                  />



                  <p
                    className="
                      text-gray-700
                      font-medium
                      leading-relaxed
                    "
                  >
                    {item}
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