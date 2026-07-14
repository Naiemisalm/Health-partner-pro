import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Emily Johnson",
      treatment: "In-Clinic Whitening",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "The whitening treatment was amazing. My smile looks brighter and I feel much more confident now.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      treatment: "Home Whitening Kit",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The dentist guided me throughout the process. The result was natural and impressive.",
      rating: 5,
    },
    {
      name: "Sophia Williams",
      treatment: "Cosmetic Whitening",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "Professional service and a very comfortable experience. Highly recommended.",
      rating: 5,
    },
  ];


  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">


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
            Patient Reviews
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            What Our Patients Say
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Real experiences from patients who achieved their brighter smiles
            with our whitening treatment.
          </p>


        </div>




        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          lg:gap-8
        ">


          {testimonials.map((item,index)=>(

            <div
              key={index}
              className="
                group
                bg-gray-50
                rounded-3xl
                p-6
                sm:p-8
                border
                border-gray-100
                hover:bg-white
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                relative
              "
            >


              {/* Quote Icon */}
              <div className="
                absolute
                top-6
                right-6
                text-blue-100
              ">
                <Quote size={45} fill="currentColor"/>
              </div>



              {/* Rating */}
              <div className="flex gap-1">

                {[...Array(item.rating)].map((_,i)=>(
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}

              </div>




              {/* Review */}
              <p className="
                mt-5
                text-gray-600
                leading-relaxed
              ">
                "{item.review}"
              </p>




              {/* Patient Info */}
              <div className="
                mt-8
                flex
                items-center
                gap-4
              ">


                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                    border-2
                    border-blue-100
                  "
                />


                <div>

                  <h3 className="
                    font-bold
                    text-gray-900
                  ">
                    {item.name}
                  </h3>


                  <p className="
                    text-sm
                    text-blue-600
                  ">
                    {item.treatment}
                  </p>

                </div>


              </div>



            </div>

          ))}


        </div>


      </div>


    </section>
  );
};

export default Testimonials;