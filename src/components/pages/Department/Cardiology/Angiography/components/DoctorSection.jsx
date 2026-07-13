import { doctors } from "../components/data/doctors";


export default function DoctorSection() {

  return (
    <section className="py-20 bg-gray-50">


      <div className="container mx-auto px-6">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="text-red-600 font-semibold uppercase text-sm">
            Our Specialists
          </span>


          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Meet Our Expert Cardiologists
          </h2>


          <p className="text-gray-600 mt-4">
            Our experienced doctors provide safe and accurate angiography
            services with advanced cardiac care.
          </p>


        </div>



        {/* Doctors */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {doctors.map((doctor) => (

            <div
              key={doctor.id}
              className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition
              "
            >


              {/* Image */}
              <div className="h-72 bg-gray-100 flex justify-center">


                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="
                  h-full
                  object-cover
                  "
                />


              </div>



              {/* Info */}
              <div className="p-6 text-center">


                <h3 className="text-xl font-bold text-gray-800">
                  {doctor.name}
                </h3>


                <p className="text-red-600 mt-2 font-medium">
                  {doctor.designation}
                </p>


                <p className="text-gray-600 mt-2">
                  {doctor.experience}
                </p>



                <button
                  className="
                  mt-5
                  bg-red-600
                  text-white
                  px-6
                  py-2
                  rounded-full
                  hover:bg-red-700
                  transition
                  "
                >
                  View Profile
                </button>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}
