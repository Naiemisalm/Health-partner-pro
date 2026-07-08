import { useEffect, useState } from "react";

const slides = [
  {
    title: "Find Trusted Doctors",
    subtitle: "Book appointments with top specialists easily",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    color: "from-sky-100 to-blue-50",
  },
  {
    title: "24/7 Online Consultation",
    subtitle: "Talk to doctors anytime, anywhere",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4a7",
    color: "from-green-100 to-emerald-50",
  },
  {
    title: "Fast & Easy Booking",
    subtitle: "No waiting, instant appointment system",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    color: "from-purple-100 to-pink-50",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`transition-all duration-700 bg-gradient-to-br ${slides[index].color}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-500">
              {slides[index].title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              {slides[index].subtitle}
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-sky-600 text-white px-6 sm:px-7 py-3 sm:py-4 rounded-xl font-semibold hover:bg-sky-700 transition">
                Book Appointment
              </button>

              <button className="border border-gray-300 px-6 sm:px-7 py-3 sm:py-4 rounded-xl font-semibold hover:border-sky-600 hover:text-sky-600 transition">
                Find Doctor
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">

            <div className="relative">

              <img
                src={slides[index].image}
                alt="Doctor"
                className="
                  w-[220px] h-[220px]
                  sm:w-[300px] sm:h-[300px]
                  lg:w-[380px] lg:h-[380px]
                  object-cover rounded-3xl shadow-xl transition-all duration-700
                "
              />

              {/* FLOAT CARD */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg">
                <p className="text-xs sm:text-sm text-gray-500">
                  Experienced Doctor
                </p>
                <h4 className="text-sm sm:text-base font-semibold">
                  Available Today
                </h4>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center pb-5 sm:pb-6 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              i === index ? "bg-sky-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}