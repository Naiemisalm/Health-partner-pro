import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { MdMedicalServices } from "react-icons/md";

import {
  FaChevronDown,
  FaRobot,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";



const navItems = [
  { name:"Home", path:"/" },
  { name:"Department", path:"/department" },
  { name:"Doctors", path:"/doctors" },
  { name:"About", path:"/about" },
  { name:"Contact", path:"/contact" },
];



const blogItems = [
  { name:"Blog", path:"/blog" },
  { name:"Single Blog", path:"/single-blog" },
];




const Navbar = () => {


  const [menuOpen,setMenuOpen] = useState(false);

  const [blogOpen,setBlogOpen] = useState(false);

  const [profileOpen,setProfileOpen] = useState(false);

  const [notifOpen,setNotifOpen] = useState(false);

  const [scrolled,setScrolled] = useState(false);


  const [userName,setUserName] = useState(null);



  const location = useLocation();



  const profileRef = useRef(null);

  const notifRef = useRef(null);

  const blogRef = useRef(null);





  useEffect(()=>{

    setMenuOpen(false);
    setBlogOpen(false);
    setProfileOpen(false);
    setNotifOpen(false);


  },[location.pathname]);





  useEffect(()=>{


    const name = localStorage.getItem(
      "userName"
    );


    setUserName(name);


  },[location.pathname]);





  useEffect(()=>{


    const handleScroll = ()=>{

      setScrolled(window.scrollY > 10);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);





  const logout = ()=>{


    localStorage.removeItem(
      "isLoggedIn"
    );


    localStorage.removeItem(
      "userName"
    );


    localStorage.removeItem(
      "userEmail"
    );


    setUserName(null);

    setProfileOpen(false);


  };  const navStyle = ({ isActive }) =>

    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-sky-500 text-white shadow-md"
        : "text-slate-700 hover:bg-sky-50 hover:text-sky-600"
    }`;





  return (

    <>


      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200"
            : "bg-white shadow-sm"
        }`}
      >


        <div className="max-w-7xl mx-auto h-20 px-5 md:px-6 lg:px-8 flex items-center justify-between">





          {/* LOGO */}


          <NavLink
            to="/"
            className="flex items-center gap-3"
          >


            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md">

              <MdMedicalServices className="text-xl"/>

            </div>




            <div className="leading-tight">


              <h1 className="text-xl font-bold">

                Health

                <span className="text-sky-500">

                  Partner

                </span>


              </h1>



              <p className="text-xs text-slate-500">

                AI HEALTHCARE

              </p>



            </div>



          </NavLink>






          {/* DESKTOP MENU */}



          <nav className="hidden lg:flex items-center gap-2">


            {
              navItems.map((item)=>(

                <NavLink

                  key={item.path}

                  to={item.path}

                  className={navStyle}

                >

                  {item.name}


                </NavLink>


              ))
            }






            {/* BLOG */}



            <div
              ref={blogRef}
              className="relative"
            >


              <button

                onClick={()=>setBlogOpen(!blogOpen)}

                className="px-4 py-2 rounded-full text-sm text-slate-700 hover:bg-sky-50 flex items-center gap-2"

              >


                Blog


                <FaChevronDown

                  className={`transition ${
                    blogOpen ? "rotate-180" : ""
                  }`}

                />


              </button>





              {
                blogOpen && (

                  <div className="absolute top-full mt-3 w-56 bg-white rounded-2xl shadow-xl border overflow-hidden">


                    {
                      blogItems.map((item)=>(


                        <NavLink

                          key={item.path}

                          to={item.path}

                          className="block px-5 py-3 hover:bg-sky-50 text-sm"

                        >

                          {item.name}


                        </NavLink>


                      ))
                    }


                  </div>

                )
              }



            </div>



          </nav>          {/* RIGHT SIDE */}

          <div className="hidden lg:flex items-center gap-3">


            {/* AI CHAT */}

            <NavLink
              to="/ai-chat"
              className="px-5 py-2.5 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white transition flex items-center gap-2 text-sm font-semibold"
            >

              <FaRobot />

              AI Chat

            </NavLink>





            {/* NOTIFICATION */}


            <div
              ref={notifRef}
              className="relative"
            >


              <button

                onClick={()=>setNotifOpen(!notifOpen)}

                className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-sky-50"

              >

                <FaBell/>


              </button>




              {
                notifOpen && (

                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border p-5">

                    <p className="font-semibold">

                      Notifications

                    </p>


                    <p className="text-sm text-gray-500 mt-2">

                      No new notifications

                    </p>


                  </div>

                )
              }


            </div>







            {/* PROFILE */}



            <div
              ref={profileRef}
              className="relative"
            >


              <button

                onClick={()=>setProfileOpen(!profileOpen)}

                className="flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-sky-50"

              >


                <FaUserCircle className="text-xl text-sky-600"/>


                <span className="text-sm font-medium">

                  {userName || "Account"}

                </span>


                <FaChevronDown/>


              </button>







              {
                profileOpen && (

                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden">



                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 text-white text-center">


                      <FaUserCircle className="text-6xl mx-auto mb-3"/>


                      <h3 className="font-bold text-lg">

                        {userName || "Guest User"}

                      </h3>



                      <p className="text-sm">

                        {
                          userName
                          ? "Welcome back"
                          : "Login to access account"
                        }

                      </p>



                    </div>






                    <div className="p-4 space-y-3">


                    {
                      userName ? (


                        <button

                          onClick={logout}

                          className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"

                        >

                          Logout

                        </button>


                      ) : (


                        <>


                        <NavLink

                          to="/login"

                          className="block text-center bg-sky-500 text-white py-3 rounded-xl"

                        >

                          Login

                        </NavLink>




                        <NavLink

                          to="/register"

                          className="block text-center border border-sky-500 text-sky-600 py-3 rounded-xl"

                        >

                          Create Account

                        </NavLink>


                        </>


                      )
                    }



                    </div>



                  </div>


                )
              }



            </div>



          </div>







          {/* MOBILE BUTTON */}



          <button

            onClick={()=>setMenuOpen(!menuOpen)}

            className="lg:hidden text-3xl"

          >

            {
              menuOpen
              ? <HiX/>
              : <HiOutlineMenuAlt3/>
            }


          </button>




        </div>



      </header>







      {/* MOBILE MENU */}



      {
        menuOpen && (

          <div className="lg:hidden bg-white border-t shadow-lg">

            <div className="px-6 py-5 space-y-2">


              {
                navItems.map((item)=>(


                  <NavLink

                    key={item.path}

                    to={item.path}

                    className="block px-4 py-3 rounded-xl hover:bg-sky-50"

                  >

                    {item.name}


                  </NavLink>


                ))
              }





              {
                userName ? (


                  <button

                    onClick={logout}

                    className="w-full bg-red-500 text-white py-3 rounded-xl"

                  >

                    Logout

                  </button>


                ) : (


                  <NavLink

                    to="/login"

                    className="block text-center bg-sky-500 text-white py-3 rounded-xl"

                  >

                    Login

                  </NavLink>


                )
              }




            </div>


          </div>


        )
      }




    </>

  );

};


export default Navbar;