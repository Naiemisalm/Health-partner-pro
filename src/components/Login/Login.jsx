import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";


export default function Login() {


  const navigate = useNavigate();

  const location = useLocation();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");




  const handleLogin = (e) => {

    e.preventDefault();



    const user = JSON.parse(

      localStorage.getItem("user")

    );





    if (

      user &&

      user.email === email &&

      user.password === password

    ) {



      localStorage.setItem(

        "isLoggedIn",

        "true"

      );



      localStorage.setItem(

        "userName",

        user.name

      );



      localStorage.setItem(

        "userEmail",

        user.email

      );





      alert("Login Successful!");





      navigate(

        location.state?.from || "/"

      );




    } else {


      alert(

        "Invalid Email or Password"

      );


    }


  };





  return (

    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center p-5">


      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">



        {/* LEFT SIDE */}


        <div className="hidden md:flex flex-col justify-center items-center bg-blue-700 text-white p-10">



          <img

            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"

            alt="hospital"

            className="w-40 mb-6"

          />



          <h1 className="text-4xl font-bold mb-3">

            Hospital Management

          </h1>



          <p className="text-center text-blue-100">

            Manage Patients, Doctors, Appointments and Medical Records Easily.

          </p>



        </div>





        {/* RIGHT SIDE */}


        <div className="p-8 md:p-12">


          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">

            Welcome Back

          </h2>



          <p className="text-center text-gray-500 mb-8">

            Login to your account

          </p>





          <form

            onSubmit={handleLogin}

            className="space-y-5"

          >            <div>

              <label className="text-gray-700 font-medium">

                Email

              </label>



              <input

                type="email"

                required

                value={email}

                onChange={(e) => setEmail(e.target.value)}

                placeholder="Enter your email"

                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

              />


            </div>






            <div>


              <label className="text-gray-700 font-medium">

                Password

              </label>




              <input

                type="password"

                required

                value={password}

                onChange={(e) => setPassword(e.target.value)}

                placeholder="Enter password"

                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

              />


            </div>






            <div className="flex justify-between items-center">



              <label className="flex items-center gap-2">


                <input type="checkbox" />


                Remember Me


              </label>





              <button

                type="button"

                className="text-blue-600 hover:underline"

              >

                Forgot Password?

              </button>



            </div>






            <button

              type="submit"

              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold duration-300"

            >

              Login


            </button>





          </form>






          <p className="text-center mt-6">


            Don't have an account?



            <Link

              to="/register"

              className="text-blue-600 font-semibold ml-2"

            >

              Register

            </Link>



          </p>        </div>


      </div>


    </div>

  );

}