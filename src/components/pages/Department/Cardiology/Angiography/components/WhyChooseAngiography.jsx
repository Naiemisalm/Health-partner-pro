const reasons = [
  {
    id: 1,
    title: "Expert Cardiologists",
    description:
      "Our experienced cardiologists provide accurate diagnosis and personalized heart care.",
    icon: "👨‍⚕️",
  },

  {
    id: 2,
    title: "Advanced Cath Lab",
    description:
      "Modern angiography equipment ensures safe and precise procedures.",
    icon: "🏥",
  },

  {
    id: 3,
    title: "Accurate Reports",
    description:
      "Detailed reports are prepared and reviewed by specialist doctors.",
    icon: "📋",
  },

  {
    id: 4,
    title: "Patient Safety",
    description:
      "Complete monitoring and care throughout the angiography procedure.",
    icon: "❤️",
  },
];


export default function WhyChooseAngiography() {

  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-6">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="text-red-600 font-semibold uppercase text-sm">
            Why Choose Us
          </span>


          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Why Choose Our Angiography Service?
          </h2>


          <p className="text-gray-600 mt-4">
            We provide advanced cardiac imaging with expert medical care
            and modern technology.
          </p>

        </div>



        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {reasons.map((item) => (

            <div
              key={item.id}
              className="
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              hover:shadow-xl
              transition
              text-center
              "
            >

              <div
                className="
                w-16
                h-16
                mx-auto
                flex
                items-center
                justify-center
                rounded-full
                bg-red-100
                text-3xl
                "
              >
                {item.icon}
              </div>


              <h3 className="text-xl font-bold text-gray-800 mt-5">
                {item.title}
              </h3>


              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}