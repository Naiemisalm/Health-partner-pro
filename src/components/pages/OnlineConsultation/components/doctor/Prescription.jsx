import React, { useState } from "react";


const Prescription = () => {


  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    duration: "",
    instruction: "",
  });


  const [medicines, setMedicines] = useState([]);



  const handleChange = (e) => {

    setMedicine({
      ...medicine,
      [e.target.name]: e.target.value
    });

  };




  const addMedicine = () => {

    if(!medicine.name) return;


    setMedicines([
      ...medicines,
      medicine
    ]);


    setMedicine({
      name: "",
      dosage: "",
      duration: "",
      instruction: "",
    });

  };




  const removeMedicine = (index) => {

    setMedicines(
      medicines.filter((_, i)=> i !== index)
    );

  };




  const savePrescription = () => {

    console.log(medicines);

    alert("Prescription saved successfully!");

  };




  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">


      {/* Header */}

      <div className="mb-5">

        <h3 className="text-xl font-bold text-[#243b5a]">
          Prescription
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Add medicines for patient
        </p>

      </div>





      {/* Medicine Form */}

      <div className="space-y-3">


        <input
          name="name"
          value={medicine.name}
          onChange={handleChange}
          placeholder="Medicine name"
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#00C2CB]"
        />



        <input
          name="dosage"
          value={medicine.dosage}
          onChange={handleChange}
          placeholder="Dosage (e.g. 1 tablet twice daily)"
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#00C2CB]"
        />



        <input
          name="duration"
          value={medicine.duration}
          onChange={handleChange}
          placeholder="Duration (e.g. 7 days)"
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#00C2CB]"
        />



        <textarea
          name="instruction"
          value={medicine.instruction}
          onChange={handleChange}
          placeholder="Special instructions..."
          className="w-full h-20 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#00C2CB]"
        />



        <button
          onClick={addMedicine}
          className="w-full bg-[#00C2CB] text-white py-3 rounded-xl font-semibold"
        >
          + Add Medicine
        </button>


      </div>








      {/* Medicine List */}

      <div className="mt-6 space-y-3">


        {
          medicines.map((item,index)=>(

            <div
              key={index}
              className="border rounded-xl p-4 flex justify-between items-start"
            >


              <div>

                <h4 className="font-bold text-[#243b5a]">
                  {item.name}
                </h4>


                <p className="text-sm text-gray-600">
                  {item.dosage}
                </p>


                <p className="text-sm text-gray-600">
                  {item.duration}
                </p>


                <p className="text-sm text-gray-500">
                  {item.instruction}
                </p>


              </div>



              <button
                onClick={()=>removeMedicine(index)}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>



            </div>


          ))
        }


      </div>








      {/* Save */}

      <button
        onClick={savePrescription}
        className="w-full mt-6 bg-[#243b5a] text-white py-3 rounded-xl font-semibold hover:bg-[#1b2e45]"
      >
        Save Prescription
      </button>



    </div>

  );

};


export default Prescription;