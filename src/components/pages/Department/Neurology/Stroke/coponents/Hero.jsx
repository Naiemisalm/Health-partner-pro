import React from "react";
import { ArrowRight, Brain, PhoneCall, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
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
              <Brain size={18}/>
              Neurology Department
            </span>



            <h1 className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-gray-900
            ">
              Advanced Stroke Care
              <span className="text-blue-600">
                {" "}for Better Recovery
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
              Our specialized neurology team provides fast diagnosis,
              advanced treatment and rehabilitation support for stroke
              patients with compassionate care.
            </p>




            {/* Buttons */}
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
                transition
              ">
                Book Consultation
                <ArrowRight size={20}/>
              </button>



              <button className="
                flex
                items-center
                justify-center
                gap-2
                border
                border-blue-600
                text-blue-600
                hover:bg-blue-50
                px-7
                py-3.5
                rounded-xl
                font-semibold
                transition
              ">
                <PhoneCall size={20}/>
                Emergency Call
              </button>


            </div>



            {/* Trust Points */}
            <div className="
              mt-10
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-5
            ">


              <div className="flex items-center gap-3">

                <div className="
                  w-10
                  h-10
                  rounded-lg
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                ">
                  <ShieldCheck size={22}/>
                </div>

                <p className="text-sm font-medium text-gray-700">
                  Expert Neurologists
                </p>

              </div>



              <div className="flex items-center gap-3">

                <div className="
                  w-10
                  h-10
                  rounded-lg
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                ">
                  🧠
                </div>

                <p className="text-sm font-medium text-gray-700">
                  Advanced Stroke Care
                </p>

              </div>



              <div className="flex items-center gap-3">

                <div className="
                  w-10
                  h-10
                  rounded-lg
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                ">
                  ❤️
                </div>

                <p className="text-sm font-medium text-gray-700">
                  24/7 Support
                </p>

              </div>


            </div>


          </div>





          {/* Image Area */}
          <div className="relative">


            <div className="
              absolute
              -top-5
              -right-5
              w-40
              h-40
              bg-blue-200
              rounded-full
              blur-3xl
              opacity-50
            "></div>



            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063"
              alt="Stroke Care Neurology"
              className="
                relative
                w-full
                h-[350px]
                sm:h-[450px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />



            {/* Emergency Card */}
            <div className="
              absolute
              bottom-5
              left-5
              right-5
              sm:left-8
              sm:right-auto
              bg-white
              rounded-2xl
              shadow-lg
              p-5
              sm:w-80
            ">

              <p className="
                text-sm
                text-gray-500
              ">
                Stroke Emergency Care
              </p>

              <h3 className="
                mt-1
                text-xl
                font-bold
                text-gray-900
              ">
                Fast Response & Treatment
              </h3>

              <p className="
                mt-2
                text-gray-600
                text-sm
              ">
                Early medical attention can improve stroke outcomes.
              </p>

            </div>


          </div>


        </div>


      </div>

    </section>
  );
};

export default Hero;