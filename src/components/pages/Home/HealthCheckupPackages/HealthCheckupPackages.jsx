import React, { useState } from "react";

const packages = [
  {
    title: "Basic Health Checkup",
    icon: "🩺",
    description: "Essential health screening for regular health monitoring.",
    details: [
      { name: "Complete Blood Count (CBC)", price: 300 },
      { name: "Blood Sugar Test", price: 200 },
      { name: "Urine Test", price: 150 },
      { name: "Blood Pressure Check", price: 100 },
      { name: "Doctor Consultation", price: 500 },
    ],
  },
  {
    title: "Full Body Checkup",
    icon: "🧪",
    description: "Complete health assessment with doctor consultation.",
    details: [
      { name: "CBC Test", price: 300 },
      { name: "Liver Function Test", price: 500 },
      { name: "Kidney Function Test", price: 500 },
      { name: "Thyroid Test", price: 400 },
      { name: "ECG", price: 600 },
      { name: "Doctor Review", price: 500 },
    ],
  },
  {
    title: "Heart Health Package",
    icon: "❤️",
    description: "Heart screening with cardiac risk assessment.",
    details: [
      { name: "ECG", price: 600 },
      { name: "Lipid Profile", price: 400 },
      { name: "Blood Pressure Check", price: 100 },
      { name: "Heart Risk Assessment", price: 700 },
      { name: "Cardiologist Consultation", price: 800 },
    ],
  },
  {
    title: "Diabetes Care Package",
    icon: "🩸",
    description: "Diabetes monitoring and prevention package.",
    details: [
      { name: "Fasting Blood Sugar", price: 200 },
      { name: "HbA1c Test", price: 500 },
      { name: "Kidney Test", price: 400 },
      { name: "Diet Consultation", price: 500 },
    ],
  },
  {
    title: "Women Health Package",
    icon: "👩",
    description: "Special health checkup designed for women.",
    details: [
      { name: "Hormone Test", price: 700 },
      { name: "Thyroid Test", price: 400 },
      { name: "Vitamin Test", price: 500 },
      { name: "Gynecology Consultation", price: 800 },
    ],
  },
  {
    title: "Senior Citizen Package",
    icon: "👴",
    description: "Complete healthcare support for seniors.",
    details: [
      { name: "Bone Health Check", price: 600 },
      { name: "Eye Checkup", price: 400 },
      { name: "Heart Screening", price: 800 },
      { name: "Doctor Consultation", price: 500 },
    ],
  },
];


const HealthCheckupPackages = () => {

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedTests, setSelectedTests] = useState([]);
  const [bookingPackage, setBookingPackage] = useState(null);


  const totalPrice = (tests) => {
    return tests.reduce(
      (sum, test) => sum + test.price,
      0
    );
  };


  const openDetails = (item) => {
    setSelectedPackage(item);
    setSelectedTests([...item.details]);
  };


  const removeTest = (index) => {
    const updated = selectedTests.filter(
      (_, i) => i !== index
    );

    setSelectedTests(updated);
  };


  return (

    <section className="bg-blue-50 py-16 px-4">

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            Health Checkup Packages
          </h2>

          <p className="text-gray-600 mt-3">
            Choose the right package for your healthy lifestyle.
          </p>

        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {packages.map((item,index)=>(

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


              <p className="text-gray-600 mt-3">
                {item.description}
              </p>


              <h4 className="text-2xl font-bold text-green-600 mt-4">
                ৳ {totalPrice(item.details)}
              </h4>



              <div className="flex gap-3 justify-center mt-6">


                <button
                  onClick={() => setBookingPackage(item)}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
                >
                  Book Now
                </button>



                <button
                  onClick={() => openDetails(item)}
                  className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white"
                >
                  View Details
                </button>


              </div>


            </div>

          ))}


        </div>





        {/* Details Modal */}

        {selectedPackage && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">


            <div className="bg-white max-w-md w-full rounded-2xl p-6">


              <button
                onClick={() => setSelectedPackage(null)}
                className="float-right text-2xl"
              >
                ×
              </button>


              <h2 className="text-2xl font-bold text-blue-700">
                {selectedPackage.title}
              </h2>


              <div className="mt-5 space-y-3">


                {selectedTests.map((test,index)=>(

                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >

                    <span>
                      {test.name}
                    </span>

                    <div className="flex gap-3">

                      <span className="text-green-600">
                        ৳ {test.price}
                      </span>

                      <button
                        onClick={() => removeTest(index)}
                        className="text-red-500 text-xl font-bold"
                      >
                        ×
                      </button>

                    </div>


                  </div>

                ))}


              </div>


              <h3 className="text-xl font-bold text-green-600 mt-5">
                Total: ৳ {totalPrice(selectedTests)}
              </h3>



              <button
                onClick={() => {

                  setSelectedPackage(null);

                  setBookingPackage({
                    ...selectedPackage,
                    details:selectedTests
                  });

                }}
                className="w-full mt-5 bg-blue-600 text-white py-3 rounded-full"
              >
                Book This Package
              </button>


            </div>


          </div>

        )}







        {/* Booking Modal */}

        {bookingPackage && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

            <div className="bg-white max-w-md w-full rounded-2xl p-6">


              <button
                onClick={()=>setBookingPackage(null)}
                className="float-right text-2xl"
              >
                ×
              </button>


              <h2 className="text-2xl font-bold text-blue-700">
                Book {bookingPackage.title}
              </h2>


              <h3 className="font-semibold mt-5">
                Selected Tests:
              </h3>


              <div className="mt-3 space-y-2">

                {bookingPackage.details.map((test,index)=>(

                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >

                    <span>
                      {test.name}
                    </span>

                    <span className="text-green-600">
                      ৳ {test.price}
                    </span>

                  </div>

                ))}

              </div>


              <h3 className="text-xl font-bold text-green-600 mt-5">
                Total: ৳ {totalPrice(bookingPackage.details)}
              </h3>



              <input
                placeholder="Patient Name"
                className="w-full border p-3 rounded mt-5"
              />


              <input
                placeholder="Phone Number"
                className="w-full border p-3 rounded mt-3"
              />


              <button
                className="w-full mt-5 bg-green-600 text-white py-3 rounded-full"
              >
                Confirm Booking
              </button>


            </div>

          </div>

        )}



      </div>

    </section>

  );

};


export default HealthCheckupPackages;