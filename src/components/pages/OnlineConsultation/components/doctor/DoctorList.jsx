import React from "react";
import DoctorCard from "./DoctorCard";
import { doctors } from "../../components/data/doctors";


const DoctorList = ({ onSelect }) => {

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {
        doctors.map((doctor) => (

          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onSelect={onSelect}
          />

        ))
      }

    </div>

  );

};


export default DoctorList;