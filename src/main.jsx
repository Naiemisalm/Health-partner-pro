import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Department from "./components/pages/Department/Department";
import Doctor from "./components/pages/Doctors/Doctor/Doctors";
import Appointment from "./components/pages/Doctors/Appointment/Appointment";
import DepartmentDetails from "./components/pages/Department/DepartmentDetails";

import AdminDashboard from "./components/Admin/AdminDashboard";

import Payment from "./components/pages/Doctors/Payment/Payment";

import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";


import GeneralConsultation from "./components/pages/Services/GeneralConsultation/GeneralConsultation";
import DiagnosticServices from "./components/pages/Services/DiagnosticServices/DiagnosticServices";

import CardiologyCare from "./components/pages/Services/GeneralConsultation/CardiologyCare/CardiologyCare";

import WomenHealthcare from "./components/pages/Services/WomenHealthcare/WomenHealthcare";

import ChildHealthcare from "./components/pages/Services/ChildHealthcare/ChildHealthcare";

import Telemedicine from "./components/pages/Services/Telemedicine/Telemedicine";


import GeneralPhysician from "./components/pages/Home/Speciality/SpecialityDetails/GeneralPhysician/GeneralPhysician";


// Doctor Profile
import DoctorProfile from "./components/pages/Home/Speciality/SpecialityDetails/GeneralPhysician/DoctorProfile";
import AppointmentBooking from "./components/pages/Home/Speciality/SpecialityDetails/GeneralPhysician/AppointmentBooking";
import Cardiologist from "./components/pages/Home/Speciality/SpecialityDetails/Cardiologist/Cardiologist";
import Neurologist from "./components/pages/Home/Speciality/SpecialityDetails/Neurologist/Neurologist";
import NeurologistDoctorsProfile from "./components/pages/Home/Speciality/SpecialityDetails/Neurologist/NeurologistDoctorsProfile";
import NeurologistBooking from "./components/pages/Home/Speciality/SpecialityDetails/Neurologist/NeurologistBooking";
import Orthopedic from "./components/pages/Home/Speciality/SpecialityDetails/Orthopedic/Orthopedic";
import OrthopedicDoctorsProfile from "./components/pages/Home//Speciality/SpecialityDetails/Orthopedic/OrthopedicDoctorsProfile";
import OrthopedicBooking from "./components/pages/Home/Speciality/SpecialityDetails/Orthopedic/OrthopedicBooking";
import Dentist from "./components/pages/Home/Speciality/SpecialityDetails/Dentist/Dentist";
import DentistDoctorsProfile from "./components/pages/Home/Speciality/SpecialityDetails/Dentist/DentistDoctorsProfile";
import DentistBooking from "./components/pages/Home/Speciality/SpecialityDetails/Dentist/DentistBooking";
import Dermatologist from "./components/pages/Home/Speciality/SpecialityDetails/Dermatologist/Dermatologist";
import DermatologistDoctorsProfile  from "./components/pages/Home/Speciality/SpecialityDetails/Dermatologist/DermatologistDoctorsProfile";
import DermatologistBooking  from "./components/pages/Home/Speciality/SpecialityDetails/Dermatologist/DermatologistBooking";

const router = createBrowserRouter([

{
path: "/",

element: <Layout />,


children: [


{
index:true,
element:<Home/>
},


{
path:"about",
element:<About/>
},



{
path:"login",
element:<Login/>
},



{
path:"register",
element:<Register/>
},



{
path:"contact",
element:<Contact/>
},



{
path:"blog",
element:<Blog/>
},



{
path:"department",
element:<Department/>
},



{
path:"doctors",
element:<Doctor/>
},



{
path:"payment",
element:<Payment/>
},




// Doctor Appointment

{
path:"appointment/:id",
element:<Appointment/>
},




// Doctor Profile

{
path:"doctor/:id",
element:<DoctorProfile/>
},





{
path:"department/:slug",
element:<DepartmentDetails/>
},





{
path:"general-consultation",
element:<GeneralConsultation/>
},



{
path:"diagnostic-services",
element:<DiagnosticServices/>
},



{
path:"cardiology-care",
element:<CardiologyCare/>
},



{
path:"women-healthcare",
element:<WomenHealthcare/>
},



{
path:"child-healthcare",
element:<ChildHealthcare/>
},



{
path:"telemedicine",
element:<Telemedicine/>
},





// Speciality Details

{
path:"general-physician",
element:<GeneralPhysician/>
},
{
path:"cardiologist",
element:<Cardiologist/>
},

// Neurologist Details
{
path:"neurologist",
element:<Neurologist/>
},
{
path:"/neurologist-doctor/:id",
element:<NeurologistDoctorsProfile/>
},
{
  path:"/neurologist-booking/:id",
  element:<NeurologistBooking/>
},


// orthopedic Details

{
  path:"orthopedic",
  element:<Orthopedic/>
},
{
  path:"/orthopedic-doctors-profile/:id",
  element:<OrthopedicDoctorsProfile/>
},
{
  path:"//orthopedic-booking/:id",
  element:<OrthopedicBooking/>
},

// Dentist Details

{
  path:"dentist",
  element:<Dentist/>
},
{
  path:"/dentist-doctors-profile/:id",
  element:<DentistDoctorsProfile/>
},
{
  path:"//dentist-booking/:id",
  element:<DentistBooking/>
},

// Dermatologist Details

{
  path:"dermatologist",
  element:<Dermatologist/>
}, 
{
  path:"/dermatologist-doctors-profile/:id",
  element:<DermatologistDoctorsProfile/>
}, 
{
  path:"/dermatologist-booking/:id",
  element:<DermatologistBooking/>
}, 

{
path:"admin",
element:<AdminDashboard/>
},



],


},


]);



createRoot(document.getElementById("root")).render(

<StrictMode>

<RouterProvider router={router}/>

</StrictMode>

);