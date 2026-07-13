import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { departments } from "../../pages/Department/departments";


export default function ServiceDetails(){


  const { id } = useParams();



  let department = null;
  let service = null;



  departments.forEach((d)=>{

    const findService = d.services?.find(
      (s)=>s.id === Number(id)
    );


    if(findService){

      department = d;
      service = findService;

    }

  });



  if(!service){

    return (

      <div className="text-center py-20">

        <h2 className="text-2xl font-bold">
          Service Not Found
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

    <motion.div

      initial={{opacity:0,y:30}}

      animate={{opacity:1,y:0}}

      transition={{duration:0.5}}

      className="max-w-6xl mx-auto px-5 py-16 bg-gray-50 min-h-screen"

    >



      <div className="text-center">


        <Icon

          className={`text-6xl mx-auto ${department.color}`}

        />


        <h1 className="text-4xl font-bold mt-4">

          {service.name}

        </h1>


        <p className="text-gray-600">

          Department: {department.title}

        </p>


      </div>




      <div className="mt-12">


        <h2 className="text-2xl font-bold text-center mb-6">

          Available Doctors

        </h2>



        <div className="grid sm:grid-cols-2 gap-6">


          {
            service.doctors?.map((doc,index)=>(


              <div

                key={index}

                className="bg-white shadow-md rounded-xl p-5 text-center"

              >

                <h3 className="text-xl font-bold">

                  👨‍⚕️ {doc.name}

                </h3>


                <p className="text-gray-500 mt-1">

                  🩺 {doc.specialization}

                </p>


              </div>


            ))
          }


        </div>


      </div>




      <div className="text-center mt-10">


        <Link

          to={`/appointment/${service.id}`}

          className="bg-green-600 text-white px-6 py-3 rounded-lg"

        >

          Book Appointment

        </Link>


      </div>



    </motion.div>

  );

}