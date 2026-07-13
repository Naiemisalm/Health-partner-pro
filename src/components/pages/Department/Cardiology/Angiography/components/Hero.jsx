import { Link } from "react-router-dom";


export default function Hero() {

  return (
    <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white">

      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">


        {/* Content */}
        <div>

          <p className="text-sm uppercase tracking-wider text-red-100 mb-4">
            Cardiology Service
          </p>


          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Advanced Angiography
            <br />
            For Better Heart Care
          </h1>


          <p className="mt-6 text-lg text-red-100 leading-relaxed">
            Get accurate diagnosis of coronary artery blockages with
            advanced angiography technology and expert cardiologists.
          </p>


          <div className="flex flex-wrap gap-4 mt-8">


            <Link
              to="/appointment"
              className="
              bg-white
              text-red-600
              px-8
              py-3
              rounded-full
              font-semibold
              hover:bg-red-50
              transition
              "
            >
              Book Appointment
            </Link>


            <Link
              to="/department/cardiology"
              className="
              border
              border-white
              px-8
              py-3
              rounded-full
              font-semibold
              hover:bg-white
              hover:text-red-600
              transition
              "
            >
              Learn More
            </Link>


          </div>


        </div>



        {/* Image */}
        <div className="flex justify-center">


          <img
            src="/images/angiography.png"
            alt="Angiography"
            className="
            w-full
            max-w-lg
            object-contain
            drop-shadow-2xl
            "
          />


        </div>


      </div>


    </section>
  );
}