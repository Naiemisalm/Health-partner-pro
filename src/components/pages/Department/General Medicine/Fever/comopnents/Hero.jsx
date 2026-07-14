import React from "react";
import {
  Thermometer,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
} from "lucide-react";


const Hero = () => {

  return (
    <section className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-red-50
      via-white
      to-orange-50
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
              bg-red-100
              text-red-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            ">
              <Thermometer size={18}/>
              General Medicine Department
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

              Expert Fever Diagnosis
              <span className="
                text-red-600
              ">
                {" "} & Treatment
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
              জ্বরের সঠিক কারণ নির্ণয় এবং আধুনিক চিকিৎসার মাধ্যমে দ্রুত
              সুস্থতার জন্য অভিজ্ঞ চিকিৎসকদের বিশেষজ্ঞ পরামর্শ ও সেবা।
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
                bg-red-600
                hover:bg-red-700
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
                border-red-600
                text-red-600
                hover:bg-red-50
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
                  bg-red-100
                  text-red-600
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








              <div className="flex items-center gap-3">


                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-orange-100
                  text-orange-600
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
                  Complete Care
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
              bg-red-200
              rounded-full
              blur-3xl
              opacity-50
            "></div>





            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
              alt="Fever Treatment"
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
                Fever Care
              </p>



              <h3 className="
                mt-1
                text-xl
                font-bold
                text-gray-900
              ">
                Accurate Diagnosis
              </h3>



              <p className="
                mt-2
                text-sm
                text-gray-600
              ">
                Advanced medical evaluation with personalized treatment plans.
              </p>


            </div>



          </div>



        </div>


      </div>


    </section>
  );
};


export default Hero;