import React from "react";
import { useNavigate } from "react-router-dom";


const DiagnosticServices = () => {

  const navigate = useNavigate();


  const services = [
    {
      icon: "🩸",
      title: "Blood Test",
      text: "Complete blood analysis including CBC, sugar and other important tests."
    },
    {
      icon: "🧪",
      title: "Laboratory Testing",
      text: "Accurate diagnostic tests with advanced laboratory technology."
    },
    {
      icon: "❤️",
      title: "ECG Test",
      text: "Heart activity monitoring and cardiac health assessment."
    },
    {
      icon: "🔬",
      title: "Health Screening",
      text: "Preventive health checkups for early disease detection."
    },
    {
      icon: "🧬",
      title: "Hormone & Thyroid Test",
      text: "Specialized testing for thyroid and hormonal balance."
    },
    {
      icon: "📄",
      title: "Digital Reports",
      text: "Get accurate medical reports online anytime."
    },
    {
      icon: "🩺",
      title: "Doctor Review",
      text: "Expert doctor interpretation of diagnostic reports."
    },
    {
      icon: "🏥",
      title: "Home Sample Collection",
      text: "Convenient sample collection service at your home."
    },
  ];



  return (

    <div className="bg-gray-50 min-h-screen">


      {/* Hero */}

      <section className="
        bg-gradient-to-r
        from-green-700
        to-blue-600
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
              text-green-100
              font-semibold
            ">
              Advanced Healthcare Testing
            </p>


            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            ">
              Diagnostic Services
            </h1>


            <p className="
              mt-5
              text-green-50
              leading-relaxed
            ">
              Reliable laboratory and diagnostic solutions with
              accurate reports to support better medical decisions.
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
              hover:bg-gray-100
              "

            >
              Book Diagnostic Test
            </button>


          </div>




          <div className="
            bg-white/20
            rounded-3xl
            p-10
            text-center
          ">


            <div className="text-8xl">
              🧪
            </div>


            <h3 className="
              text-2xl
              font-bold
              mt-5
            ">
              Accurate Diagnosis
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
            Our Diagnostic Services
          </h2>


          <p className="text-gray-600 mt-3">
            Complete testing solutions for accurate healthcare decisions.
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
                hover:border-green-400
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






      {/* Process */}

      <section className="
        bg-green-50
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
            Diagnostic Process
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
                "Select Test",
                "Sample Collection",
                "Lab Processing",
                "Get Report"
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
                    bg-green-600
                    text-white
                    rounded-full
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


export default DiagnosticServices;