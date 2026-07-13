import { angiographyServices } from "../components/data/angiographyServices";


export default function AngiographyServices() {

  return (

    <section className="py-20 bg-white">


      <div className="container mx-auto px-6">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="text-red-600 font-semibold uppercase text-sm">
            Our Services
          </span>


          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Angiography Services We Provide
          </h2>


          <p className="text-gray-600 mt-4">
            Advanced diagnostic angiography services with modern technology
            and experienced cardiac specialists.
          </p>


        </div>



        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {angiographyServices.map((service) => (

            <div
              key={service.id}
              className="
              group
              bg-gray-50
              p-6
              rounded-2xl
              border
              border-gray-100
              hover:bg-red-600
              transition
              duration-300
              "
            >


              <div
                className="
                w-16
                h-16
                flex
                items-center
                justify-center
                rounded-full
                bg-red-100
                text-3xl
                group-hover:bg-white
                transition
                "
              >
                {service.icon}
              </div>



              <h3
                className="
                text-xl
                font-bold
                text-gray-800
                mt-5
                group-hover:text-white
                "
              >
                {service.title}
              </h3>



              <p
                className="
                text-gray-600
                mt-3
                leading-relaxed
                group-hover:text-red-100
                "
              >
                {service.description}
              </p>



            </div>

          ))}


        </div>


      </div>


    </section>

  );
}