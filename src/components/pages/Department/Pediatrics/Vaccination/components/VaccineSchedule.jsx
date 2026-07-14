import React from "react";
import {
  CalendarDays,
  Syringe,
  Baby,
} from "lucide-react";

const VaccineSchedule = () => {
  const schedule = [
    {
      age: "At Birth",
      vaccine: "BCG, OPV, Hepatitis B",
    },
    {
      age: "6 Weeks",
      vaccine: "Pentavalent, OPV, PCV, Rotavirus",
    },
    {
      age: "10 Weeks",
      vaccine: "Pentavalent, OPV, PCV, Rotavirus",
    },
    {
      age: "14 Weeks",
      vaccine: "Pentavalent, OPV, IPV, PCV",
    },
    {
      age: "9 Months",
      vaccine: "Measles-Rubella (MR)",
    },
    {
      age: "15–18 Months",
      vaccine: "MR Booster, DPT Booster",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
            <CalendarDays size={16} />
            Vaccination Schedule
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-900">
            Recommended Immunization Timeline
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Following the recommended schedule helps protect your child during
            the most important stages of growth.
          </p>
        </div>

        {/* Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                  <Baby size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.age}
                  </h3>
                </div>
              </div>

              <div className="flex gap-3">
                <Syringe className="text-green-600 mt-1" size={20} />

                <p className="text-gray-600 leading-relaxed">
                  {item.vaccine}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-green-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold">
            Keep Your Child's Vaccinations Up to Date
          </h3>

          <p className="mt-3 text-green-100 max-w-2xl mx-auto">
            Timely immunization protects children from serious diseases and
            supports healthy growth and development.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VaccineSchedule;