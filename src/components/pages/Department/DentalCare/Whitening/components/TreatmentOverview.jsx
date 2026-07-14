import React from "react";
import { ShieldCheck, Clock3, Sparkles } from "lucide-react";

const TreatmentOverview = () => {
  const treatments = [
    {
      icon: ShieldCheck,
      title: "Safe & Professional Treatment",
      description:
        "Our whitening procedure is performed under expert dental supervision to ensure maximum safety and comfort.",
    },
    {
      icon: Clock3,
      title: "Quick Visible Results",
      description:
        "Experience a brighter smile with advanced whitening technology designed for fast and effective results.",
    },
    {
      icon: Sparkles,
      title: "Long Lasting Smile",
      description:
        "With proper oral care and follow-up guidance, maintain your beautiful white smile for longer.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            Teeth Whitening Care
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Professional Whitening Treatment
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Get a brighter and healthier smile with our advanced dental
            whitening solutions designed by experienced specialists.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {treatments.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group
                bg-white
                rounded-2xl
                p-6 sm:p-8
                shadow-sm
                border border-gray-100
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >

                {/* Icon */}
                <div
                  className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  group-hover:bg-blue-600
                  group-hover:text-white
                  transition
                  duration-300
                  "
                >
                  <Icon size={30}/>
                </div>


                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>


                {/* Bottom line */}
                <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300">
                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default TreatmentOverview;