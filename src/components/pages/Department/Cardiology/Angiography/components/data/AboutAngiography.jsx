export default function AboutAngiography() {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


        {/* Image */}
        <div className="flex justify-center">

          <img
            src="/images/about-angiography.png"
            alt="About Angiography"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />

        </div>



        {/* Content */}
        <div>

          <span className="text-red-600 font-semibold uppercase text-sm">
            About Angiography
          </span>


          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Advanced Angiography For Accurate Heart Diagnosis
          </h2>


          <p className="text-gray-600 mt-5 leading-relaxed">
            Angiography is an advanced imaging procedure used to examine
            blood vessels and detect blockages or narrowing in arteries.
            It helps cardiologists diagnose coronary artery disease and
            plan the right treatment.
          </p>


          <p className="text-gray-600 mt-4 leading-relaxed">
            Our advanced cath lab technology and experienced specialists
            ensure safe procedures with accurate results.
          </p>



          <div className="grid grid-cols-2 gap-5 mt-8">


            <div className="bg-red-50 p-5 rounded-xl">
              <h3 className="text-2xl font-bold text-red-600">
                15+
              </h3>

              <p className="text-gray-600">
                Years Experience
              </p>
            </div>



            <div className="bg-red-50 p-5 rounded-xl">

              <h3 className="text-2xl font-bold text-red-600">
                5000+
              </h3>

              <p className="text-gray-600">
                Successful Procedures
              </p>

            </div>


          </div>


        </div>


      </div>

    </section>
  );
}