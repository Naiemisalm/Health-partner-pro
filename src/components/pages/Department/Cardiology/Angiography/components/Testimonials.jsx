import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";


export default function Testimonials() {


  const testimonials = [
    {
      id: 1,
      name: "Rahim Uddin",
      role: "Angiography Patient",
      image: "/images/patient1.png",
      review:
        "The angiography procedure was smooth and comfortable. The doctors explained everything clearly.",
    },

    {
      id: 2,
      name: "Karim Hasan",
      role: "Heart Care Patient",
      image: "/images/patient2.png",
      review:
        "Excellent service and professional staff. I received my report quickly.",
    },

    {
      id: 3,
      name: "Nusrat Jahan",
      role: "Cardiac Patient",
      image: "/images/patient3.png",
      review:
        "The doctors and nurses were very supportive throughout my angiography test.",
    },
  ];



  return (

    <section className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-5">



        {/* Heading */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="text-center max-w-3xl mx-auto"

        >


          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">

            Patient Reviews

          </span>



          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">

            What Our Patients Say

          </h2>



          <p className="mt-5 text-gray-600 leading-8">

            Hear from our patients about their angiography experience
            and cardiac care services.

          </p>



        </motion.div>





        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">



          {testimonials.map((item,index)=>(


            <motion.div

              key={item.id}

              initial={{
                opacity:0,
                y:50,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                duration:0.5,
                delay:index * 0.2,
              }}

              viewport={{
                once:true,
              }}


              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-xl
              transition
              "

            >



              <FaQuoteLeft className="text-4xl text-red-200"/>




              <p className="text-gray-600 mt-5 leading-7">

                {item.review}

              </p>





              <div className="flex gap-1 mt-5 text-yellow-400">


                {[1,2,3,4,5].map((star)=>(

                  <FaStar key={star}/>

                ))}


              </div>





              <div className="flex items-center gap-4 mt-6">


                <img

                  src={item.image}

                  alt={item.name}

                  className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                  "

                />



                <div>


                  <h3 className="font-bold text-gray-800">

                    {item.name}

                  </h3>


                  <p className="text-sm text-gray-500">

                    {item.role}

                  </p>


                </div>


              </div>




            </motion.div>


          ))}



        </div>




      </div>



    </section>

  );

}