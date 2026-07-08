import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const services = [
  {
    icon: "🩺",
    title: "General Consultation",
    description:
      "Consult experienced doctors for regular health problems and medical advice.",
    slug: "general-consultation",
    page: "/general-consultation",
    details:
      "General physician consultation, health checkup, diagnosis and treatment guidance."
  },

  {
    icon: "🧪",
    title: "Diagnostic Services",
    description:
      "Advanced laboratory tests and accurate medical reports.",
    slug: "diagnostic-services",
    page: "/diagnostic-services",
    details:
      "Blood tests, medical investigations and diagnostic report services."
  },

  {
    icon: "❤️",
    title: "Cardiology Care",
    description:
      "Special heart care and cardiac consultation.",
    slug: "cardiology-care",
    page: "/cardiology-care",
    details:
      "ECG, heart checkup and expert cardiologist consultation."
  },

  {
    icon: "👩‍⚕️",
    title: "Women Healthcare",
    description:
      "Specialized healthcare services for women.",
    slug: "women-healthcare",
    page: "/women-healthcare",
    details:
      "Gynecology consultation and women's health screening."
  },

  {
    icon: "👶",
    title: "Child Healthcare",
    description:
      "Complete healthcare support for children.",
    slug: "child-healthcare",
    page: "/child-healthcare",
    details:
      "Pediatric consultation, vaccination and child care."
  },

  {
    icon: "💻",
    title: "Telemedicine",
    description:
      "Consult doctors online from anywhere.",
    slug: "telemedicine",
    page: "/telemedicine",
    details:
      "Online video consultation and digital prescription service."
  },
];





// Details Page

export const ServiceDetails = () => {


  const {slug} = useParams();


  const service = services.find(
    item => item.slug === slug
  );



  if(!service){

    return (

      <div className="text-center py-20 text-2xl">
        Service Not Found
      </div>

    );

  }



  return (

    <section className="bg-blue-50 min-h-screen py-16 px-4">


      <div className="
        max-w-3xl
        mx-auto
        bg-white
        rounded-2xl
        shadow-lg
        p-8
        text-center
      ">


        <div className="text-6xl">
          {service.icon}
        </div>



        <h1 className="
          text-3xl
          font-bold
          text-blue-700
          mt-5
        ">
          {service.title}
        </h1>



        <p className="
          text-gray-600
          mt-5
        ">
          {service.details}
        </p>



        <button
          className="
          mt-8
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-full
          hover:bg-blue-700
          "
        >
          Book Appointment
        </button>


      </div>


    </section>

  );

};






// Services List

const Services = () => {


  const navigate = useNavigate();



  const handleServiceClick = (service)=>{

    navigate(service.page);

  };



  return (

    <section className="bg-blue-50 py-16 px-4">


      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-12">


          <h2 className="
            text-4xl
            font-bold
            text-blue-700
          ">
            Our Medical Services
          </h2>



          <p className="text-gray-600 mt-3">
            Professional healthcare services for your better health.
          </p>


        </div>





        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">


          {
            services.map((service,index)=>(


              <div

                key={index}

                onClick={()=>handleServiceClick(service)}

                className="
                bg-white
                rounded-2xl
                p-6
                text-center
                shadow-md
                cursor-pointer
                hover:-translate-y-2
                hover:shadow-xl
                transition
                duration-300
                border
                hover:border-blue-400
                "


              >


                <div className="text-5xl">
                  {service.icon}
                </div>



                <h3 className="
                  text-xl
                  font-bold
                  mt-5
                  text-gray-800
                ">
                  {service.title}
                </h3>



                <p className="text-gray-600 mt-3">
                  {service.description}
                </p>



                <p className="
                  text-blue-600
                  mt-5
                  font-semibold
                ">
                  Explore Service →
                </p>



              </div>


            ))
          }



        </div>


      </div>


    </section>

  );

};



export default Services;