import React from "react";
import {
  Eye,
  ArrowRight,
  ShieldCheck,
  Zap,
  Microscope,
} from "lucide-react";

const Hero = () => {

  return (
    <section className="
      py-16
      sm:py-20
      lg:py-24
      bg-gradient-to-br
      from-blue-50
      via-white
      to-cyan-50
      px-4
      sm:px-6
      lg:px-8
    ">

      <div className="max-w-7xl mx-auto">

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        ">


          {/* Content */}

          <div>


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
              <Eye size={18}/>
              LASIK Eye Surgery
            </span>



            <h1 className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
              leading-tight
            ">

              Clear Vision Without Glasses

              <span className="text-blue-600">
                {" "}with Advanced LASIK
              </span>

            </h1>



            <p className="
              mt-6
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
              max-w-xl
            ">
              Advanced LASIK surgery helps correct vision problems like
              myopia, hyperopia, and astigmatism using modern laser technology
              for clearer vision.
            </p>




            <div className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
            ">


              <button className="
                flex
                items-center
                justify-center
                gap-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-7
                py-3.5
                rounded-xl
                font-semibold
              ">
                Book Consultation
                <ArrowRight size={20}/>
              </button>



              <button className="
                border
                border-blue-600
                text-blue-600
                px-7
                py-3.5
                rounded-xl
                font-semibold
                hover:bg-blue-50
              ">
                Contact Specialist
              </button>


            </div>





            {/* Features */}

            <div className="
              mt-10
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-5
            ">


              <div className="flex gap-3 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                ">
                  <ShieldCheck size={22}/>
                </div>

                <p className="text-sm font-medium">
                  Safe Procedure
                </p>

              </div>





              <div className="flex gap-3 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                ">
                  <Microscope size={22}/>
                </div>

                <p className="text-sm font-medium">
                  Advanced Laser
                </p>

              </div>





              <div className="flex gap-3 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                ">
                  <Zap size={22}/>
                </div>

                <p className="text-sm font-medium">
                  Quick Recovery
                </p>

              </div>


            </div>


          </div>







          {/* Image */}

          <div className="relative">


            <img
              src="https://images.unsplash.com/photo-1580281658628-7c9d7e7f7e7b"
              alt="LASIK Surgery"
              className="
                w-full
                h-[350px]
                sm:h-[450px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />




            <div className="
              absolute
              bottom-5
              left-5
              bg-white
              rounded-2xl
              shadow-lg
              p-5
            ">


              <h3 className="
                text-xl
                font-bold
              ">
                LASIK Vision Correction
              </h3>


              <p className="
                text-gray-600
                text-sm
                mt-2
              ">
                Modern laser technology for better eyesight.
              </p>


            </div>


          </div>



        </div>


      </div>


    </section>
  );
};


export default Hero;