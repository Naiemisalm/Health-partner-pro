import React from "react";
import {
  Syringe,
  ShieldCheck,
  Baby,
  HeartPulse,
} from "lucide-react";

const Overview = () => {
  const highlights = [
    {
      icon: Syringe,
      title: "Routine Immunization",
      description:
        "Vaccines protect children against serious infectious diseases from birth through childhood.",
    },
    {
      icon: ShieldCheck,
      title: "Disease Prevention",
      description:
        "Timely vaccination significantly reduces the risk of preventable illnesses and complications.",
    },
    {
      icon: Baby,
      title: "Healthy Development",
      description:
        "Immunization helps children grow safely by strengthening their immune system from an early age.",
    },
    {
      icon: HeartPulse,
      title: "Pediatric Supervision",
      description:
        "Every vaccination is administered under the guidance of experienced pediatric specialists.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Syringe size={16} />
            Vaccination Overview
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Vaccination Matters
          </h2>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Vaccination is one of the safest and most effective ways to protect
            children from life-threatening infectious diseases and support
            lifelong health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              What is Child Vaccination?
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Vaccination is the process of administering vaccines that help the
              immune system recognize and fight harmful bacteria and viruses
              before they can cause serious illness.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Following the recommended immunization schedule ensures your child
              receives protection at the right age, reducing the risk of
              preventable diseases.
            </p>

            <button className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-7 py-3 rounded-xl font-semibold transition">
              Learn More
            </button>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                    <Icon size={24} />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;