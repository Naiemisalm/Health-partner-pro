import React from "react";
import { useNavigate } from "react-router-dom";


const Telemedicine = () => {

  const navigate = useNavigate();


  const services = [
    {
      icon: "💻",
      title: "Online Doctor Consultation",
      text: "Consult qualified doctors through secure online video sessions."
    },
    {
      icon: "📹",
      title: "Video Consultation",
      text: "Connect with doctors from anywhere using video calls."
    },
    {
      icon: "📱",
      title: "Digital Prescription",
      text: "Receive online prescriptions and medical advice digitally."
    },
    {
      icon: "🕒",
      title: "24/7 Healthcare Support",
      text: "Get healthcare guidance whenever you need assistance."
    },
    {
      icon: "🩺",
      title: "Remote Diagnosis",
      text: "Discuss symptoms and receive medical guidance remotely."
    },
    {
      icon: "📄",
      title: "Medical Report Review",
      text: "Share reports online and get expert doctor opinions."
    },
    {
      icon: "🔒",
      title: "Secure Consultation",
      text: "Private and safe digital healthcare experience."
    },
    {
      icon: "📅",
      title: "Follow-up Consultation",
      text: "Continue your treatment through online follow-ups."
    },
  ];



  return (

    <div className="bg-gray-50 min-h-screen">



      {/* Hero Section */}

      <section className="
        bg-gradient-to-r
        from-indigo-700
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
              text-indigo-100
              font-semibold
            ">
              Digital Healthcare Solution
            </p>



            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            ">
              Telemedicine
            </h1>



            <p className="
              mt-5
              text-indigo-50
              leading-relaxed
            ">
              Consult experienced doctors online from the comfort
              of your home with secure digital healthcare services.
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
              Start Online Consultation
            </button>



          </div>





          <div className="
            bg-white/20
            rounded-3xl
            p-10
            text-center
          ">


            <div className="text-8xl">
              💻
            </div>


            <h3 className="
              text-2xl
              font-bold
              mt-5
            ">
              Healthcare Anywhere
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
            Our Telemedicine Services
          </h2>


          <p className="
            text-gray-600
            mt-3
          ">
            Modern healthcare through simple and secure online consultation.
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
                hover:border-indigo-400
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







      {/* How It Works */}

      <section className="
        bg-indigo-50
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
            How Telemedicine Works
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
                "Choose Doctor",
                "Book Online Slot",
                "Video Consultation",
                "Get Treatment Advice"
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
                    bg-indigo-600
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


export default Telemedicine;