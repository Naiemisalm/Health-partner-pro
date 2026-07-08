import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Excellent service. Doctor was very friendly and explained my treatment clearly.",
  },
  {
    name: "Sara Khan",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The booking process was very easy and the healthcare team was supportive.",
  },
  {
    name: "David Smith",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "I received great care and professional guidance from the doctor.",
  },
  {
    name: "Nusrat Jahan",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Very clean clinic and amazing patient support service.",
  },
  {
    name: "Michael Lee",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Doctors are experienced and the consultation was very helpful.",
  },
  {
    name: "Ayesha Rahman",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    review:
      "Highly recommended. Best healthcare experience I have received.",
  },
];


const Testimonials = () => {

  return (

    <section className="bg-blue-50 py-16 px-4">

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-blue-700">
            Patient Testimonials
          </h2>

          <p className="text-gray-600 mt-3">
            What our patients say about our healthcare service.
          </p>

        </div>



        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay:3000,
          }}
          spaceBetween={30}
          slidesPerView={1}

          breakpoints={{
            640:{
              slidesPerView:2
            },
            1024:{
              slidesPerView:3
            }
          }}

        >


          {testimonials.map((item,index)=>(

            <SwiperSlide key={index}>


              <div className="bg-white rounded-2xl shadow-lg p-6 text-center h-full">


                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-100"
                />


                <div className="flex justify-center mt-4 text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>


                <p className="text-gray-600 mt-4 leading-relaxed">
                  "{item.review}"
                </p>


                <h3 className="text-xl font-bold text-gray-800 mt-5">
                  {item.name}
                </h3>


                <p className="text-blue-600">
                  {item.role}
                </p>


              </div>


            </SwiperSlide>

          ))}


        </Swiper>


      </div>

    </section>

  );
};


export default Testimonials;