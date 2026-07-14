import React from "react";
import { Award, BriefcaseMedical, Star, CalendarCheck } from "lucide-react";

const DoctorProfile = () => {
  const doctor = {
    name: "Dr. Sarah Ahmed",
    degree: "BDS, DDS, Cosmetic Dentistry Specialist",
    experience: "10+ Years Experience",
    specialization: "Teeth Whitening & Cosmetic Dentistry",
    rating: "4.9",
    patients: "500+ Happy Patients",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  };

  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Specialist
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Meet Our Whitening Expert
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Experienced dental professionals dedicated to creating confident
            and beautiful smiles.
          </p>

        </div>


        {/* Doctor Card */}
        <div className="
          bg-gray-50
          rounded-3xl
          overflow-hidden
          shadow-lg
          border border-gray-100
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
        ">


          {/* Image */}
          <div className="relative h-full">

            <img
              src={doctor.image}
              alt={doctor.name}
              className="
                w-full
                h-[350px]
                sm:h-[420px]
                lg:h-full
                object-cover
              "
            />


            {/* Experience Badge */}
            <div className="
              absolute
              bottom-5
              left-5
              bg-white
              rounded-xl
              shadow-md
              px-5
              py-3
            ">
              <p className="text-blue-600 font-bold text-xl">
                10+
              </p>

              <p className="text-sm text-gray-600">
                Years Experience
              </p>
            </div>

          </div>



          {/* Details */}
          <div className="p-6 sm:p-10 lg:p-12">


            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
            ">
              {doctor.name}
            </h3>


            <p className="mt-2 text-blue-600 font-medium">
              {doctor.degree}
            </p>



            {/* Info List */}
            <div className="mt-8 space-y-5">


              <div className="flex items-start gap-4">

                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                  <Award size={22}/>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Specialization
                  </h4>

                  <p className="text-gray-600">
                    {doctor.specialization}
                  </p>
                </div>

              </div>



              <div className="flex items-start gap-4">

                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                  <BriefcaseMedical size={22}/>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Experience
                  </h4>

                  <p className="text-gray-600">
                    {doctor.experience}
                  </p>
                </div>

              </div>



              <div className="flex items-start gap-4">

                <div className="bg-yellow-100 text-yellow-500 p-3 rounded-xl">
                  <Star size={22} fill="currentColor"/>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Patient Rating
                  </h4>

                  <p className="text-gray-600">
                    {doctor.rating} ⭐ ({doctor.patients})
                  </p>
                </div>

              </div>


            </div>



            {/* Button */}
            <button
              className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
              w-full
              sm:w-auto
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-7
              py-3.5
              rounded-xl
              font-semibold
              transition
              duration-300
              "
            >
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