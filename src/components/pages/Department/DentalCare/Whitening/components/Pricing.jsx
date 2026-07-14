import React from "react";
import { Check, Crown, Sparkles } from "lucide-react";

const Pricing = () => {

  const plans = [
    {
      title: "Basic Whitening",
      subtitle: "For a Fresh Smile",
      price: "$99",
      features: [
        "Dental consultation",
        "Basic whitening session",
        "Smile shade assessment",
        "Aftercare guidance",
      ],
      popular: false,
    },

    {
      title: "Premium Whitening",
      subtitle: "Most Recommended",
      price: "$199",
      features: [
        "Advanced whitening treatment",
        "Expert dentist supervision",
        "Premium whitening materials",
        "Personalized care plan",
        "Follow-up support",
      ],
      popular: true,
    },

    {
      title: "Luxury Smile Package",
      subtitle: "Complete Smile Care",
      price: "$299",
      features: [
        "Complete dental evaluation",
        "Premium whitening procedure",
        "Custom smile consultation",
        "Priority appointment",
        "Long-term maintenance plan",
      ],
      popular: false,
    },
  ];


  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="
            inline-flex
            items-center
            gap-2
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Sparkles size={16}/>
            Treatment Pricing
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Choose Your Whitening Plan
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Select the treatment package that matches your smile goals and
            dental needs.
          </p>


        </div>




        {/* Pricing Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">


          {plans.map((plan,index)=>(

            <div
              key={index}
              className={`
                relative
                rounded-3xl
                bg-white
                p-6
                sm:p-8
                border
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl

                ${
                  plan.popular
                  ? "border-blue-600 shadow-xl scale-100 lg:scale-105"
                  : "border-gray-100 shadow-sm"
                }
              `}
            >



              {/* Popular Badge */}
              {plan.popular && (

                <div className="
                  absolute
                  -top-4
                  left-1/2
                  -translate-x-1/2
                  bg-blue-600
                  text-white
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                  flex
                  items-center
                  gap-2
                ">
                  <Crown size={16}/>
                  Popular
                </div>

              )}



              {/* Title */}
              <h3 className="
                text-2xl
                font-bold
                text-gray-900
              ">
                {plan.title}
              </h3>


              <p className="
                mt-2
                text-blue-600
                font-medium
              ">
                {plan.subtitle}
              </p>




              {/* Price */}
              <div className="mt-6">

                <span className="
                  text-5xl
                  font-bold
                  text-gray-900
                ">
                  {plan.price}
                </span>


                <span className="text-gray-500">
                  / treatment
                </span>

              </div>




              {/* Divider */}
              <div className="
                my-7
                border-t
                border-gray-100
              "></div>



              {/* Features */}
              <ul className="space-y-4">

                {plan.features.map((feature,i)=>(

                  <li
                    key={i}
                    className="
                      flex
                      items-center
                      gap-3
                      text-gray-700
                    "
                  >

                    <span className="
                      w-6
                      h-6
                      rounded-full
                      bg-green-100
                      text-green-600
                      flex
                      items-center
                      justify-center
                    ">
                      <Check size={15}/>
                    </span>


                    {feature}

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
                    plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                  }
                `}
              >
                Book Now
              </button>



            </div>

          ))}


        </div>


      </div>


    </section>
  );
};

export default Pricing;