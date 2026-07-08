import React from "react";
import { useNavigate } from "react-router-dom";


const WomenHealthcare = () => {

  const navigate = useNavigate();


  const services = [
    {
      icon: "👩‍⚕️",
      title: "Gynecology Consultation",
      text: "Expert gynecologist consultation for women's health concerns."
    },
    {
      icon: "🩺",
      title: "Women's Health Screening",
      text: "Complete preventive health screening for women of all ages."
    },
    {
      icon: "🤰",
      title: "Pregnancy Care",
      text: "Professional antenatal and maternity care support."
    },
    {
      icon: "🧬",
      title: "Hormone Health",
      text: "Diagnosis and management of hormonal health issues."
    },
    {
      icon: "🩸",
      title: "PCOS & Menstrual Care",
      text: "Specialized support for PCOS and menstrual problems."
    },
    {
      icon: "🥗",
      title: "Nutrition Advice",
      text: "Personalized diet and lifestyle guidance for women."
    },
    {
      icon: "🔬",
      title: "Diagnostic Support",
      text: "Advanced tests and health monitoring services."
    },
    {
      icon: "📅",
      title: "Follow-up Care",
      text: "Regular monitoring and continuous healthcare support."
    },
  ];



  return (

    <div className="bg-gray-50 min-h-screen">


      {/* Hero Section */}

      <section className="
        bg-gradient-to-r
        from-pink-600
        to-purple-600
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
              text-pink-100
              font-semibold
            ">
              Specialized Women's Care
            </p>



            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            ">
              Women Healthcare
            </h1>



            <p className="
              mt-5
              text-pink-50
              leading-relaxed
            ">
              Complete healthcare solutions designed for women,
              including preventive care, reproductive health and wellness.
            </p>




            <button

              onClick={()=>navigate("/health-checkup-packages")}

              className="
              mt-8
              bg-white
              text-pink-700
              px-8
              py-3
              rounded-full
              font-semibold
              hover:bg-pink-50
              "

            >
              Book Women's Checkup
            </button>



          </div>





          <div className="
            bg-white/20
            rounded-3xl
            p-10
            text-center
          ">


            <div className="text-8xl">
              👩‍⚕️
            </div>


            <h3 className="
              text-2xl
              font-bold
              mt-5
            ">
              Complete Women's Wellness
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
            Our Women Healthcare Services
          </h2>


          <p className="
            text-gray-600
            mt-3
          ">
            Personalized medical care for every stage of a woman's life.
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
                hover:border-pink-400
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
                  leading-relaxed
                ">
                  {item.text}
                </p>


              </div>


            ))
          }


        </div>


      </section>






      {/* Care Process */}

      <section className="
        bg-pink-50
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
            Women's Care Journey
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
                "Doctor Consultation",
                "Health Assessment",
                "Personalized Care Plan"
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
                    bg-pink-600
                    text-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                  ">
                    {index+1}
                  </div>



                  <p className="
                    mt-4
                    font-semibold
                  ">
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


export default WomenHealthcare;