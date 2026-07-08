import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",

  });




  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };





  const handleRegister = (e) => {

    e.preventDefault();



    if(formData.password !== formData.confirmPassword){

      alert("Password does not match!");

      return;

    }




    const users = JSON.parse(

      localStorage.getItem("users")

    ) || [];





    const alreadyExist = users.find(

      (user)=> user.email === formData.email

    );




    if(alreadyExist){

      alert("Email already registered!");

      return;

    }





    const newUser = {


      name: formData.name,

      email: formData.email,

      phone: formData.phone,

      role: formData.role,

      password: formData.password,


    };





    users.push(newUser);





    localStorage.setItem(

      "users",

      JSON.stringify(users)

    );





    // Login system এর জন্য latest user save

    localStorage.setItem(

      "user",

      JSON.stringify(newUser)

    );





    alert("Registration Successful!");





    navigate("/login");


  };






  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-cyan-500 flex justify-center items-center p-5">


      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2">



        {/* LEFT */}


        <div className="p-8 md:p-12">



          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">

            Create Account

          </h2>



          <p className="text-center text-gray-500 mb-8">

            Register for Hospital System

          </p>





          <form

            onSubmit={handleRegister}

            className="space-y-4"

          >





            <input

              name="name"

              value={formData.name}

              onChange={handleChange}

              required

              type="text"

              placeholder="Full Name"

              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

            />





            <input

              name="email"

              value={formData.email}

              onChange={handleChange}

              required

              type="email"

              placeholder="Email"

              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

            />





            <input

              name="phone"

              value={formData.phone}

              onChange={handleChange}

              required

              type="tel"

              placeholder="Phone Number"

              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

            />





            <select

              name="role"

              value={formData.role}

              onChange={handleChange}

              required

              className="w-full border rounded-xl px-4 py-3"

            >


              <option value="">

                Select Role

              </option>


              <option value="Patient">

                Patient

              </option>


              <option value="Doctor">

                Doctor

              </option>


              <option value="Receptionist">

                Receptionist

              </option>


              <option value="Admin">

                Admin

              </option>



            </select>





            <input

              name="password"

              value={formData.password}

              onChange={handleChange}

              required

              type="password"

              placeholder="Password"

              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

            />





            <input

              name="confirmPassword"

              value={formData.confirmPassword}

              onChange={handleChange}

              required

              type="password"

              placeholder="Confirm Password"

              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

            />






            <button

              type="submit"

              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"

            >

              Register

            </button>





          </form>






          <p className="text-center mt-5">


            Already have an account?


            <Link

              to="/login"

              className="text-blue-600 font-semibold ml-2"

            >

              Login

            </Link>



          </p>




        </div>






        {/* RIGHT */}


        <div className="hidden md:flex bg-blue-700 justify-center items-center flex-col text-white p-10">



          <img

            src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"

            alt="hospital"

            className="w-44 mb-5"

          />




          <h2 className="text-4xl font-bold mb-3">

            Join Our Hospital

          </h2>




          <p className="text-center text-blue-100">

            Securely manage appointments, patient records, and doctors with one modern dashboard.

          </p>



        </div>



      </div>


    </div>

  );

}