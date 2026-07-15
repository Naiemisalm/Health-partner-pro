import React, { useState } from "react";


const ConsultationNotes = () => {


  const [notes, setNotes] = useState({
    symptoms: "",
    diagnosis: "",
    advice: "",
    followUp: "",
  });



  const handleChange = (e) => {

    setNotes({
      ...notes,
      [e.target.name]: e.target.value
    });

  };



  const saveNotes = () => {

    console.log(notes);

    alert("Consultation notes saved successfully!");

  };



  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">


      {/* Header */}

      <div className="mb-5">

        <h3 className="text-xl font-bold text-[#243b5a]">
          Consultation Notes
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Add patient diagnosis and treatment details
        </p>

      </div>






      {/* Symptoms */}

      <div className="space-y-4">


        <div>

          <label className="text-sm font-semibold text-gray-600">
            Symptoms
          </label>

          <textarea
            name="symptoms"
            value={notes.symptoms}
            onChange={handleChange}
            placeholder="Enter patient's symptoms..."
            className="w-full mt-2 h-24 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#00C2CB]"
          />

        </div>







        {/* Diagnosis */}

        <div>

          <label className="text-sm font-semibold text-gray-600">
            Diagnosis
          </label>


          <textarea
            name="diagnosis"
            value={notes.diagnosis}
            onChange={handleChange}
            placeholder="Enter diagnosis..."
            className="w-full mt-2 h-24 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#00C2CB]"
          />

        </div>







        {/* Advice */}

        <div>

          <label className="text-sm font-semibold text-gray-600">
            Doctor Advice
          </label>


          <textarea
            name="advice"
            value={notes.advice}
            onChange={handleChange}
            placeholder="Write advice for patient..."
            className="w-full mt-2 h-24 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#00C2CB]"
          />

        </div>







        {/* Follow Up */}

        <div>

          <label className="text-sm font-semibold text-gray-600">
            Follow Up Date
          </label>


          <input
            type="date"
            name="followUp"
            value={notes.followUp}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#00C2CB]"
          />

        </div>



      </div>







      {/* Save Button */}

      <button
        onClick={saveNotes}
        className="w-full mt-6 bg-[#243b5a] hover:bg-[#1b2e45] text-white py-3 rounded-xl font-semibold transition"
      >
        Save Consultation Notes
      </button>



    </div>

  );

};


export default ConsultationNotes;