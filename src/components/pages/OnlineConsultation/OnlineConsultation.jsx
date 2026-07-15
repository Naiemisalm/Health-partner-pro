import React, { useState } from "react";
import DoctorList from "./components/doctor/DoctorList";
import ConsultationRoom from "./components/doctor/ConsultationRoom";


const OnlineConsultation = () => {

  const [selectedDoctor, setSelectedDoctor] = useState(null);


  return (

    <section className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">


        {/* Header */}

        <div className="mb-10">

          <h1 className="text-3xl sm:text-4xl font-bold text-[#243b5a]">
            Online Consultation
          </h1>


          <p className="text-gray-600 mt-2">
            Consult with experienced doctors from anywhere.
          </p>

        </div>





        {
          selectedDoctor ? (

            <ConsultationRoom
              doctor={selectedDoctor}
              onBack={() => setSelectedDoctor(null)}
            />

          )

          :

          (

            <DoctorList
              onSelect={setSelectedDoctor}
            />

          )
        }



      </div>


    </section>

  );

};


export default OnlineConsultation;