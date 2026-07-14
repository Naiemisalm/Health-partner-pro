import React from "react";
import {
  UserRound,
  GraduationCap,
  Award,
  Star,
  CalendarCheck,
  Stethoscope,
} from "lucide-react";


const DoctorProfile = () => {


  const doctor = {
    name: "Dr. Ahmed Rahman",
    degree: "MBBS, FCPS (Medicine)",
    specialization: "General Physician & Fever Specialist",
    experience: "12+ Years Experience",
    patients: "5000+ Patients Treated",
    rating: "4.9",
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
            bg-green-100
            text-green-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Stethoscope size={16}/>
            Fever Care Specialist
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Consult Our Expert Doctor
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Experienced physicians provide accurate diagnosis and effective
            treatment plans for fever and related health conditions.
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
                text-green-600
              ">
                12+
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
              text-green-600
              font-semibold
            ">
              {doctor.degree}
            </p>





            <div className="
              mt-8
              space-y-5
            ">


              {/* Specialist */}

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
                  <Stethoscope size={25}/>
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







              {/* Qualification */}

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







              {/* Experience */}

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
                  <Award size={25}/>
                </div>


                <div>

                  <h4 className="font-bold text-gray-900">
                    Experience
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
                    Patient Satisfaction
                  </h4>


                  <p className="text-gray-600">
                    {doctor.rating} ⭐ | {doctor.patients}
                  </p>

                </div>


              </div>



            </div>







            <button className="
              mt-8
              flex
              items-center
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

              <CalendarCheck size={20}/>
              Book Appointment

            </button>



          </div>



        </div>



      </div>


    </section>
  );
};


export default DoctorProfile;