import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { departments } from "../Department/departments";
import { FaUserMd } from "react-icons/fa";


export default function DepartmentDetails() {


  const { slug } = useParams();


  const department = departments.find(
    (d) => d.slug === slug
  );



  if (!department) {

    return (

      <div className="text-center py-20">

        <h2 className="text-2xl font-bold">
          Department Not Found
        </h2>


        <Link

          to="/departments"

          className="text-blue-600 mt-4 inline-block"

        >

          Go Back

        </Link>


      </div>

    );

  }



  const Icon = department.icon;



  return (

    <motion.section

      initial={{
        opacity:0,
        y:30,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.5,
      }}

      className="max-w-7xl mx-auto px-5 py-16"

    >



      {/* HEADER */}

      <div className="text-center">


        <Icon

          className={`text-7xl mx-auto ${department.color}`}

        />


        <h1 className="text-4xl md:text-5xl font-bold mt-5">

          {department.title}

        </h1>


        <p className="max-w-3xl mx-auto text-gray-600 mt-4 leading-8">

          {department.details}

        </p>


      </div>






      {/* SERVICES */}

      <div className="mt-14">


        <h2 className="text-3xl font-bold text-center">

          Our Services

        </h2>




        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">


          {
            department.services.map((service,index)=>(


              <motion.div


                key={service.slug}


                initial={{
                  opacity:0,
                  y:30,
                }}


                whileInView={{
                  opacity:1,
                  y:0,
                }}


                transition={{
                  delay:index*0.1,
                }}


                viewport={{
                  once:true,
                }}



                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition p-6 text-center"


              >



                <h3 className="text-xl font-bold">

                  {service.name}

                </h3>





                <div className="flex justify-center items-center gap-2 text-gray-500 mt-3">

                  <FaUserMd className="text-blue-600"/>

                  {service.doctors.length} Specialist Doctor

                </div>





                <Link

                  to={
                    service.slug === "ecg"
                    ?
                    "/department/cardiology/ecg"
                    :
                    `/department/${department.slug}/service/${service.slug}`
                  }


                  className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"

                >

                  View Details

                </Link>



              </motion.div>


            ))
          }



        </div>


      </div>







      {/* BACK BUTTON */}

      <div className="text-center mt-14">


        <Link

          to="/departments"

          className="bg-gray-800 text-white px-7 py-3 rounded-xl hover:bg-gray-900 transition"

        >

          ← Back to Departments

        </Link>


      </div>




    </motion.section>

  );

}