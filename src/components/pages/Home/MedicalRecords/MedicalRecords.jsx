import React from "react";

const records = [
  {
    icon: "🩺",
    title: "Medical History",
    description: "View patient's previous diseases, allergies and health history.",
    button: "View History",
  },
  {
    icon: "💊",
    title: "Prescriptions",
    description: "Check doctor prescriptions and download medicine details.",
    button: "View Prescription",
  },
  {
    icon: "🧪",
    title: "Lab Reports",
    description: "Access blood tests, X-Ray, MRI and other reports.",
    button: "View Reports",
  },
  {
    icon: "📅",
    title: "Appointment History",
    description: "Track previous doctor appointments and consultations.",
    button: "View Appointments",
  },
];


const MedicalRecords = () => {

  return (

    <section className="bg-gray-50 py-16 px-4">

      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            Medical Records
          </h2>

          <p className="text-gray-600 mt-3">
            Manage your medical documents, reports and health information.
          </p>

        </div>




        {/* Health Summary */}

        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">

          <h3 className="text-xl font-bold text-gray-800 mb-5">
            Health Summary
          </h3>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">


            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-blue-700">
                O+
              </h4>
              <p className="text-gray-600">
                Blood Group
              </p>
            </div>


            <div className="bg-green-50 p-4 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-green-700">
                35
              </h4>
              <p className="text-gray-600">
                Age
              </p>
            </div>


            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-purple-700">
                12
              </h4>
              <p className="text-gray-600">
                Reports
              </p>
            </div>


            <div className="bg-orange-50 p-4 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-orange-700">
                8
              </h4>
              <p className="text-gray-600">
                Appointments
              </p>
            </div>


          </div>

        </div>





        {/* Records Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {records.map((item,index)=>(

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:-translate-y-2 transition"
            >


              <div className="text-5xl mb-4">
                {item.icon}
              </div>


              <h3 className="text-xl font-bold text-gray-800">
                {item.title}
              </h3>


              <p className="text-gray-600 mt-3 text-sm">
                {item.description}
              </p>


              <button
                className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                {item.button}
              </button>


            </div>

          ))}


        </div>






        {/* Upload Document */}

        <div className="bg-white rounded-2xl shadow-md p-6 mt-10">


          <h3 className="text-xl font-bold text-gray-800">
            Upload Medical Documents
          </h3>


          <p className="text-gray-600 mt-2">
            Upload your reports, prescriptions and medical files.
          </p>



          <div className="mt-5 flex flex-col md:flex-row gap-4">


            <input
              type="file"
              className="border p-3 rounded-lg w-full"
            />


            <button
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
            >
              Upload
            </button>


          </div>


        </div>



      </div>


    </section>

  );

};


export default MedicalRecords;