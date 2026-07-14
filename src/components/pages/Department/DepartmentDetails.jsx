import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserMd } from "react-icons/fa";
import { departments } from "../Department/departments";


export default function DepartmentDetails() {


  const { id } = useParams();


  const department = departments.find(
    (d) => d.id === Number(id)
  );



  if (!department) {

    return (

      <div className="text-center py-20">

        <h2 className="text-2xl font-bold">
          Department Not Found
        </h2>


        <Link
          to="/department"
          className="text-blue-600 mt-4 inline-block"
        >
          Go Back
        </Link>

      </div>

    );

  }



  const Icon = department.icon;



  // Service Route
  const getServiceLink = (service) => {

    const serviceRoutes = {


      // Cardiology
      "ECG": "/department/cardiology/ecg",
      "Echo": "/department/cardiology/echo",
      "Angiography": "/department/cardiology/angiography",
      "Heart Surgery": "/department/cardiology/heart-surgery",



      // Dental Care
      "Root Canal": "/department/dental/root-canal",
      "Implant": "/department/dental/implant",
      "Braces": "/department/dental/braces",
      "Whitening": "/department/dental/whitening",



      // Neurology
      "Stroke": "/department/neurology/stroke",
      "Migraine": "/department/neurology/migraine",



      // Eye Care
      "Cataract": "/department/eye/cataract",
      "LASIK": "/department/eye/lasik",



      // Pediatrics
      "Vaccination": "/department/pediatrics/vaccination",
      "Newborn Care": "/department/pediatrics/newborn-care",



      // General Medicine
      "Fever": "/department/general-medicine/fever",
      "Diabetes": "/department/general-medicine/diabetes",

    };



    return serviceRoutes[service.name] || `/service/${service.id}`;

  };




  return (

    <motion.section

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.5
      }}

      className="max-w-7xl mx-auto px-5 py-16"

    >



      {/* HEADER */}

      <div className="text-center">


        <Icon

          className={`text-7xl mx-auto ${department.color}`}

        />


        <h1 className="text-4xl font-bold mt-5">

          {department.title}

        </h1>



        <p className="max-w-3xl mx-auto text-gray-600 mt-4">

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
            department.services?.map((service)=>(


              <div

                key={service.id}

                className="bg-white rounded-2xl shadow-md p-6 text-center"

              >



                <h3 className="text-xl font-bold">

                  {service.name}

                </h3>




                <div className="flex justify-center items-center gap-2 text-gray-500 mt-3">

                  <FaUserMd className="text-blue-600"/>

                  {service.doctors?.length || 0} Specialist Doctor

                </div>




                <Link

                  to={getServiceLink(service)}

                  className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"

                >

                  View Details

                </Link>



              </div>


            ))
          }



        </div>


      </div>





      {/* BACK BUTTON */}


      <div className="text-center mt-14">


        <Link

          to="/department"

          className="bg-gray-800 text-white px-7 py-3 rounded-xl"

        >

          ← Back to Departments

        </Link>


      </div>




    </motion.section>

  );

}