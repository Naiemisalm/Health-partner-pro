import React from "react";
import { useNavigate } from "react-router-dom";


const ChildHealthcare = () => {

  const navigate = useNavigate();


  const services = [
    {
      icon: "👶",
      title: "Pediatric Consultation",
      text: "Expert child specialists providing complete healthcare guidance."
    },
    {
      icon: "💉",
      title: "Vaccination Service",
      text: "Timely vaccination support for healthy child development."
    },
    {
      icon: "📈",
      title: "Growth Monitoring",
      text: "Track child's height, weight and overall development."
    },
    {
      icon: "🌡️",
      title: "Child Fever Care",
      text: "Treatment and advice for fever, cold and common infections."
    },
    {
      icon: "🥗",
      title: "Child Nutrition",
      text: "Healthy diet plans for proper growth and immunity."
    },
    {
      icon: "🧠",
      title: "Child Development",
      text: "Monitor physical and mental development milestones."
    },
    {
      icon: "🔬",
      title: "Health Screening",
      text: "Regular health checkups for early disease detection."
    },
    {
      icon: "📅",
      title: "Follow-up Care",
      text: "Continuous monitoring and pediatric support."
    },
  ];



  return (

    <div className="bg-gray-50 min-h-screen">



      {/* Hero Section */}

      <section className="
        bg-gradient-to-r
        from-cyan-600
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
              text-cyan-100
              font-semibold
            ">
              Specialized Pediatric Care
            </p>



            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            ">
              Child Healthcare
            </h1>



            <p className="
              mt-5
              text-cyan-50
              leading-relaxed
            ">
              Complete healthcare solutions for children with
              experienced pediatric doctors and child-friendly care.
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
              Book Child Checkup
            </button>



          </div>





          <div className="
            bg-white/20
            rounded-3xl
            p-10
            text-center
          ">


            <div className="text-8xl">
              👶
            </div>


            <h3 className="
              text-2xl
              font-bold
              mt-5
            ">
              Healthy Kids, Happy Future
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
            Our Child Healthcare Services
          </h2>


          <p className="
            text-gray-600
            mt-3
          ">
            Caring medical support for your child's healthy growth.
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
                hover:border-cyan-400
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
        bg-cyan-50
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
            Child Care Process
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
                "Pediatric Consultation",
                "Health Assessment",
                "Child Care Plan"
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
                    bg-cyan-600
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


export default ChildHealthcare;