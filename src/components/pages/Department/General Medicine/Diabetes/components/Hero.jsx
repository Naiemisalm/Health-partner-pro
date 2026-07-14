import React from "react";
import {
  Activity,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
} from "lucide-react";


const Hero = () => {


  return (

    <section className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-green-50
      via-white
      to-emerald-50
      py-16
      sm:py-20
      lg:py-24
      px-4
      sm:px-6
      lg:px-8
    ">


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
              bg-green-100
              text-green-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            ">

              <Activity size={18}/>
              Diabetes Care Department

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

              Advanced Diabetes
              <span className="
                text-green-600
              ">
                {" "}Management & Care
              </span>

            </h1>





            <p className="
              mt-6
              max-w-xl
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
            ">

              Comprehensive diabetes care with modern diagnosis, personalized
              treatment plans, and expert medical guidance to maintain a
              healthy lifestyle.

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
                bg-green-600
                hover:bg-green-700
                text-white
                px-7
                py-3.5
                rounded-xl
                font-semibold
                transition
              ">

                Book Appointment
                <ArrowRight size={20}/>

              </button>





              <button className="
                flex
                items-center
                justify-center
                gap-2
                border
                border-green-600
                text-green-600
                hover:bg-green-50
                px-7
                py-3.5
                rounded-xl
                font-semibold
                transition
              ">

                <PhoneCall size={20}/>
                Contact Doctor

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



              <div className="flex items-center gap-3">


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



                <p className="
                  text-sm
                  font-medium
                  text-gray-700
                ">

                  Safe Treatment

                </p>


              </div>








              <div className="flex items-center gap-3">


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

                  <HeartPulse size={22}/>

                </div>



                <p className="
                  text-sm
                  font-medium
                  text-gray-700
                ">

                  Health Monitoring

                </p>


              </div>








              <div className="flex items-center gap-3">


                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-emerald-100
                  text-emerald-600
                  flex
                  items-center
                  justify-center
                ">

                  <Stethoscope size={22}/>

                </div>



                <p className="
                  text-sm
                  font-medium
                  text-gray-700
                ">

                  Expert Doctors

                </p>


              </div>




            </div>



          </div>









          {/* Image */}

          <div className="relative">


            <div className="
              absolute
              -top-10
              -right-10
              w-52
              h-52
              bg-green-200
              rounded-full
              blur-3xl
              opacity-50
            "></div>





            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
              alt="Diabetes Care"
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







            {/* Floating Card */}

            <div className="
              absolute
              bottom-5
              left-5
              right-5
              sm:left-8
              sm:right-auto
              bg-white
              rounded-2xl
              shadow-xl
              p-5
              sm:w-80
            ">


              <p className="
                text-sm
                text-gray-500
              ">

                Diabetes Management

              </p>




              <h3 className="
                mt-1
                text-xl
                font-bold
                text-gray-900
              ">

                Live A Healthier Life

              </h3>





              <p className="
                mt-2
                text-sm
                text-gray-600
              ">

                Personalized care and expert guidance for better diabetes control.

              </p>



            </div>



          </div>



        </div>



      </div>


    </section>

  );

};


export default Hero;