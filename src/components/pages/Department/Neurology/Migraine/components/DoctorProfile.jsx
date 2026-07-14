import React from "react";
import {
  Brain,
  GraduationCap,
  Star,
  CalendarCheck,
  Award,
  Users,
} from "lucide-react";

const DoctorProfile = () => {

  const doctor = {
    name: "ডা. আহমেদ রহমান",
    degree: "MBBS, MD (Neurology)",
    specialization: "Migraine & Headache Specialist",
    experience: "১৫+ বছরের অভিজ্ঞতা",
    patients: "২০০০+ রোগীর চিকিৎসা",
    rating: "৪.৯",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  };


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
            <Brain size={16}/>
            আমাদের নিউরোলজিস্ট
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            মাইগ্রেন বিশেষজ্ঞ চিকিৎসক
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            অভিজ্ঞ নিউরোলজিস্টের পরামর্শ ও আধুনিক চিকিৎসার মাধ্যমে মাইগ্রেন
            নিয়ন্ত্রণে বিশেষায়িত সেবা।
          </p>


        </div>






        {/* Doctor Card */}
        <div className="
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-lg
          border
          border-gray-100
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
        ">



          {/* Image */}
          <div className="relative">


            <img
              src={doctor.image}
              alt={doctor.name}
              className="
                w-full
                h-[350px]
                sm:h-[450px]
                object-cover
              "
            />



            {/* Experience Badge */}
            <div className="
              absolute
              bottom-5
              left-5
              bg-white
              rounded-2xl
              shadow-lg
              px-5
              py-4
            ">


              <p className="
                text-3xl
                font-bold
                text-blue-600
              ">
                ১৫+
              </p>


              <p className="
                text-sm
                text-gray-600
              ">
                বছরের অভিজ্ঞতা
              </p>


            </div>


          </div>







          {/* Details */}
          <div className="
            p-6
            sm:p-10
            lg:p-12
          ">


            <h3 className="
              text-3xl
              font-bold
              text-gray-900
            ">
              {doctor.name}
            </h3>



            <p className="
              mt-2
              text-blue-600
              font-semibold
            ">
              {doctor.degree}
            </p>





            <div className="
              mt-8
              space-y-5
            ">



              {/* Specialization */}
              <div className="flex gap-4">

                <div className="
                  w-12
                  h-12
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                ">
                  <Brain size={25}/>
                </div>


                <div>

                  <h4 className="font-bold text-gray-900">
                    বিশেষজ্ঞতা
                  </h4>


                  <p className="text-gray-600">
                    {doctor.specialization}
                  </p>

                </div>


              </div>






              {/* Qualification */}
              <div className="flex gap-4">

                <div className="
                  w-12
                  h-12
                  rounded-xl
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                ">
                  <GraduationCap size={25}/>
                </div>


                <div>

                  <h4 className="font-bold text-gray-900">
                    যোগ্যতা
                  </h4>


                  <p className="text-gray-600">
                    {doctor.degree}
                  </p>

                </div>


              </div>







              {/* Experience */}
              <div className="flex gap-4">

                <div className="
                  w-12
                  h-12
                  rounded-xl
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                ">
                  <Award size={25}/>
                </div>


                <div>

                  <h4 className="font-bold text-gray-900">
                    অভিজ্ঞতা
                  </h4>


                  <p className="text-gray-600">
                    {doctor.experience}
                  </p>

                </div>


              </div>








              {/* Rating */}
              <div className="flex gap-4">

                <div className="
                  w-12
                  h-12
                  rounded-xl
                  bg-yellow-100
                  text-yellow-600
                  flex
                  items-center
                  justify-center
                ">
                  <Star size={25} fill="currentColor"/>
                </div>


                <div>

                  <h4 className="font-bold text-gray-900">
                    রোগীর সন্তুষ্টি
                  </h4>


                  <p className="text-gray-600">
                    {doctor.rating} ⭐ | {doctor.patients}
                  </p>

                </div>


              </div>



            </div>






            {/* Button */}
            <button className="
              mt-8
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

              <CalendarCheck size={20}/>
              অ্যাপয়েন্টমেন্ট নিন

            </button>



          </div>


        </div>


      </div>


    </section>
  );
};

export default DoctorProfile;