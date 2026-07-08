import React from "react";
import { useNavigate } from "react-router-dom";


const CardiologyCare = () => {

  const navigate = useNavigate();


  const services = [
    {
      icon: "❤️",
      title: "Heart Consultation",
      text: "Expert cardiologist consultation for complete heart health evaluation."
    },
    {
      icon: "📈",
      title: "ECG Test",
      text: "Electrocardiogram test to monitor heart rhythm and activity."
    },
    {
      icon: "🩸",
      title: "Blood Pressure Management",
      text: "Regular BP monitoring and hypertension management support."
    },
    {
      icon: "🔬",
      title: "Cardiac Screening",
      text: "Early detection of heart-related risks through advanced screening."
    },
    {
      icon: "🫀",
      title: "Heart Disease Care",
      text: "Diagnosis and treatment guidance for various heart conditions."
    },
    {
      icon: "🥗",
      title: "Heart Healthy Lifestyle",
      text: "Diet, exercise and lifestyle advice for better heart health."
    },
    {
      icon: "📋",
      title: "Risk Assessment",
      text: "Evaluate cardiac risk factors and preventive care planning."
    },
    {
      icon: "📅",
      title: "Follow-up Care",
      text: "Continuous monitoring and follow-up consultation support."
    },
  ];



  return (

    <div className="bg-gray-50 min-h-screen">



      {/* Hero Section */}

      <section className="
        bg-gradient-to-r
        from-red-700
        to-pink-600
        py-20
        px-4
        text-white
      ">


        <div className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-10
          items-center
        ">


          <div>


            <p className="
              uppercase
              text-red-100
              font-semibold
            ">
              Specialized Heart Care
            </p>


            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            ">
              Cardiology Care
            </h1>



            <p className="
              mt-5
              text-red-50
              leading-relaxed
            ">
              Advanced cardiac care with experienced cardiologists,
              modern diagnostic facilities and personalized treatment plans.
            </p>



            <button

              onClick={()=>navigate("/health-checkup-packages")}

              className="
              mt-8
              bg-white
              text-red-700
              px-8
              py-3
              rounded-full
              font-semibold
              hover:bg-red-50
              "

            >
              Book Heart Checkup
            </button>


          </div>




          <div className="
            bg-white/20
            rounded-3xl
            p-10
            text-center
          ">

            <div className="text-8xl">
              ❤️
            </div>


            <h3 className="
              text-2xl
              font-bold
              mt-5
            ">
              Complete Heart Protection
            </h3>


          </div>


        </div>


      </section>





      {/* Services */}

      <section className="
        max-w-7xl
        mx-auto
        py-16
        px-4
      ">


        <div className="text-center mb-12">


          <h2 className="
            text-3xl
            font-bold
            text-gray-800
          ">
            Our Cardiology Services
          </h2>


          <p className="
            text-gray-600
            mt-3
          ">
            Comprehensive heart care solutions for every stage of life.
          </p>


        </div>




        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


          {
            services.map((item,index)=>(


              <div

                key={index}

                className="
                bg-white
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-xl
                transition
                border
                hover:border-red-400
                "

              >


                <div className="text-4xl">
                  {item.icon}
                </div>


                <h3 className="
                  mt-4
                  font-bold
                  text-gray-800
                ">
                  {item.title}
                </h3>


                <p className="
                  text-sm
                  text-gray-600
                  mt-3
                ">
                  {item.text}
                </p>


              </div>


            ))
          }


        </div>


      </section>





      {/* Process */}

      <section className="
        bg-red-50
        py-16
        px-4
      ">


        <div className="
          max-w-5xl
          mx-auto
          text-center
        ">


          <h2 className="
            text-3xl
            font-bold
          ">
            Cardiology Care Process
          </h2>



          <div className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-6
            mt-10
          ">


            {
              [
                "Book Appointment",
                "Cardiologist Consultation",
                "Heart Diagnosis",
                "Treatment Plan"
              ].map((step,index)=>(


                <div
                  key={index}
                  className="
                  bg-white
                  rounded-xl
                  p-5
                  shadow
                  "
                >

                  <div className="
                    w-10
                    h-10
                    mx-auto
                    rounded-full
                    bg-red-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                  ">
                    {index+1}
                  </div>


                  <p className="mt-4 font-semibold">
                    {step}
                  </p>


                </div>


              ))
            }


          </div>


        </div>


      </section>



    </div>

  );

};


export default CardiologyCare;