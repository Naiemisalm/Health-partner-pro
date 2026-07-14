import React from "react";
import { CheckCircle2, Sparkles, Home, Stethoscope } from "lucide-react";

const WhiteningOptions = () => {

  const options = [
    {
      icon: Stethoscope,
      title: "In-Clinic Whitening",
      subtitle: "Professional Dental Treatment",
      description:
        "Advanced whitening treatment performed by our dental experts using modern technology.",
      price: "$199",
      features: [
        "Performed by experienced dentist",
        "Fast visible results",
        "Premium whitening materials",
        "Personalized dental consultation",
      ],
      popular: true,
    },

    {
      icon: Home,
      title: "Home Whitening Kit",
      subtitle: "Whiten Your Smile at Home",
      description:
        "Dentist-approved whitening solution that allows you to brighten your teeth comfortably at home.",
      price: "$99",
      features: [
        "Easy home application",
        "Custom whitening guidance",
        "Safe whitening formula",
        "Follow-up support",
      ],
      popular: false,
    },
  ];


  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles size={16}/>
            Whitening Services
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Choose Your Whitening Option
          </h2>


          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Select the whitening treatment that fits your lifestyle and smile
            goals.
          </p>

        </div>



        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          max-w-5xl
          mx-auto
        ">


          {options.map((option, index) => {

            const Icon = option.icon;

            return (

              <div
                key={index}
                className={`
                  relative
                  bg-white
                  rounded-3xl
                  p-6
                  sm:p-8
                  border
                  ${
                    option.popular
                      ? "border-blue-600 shadow-xl"
                      : "border-gray-200 shadow-sm"
                  }
                  hover:-translate-y-2
                  transition-all
                  duration-300
                `}
              >


                {/* Popular Badge */}
                {option.popular && (
                  <span className="
                    absolute
                    top-5
                    right-5
                    bg-blue-600
                    text-white
                    text-xs
                    px-4
                    py-2
                    rounded-full
                    font-semibold
                  ">
                    Most Popular
                  </span>
                )}



                {/* Icon */}
                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                ">
                  <Icon size={32}/>
                </div>



                {/* Title */}
                <h3 className="
                  mt-6
                  text-2xl
                  font-bold
                  text-gray-900
                ">
                  {option.title}
                </h3>


                <p className="mt-1 text-blue-600 font-medium">
                  {option.subtitle}
                </p>


                <p className="mt-4 text-gray-600 leading-relaxed">
                  {option.description}
                </p>



                {/* Price */}
                <div className="mt-6">

                  <span className="text-4xl font-bold text-gray-900">
                    {option.price}
                  </span>

                  <span className="text-gray-500 ml-2">
                    / session
                  </span>

                </div>



                {/* Features */}
                <ul className="mt-7 space-y-4">

                  {option.features.map((feature, i)=>(
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >

                      <CheckCircle2
                        size={20}
                        className="text-green-500 flex-shrink-0"
                      />

                      <span>
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>



                {/* Button */}
                <button
                  className={`
                    mt-8
                    w-full
                    py-3.5
                    rounded-xl
                    font-semibold
                    transition
                    ${
                      option.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                    }
                  `}
                >
                  Select Treatment
                </button>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
};

export default WhiteningOptions;