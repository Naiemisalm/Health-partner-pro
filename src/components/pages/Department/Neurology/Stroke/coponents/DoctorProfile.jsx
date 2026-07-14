import React from "react";
import {
  Award,
  Brain,
  GraduationCap,
  Star,
  CalendarCheck,
} from "lucide-react";

const DoctorProfile = () => {

  const doctor = {
    name: "Dr. Ahmed Rahman",
    degree: "MBBS, MD (Neurology)",
    specialization: "Stroke & Neurovascular Specialist",
    experience: "15+ Years Experience",
    patients: "2000+ Patients Treated",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  };


  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="
          max-w-3xl
          mx-auto
          text-center
          mb-12
        ">


          <span className="
            inline-block
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            Our Neurologist
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Meet Our Stroke Specialist
          </h2>


          <p className="
            mt-4
            text-gray-600
          ">
            Experienced neurological care focused on accurate diagnosis,
            advanced treatment and patient recovery.
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
                15+
              </p>


              <p className="
                text-sm
                text-gray-600
              ">
                Years Experience
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




            {/* Information */}
            <div className="
              mt-8
              space-y-5
            ">



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
                    Specialization
                  </h4>

                  <p className="text-gray-600">
                    {doctor.specialization}
                  </p>

                </div>


              </div>





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
                    Qualification
                  </h4>

                  <p className="text-gray-600">
                    {doctor.degree}
                  </p>

                </div>


              </div>






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
                    Patient Rating
                  </h4>

                  <p className="text-gray-600">
                    {doctor.rating} ⭐ ({doctor.patients})
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
              Book Consultation

            </button>



          </div>


        </div>


      </div>


    </section>
  );
};

export default DoctorProfile;