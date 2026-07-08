import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Payment() {


  const { state } = useLocation();

  const navigate = useNavigate();



  const [paymentType, setPaymentType] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  const [paymentNumber, setPaymentNumber] = useState("");




  if (!state) {

    return (

      <h2 className="text-center mt-10 text-red-500">

        Payment information not found

      </h2>

    );

  }




  const {

    doctor,

    patient,

    selectedDay,

    selectedTime,

    bookingId


  } = state;







  const handlePayment = () => {



    if (!paymentType) {

      alert("Please select payment option");

      return;

    }





    if (

      paymentType === "Pay Now" &&

      (!paymentMethod || !paymentNumber)

    ) {

      alert("Please select payment method and enter number");

      return;

    }






    const appointment = {


      bookingId,


      doctorId: doctor.id,


      doctorName: doctor.name,


      patient,



      date:
      `${selectedDay.label} ${selectedDay.date}`,



      time: selectedTime,



      paymentType,



      paymentMethod:
      paymentMethod || "Cash on Visit",



      paymentNumber:
      paymentNumber || "N/A",



      status:"Confirmed",



      createdAt:
      new Date().toLocaleString()


    };







    const oldAppointments =

      JSON.parse(

        localStorage.getItem("appointments")

      ) || [];






    localStorage.setItem(

      "appointments",

      JSON.stringify([

        ...oldAppointments,

        appointment

      ])

    );






    navigate("/success",{

      state:{

        bookingId,

        doctor

      }

    });


  };







  return (


    <div className="min-h-screen bg-gray-100 p-5">


      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">





        {/* Payment Section */}



        <div className="

        lg:col-span-2

        bg-white rounded-2xl shadow p-6

        ">




          <h1 className="

          text-3xl font-bold

          mb-6

          ">

            Payment

          </h1>







          <h2 className="

          font-bold text-lg mb-4

          ">

            Select Payment Option

          </h2>







          <div className="grid md:grid-cols-2 gap-4">





            {/* Pay Now */}


            <button


              onClick={()=>

                setPaymentType("Pay Now")

              }



              className={`

              border rounded-xl p-5 text-left

              transition

              ${

              paymentType==="Pay Now"

              ?

              "border-blue-600 bg-blue-50"

              :

              ""

              }

              `}


            >


              <h3 className="

              font-bold text-xl

              ">

                💳 Pay Now

              </h3>


              <p className="

              text-gray-500 text-sm mt-2

              ">

                Pay online before appointment

                using bKash, Nagad or Card

              </p>



            </button>









            {/* Pay Later */}


            <button


              onClick={()=>

                setPaymentType("Pay Later")

              }



              className={`

              border rounded-xl p-5 text-left

              transition


              ${

              paymentType==="Pay Later"

              ?

              "border-green-600 bg-green-50"

              :

              ""

              }

              `}


            >


              <h3 className="

              font-bold text-xl

              ">

                🏥 Pay Later

              </h3>



              <p className="

              text-gray-500 text-sm mt-2

              ">

                Pay at hospital after

                doctor consultation

              </p>



            </button>




          </div>









          {
            paymentType === "Pay Now" && (



              <div className="mt-6">



                <h2 className="font-bold mb-3">

                  Choose Online Payment

                </h2>




                <div className="grid grid-cols-2 gap-3">



                  {
                    [

                      "bKash",

                      "Nagad",

                      "Rocket",

                      "Card"

                    ].map((item)=>(


                      <button


                        key={item}


                        onClick={()=>setPaymentMethod(item)}



                        className={`

                        border rounded-xl py-3

                        font-semibold


                        ${

                        paymentMethod===item

                        ?

                        "bg-blue-600 text-white"

                        :

                        ""

                        }

                        `}


                      >


                        {item}



                      </button>


                    ))

                  }



                </div>






                {
                  paymentMethod && (


                    <input


                      placeholder={

                        `${paymentMethod} Number`

                      }



                      value={paymentNumber}



                      onChange={(e)=>

                        setPaymentNumber(

                          e.target.value

                        )

                      }



                      className="

                      w-full mt-5

                      border rounded-xl

                      px-4 py-3

                      outline-none

                      "

                    />

                  )

                }



              </div>


            )

          }








          <button


            onClick={handlePayment}



            className="

            w-full mt-8

            bg-blue-600

            text-white

            py-3 rounded-xl

            font-bold

            hover:bg-blue-700

            "


          >


            Confirm Payment



          </button>





        </div>









        {/* Summary */}



        <div className="

        bg-white rounded-2xl shadow

        p-6 h-fit

        ">




          <h2 className="

          text-xl font-bold mb-5

          ">

            Appointment Summary

          </h2>







          <img


            src={doctor.image}


            alt={doctor.name}


            className="

            w-24 h-24 rounded-full

            mx-auto

            "


          />




          <h3 className="

          text-center font-bold mt-3

          ">


            {doctor.name}


          </h3>



          <p className="

          text-center text-blue-600

          ">


            {doctor.specialty}


          </p>






          <div className="mt-5 space-y-3 text-gray-600">


            <p>

              Patient:

              <b> {patient.name}</b>

            </p>



            <p>

              Date:

              <b>

                {" "}

                {selectedDay.label}

                {" "}

                {selectedDay.date}

              </b>

            </p>




            <p>

              Time:

              <b> {selectedTime}</b>

            </p>





            <hr/>





            <p className="text-lg">

              Total Fee:

              <b className="text-green-600">

                ৳{doctor.consultationFee}

              </b>

            </p>



          </div>





        </div>





      </div>


    </div>


  );


}