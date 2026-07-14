import React from "react";
import {
  ClipboardCheck,
  ScanEye,
  Microscope,
  Zap,
  Eye,
  CheckCircle2,
} from "lucide-react";


const Procedure = () => {


  const steps = [
    {
      icon: ClipboardCheck,
      title: "Eye Evaluation",
      description:
        "A detailed eye examination is performed to check your vision, corneal thickness, and suitability for LASIK.",
    },
    {
      icon: ScanEye,
      title: "Advanced Eye Scan",
      description:
        "Modern diagnostic technology is used to create a detailed map of your eye structure.",
    },
    {
      icon: Microscope,
      title: "LASIK Laser Treatment",
      description:
        "A precise laser reshapes the cornea to correct vision problems like myopia, hyperopia, and astigmatism.",
    },
    {
      icon: Eye,
      title: "Vision Correction",
      description:
        "The reshaped cornea allows light to focus properly and improves visual clarity.",
    },
    {
      icon: Zap,
      title: "Quick Recovery",
      description:
        "Most patients experience improved vision shortly after the procedure with minimal downtime.",
    },
    {
      icon: CheckCircle2,
      title: "Follow-up Care",
      description:
        "Regular follow-up visits help monitor healing and maintain healthy vision.",
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
            bg-purple-100
            text-purple-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">

            <Microscope size={16}/>
            LASIK Procedure

          </span>





          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            How LASIK Eye Surgery Works

          </h2>





          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">

            LASIK is a safe and advanced laser vision correction procedure
            performed through careful evaluation and precise technology.

          </p>


        </div>








        {/* Steps */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">


          {
            steps.map((item,index)=>{


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
                    flex
                    items-center
                    justify-between
                  ">


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



                    <span className="
                      text-4xl
                      font-bold
                      text-gray-200
                    ">
                      0{index+1}
                    </span>


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







        {/* Bottom Info */}

        <div className="
          mt-12
          bg-gradient-to-r
          from-purple-600
          to-blue-600
          rounded-3xl
          p-6
          sm:p-10
          text-white
          text-center
        ">


          <h3 className="
            text-2xl
            font-bold
          ">

            Advanced Technology For Better Vision

          </h3>



          <p className="
            mt-3
            text-purple-100
          ">

            Our specialists use modern laser technology to provide accurate,
            safe, and personalized LASIK treatment.

          </p>


        </div>



      </div>


    </section>

  );

};


export default Procedure;