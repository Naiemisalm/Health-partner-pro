import React from "react";
import { useNavigate } from "react-router-dom";


const GeneralConsultation = () => {

  const navigate = useNavigate();


  const services = [
    {
      title: "Fever, Cold & Cough Treatment",
      icon: "🌡️",
      text: "Complete evaluation and treatment guidance for common infections."
    },
    {
      title: "Headache & Body Pain Consultation",
      icon: "🧠",
      text: "Expert advice for headache, muscle pain and general discomfort."
    },
    {
      title: "Digestive Problems",
      icon: "🩺",
      text: "Diagnosis and treatment support for gastric and digestive issues."
    },
    {
      title: "Blood Pressure Checkup",
      icon: "❤️",
      text: "Regular BP monitoring and hypertension management."
    },
    {
      title: "Diabetes Monitoring",
      icon: "🩸",
      text: "Blood sugar monitoring and diabetes care guidance."
    },
    {
      title: "General Health Screening",
      icon: "🔬",
      text: "Routine health assessment for early disease detection."
    },
    {
      title: "Lifestyle & Diet Advice",
      icon: "🥗",
      text: "Personalized lifestyle improvement and nutrition guidance."
    },
    {
      title: "Follow-up Consultation",
      icon: "📅",
      text: "Continuous monitoring and follow-up support."
    },
  ];



  return (

    <div className="bg-gray-50 min-h-screen">


      {/* Hero Section */}

      <section className="
        bg-gradient-to-r
        from-blue-700
        to-blue-500
        py-20
        px-4
        text-white
      ">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">


          <div>


            <p className="
              uppercase
              tracking-wider
              text-blue-100
              font-semibold
            ">
              Primary Healthcare Service
            </p>


            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            ">
              General Consultation
            </h1>


            <p className="
              mt-5
              text-blue-50
              leading-relaxed
            ">
              Get professional medical advice from experienced physicians
              for your everyday health concerns, preventive care and
              long-term wellness.
            </p>


            <button

              onClick={()=>navigate("/health-checkup-packages")}

              className="
              mt-8
              bg-white
              text-blue-700
              px-8
              py-3
              rounded-full
              font-semibold
              hover:bg-blue-50
              "

            >
              Book Consultation
            </button>


          </div>



          <div className="
            bg-white/20
            rounded-3xl
            p-10
            text-center
          ">

            <div className="text-8xl">
              🩺
            </div>

            <h3 className="
              text-2xl
              font-bold
              mt-5
            ">
              Expert Primary Care
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
            Consultation Services
          </h2>


          <p className="text-gray-600 mt-3">
            Comprehensive healthcare solutions for your daily health needs.
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
                hover:border-blue-300
                "

              >

                <div className="text-4xl">
                  {item.icon}
                </div>


                <h3 className="
                  font-bold
                  text-gray-800
                  mt-4
                ">
                  {item.title}
                </h3>


                <p className="
                  text-sm
                  text-gray-600
                  mt-3
                  leading-relaxed
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
        bg-blue-50
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
            text-gray-800
          ">
            How Consultation Works
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
                "Meet Doctor",
                "Get Diagnosis",
                "Receive Treatment Plan"
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
                    bg-blue-600
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


export default GeneralConsultation;