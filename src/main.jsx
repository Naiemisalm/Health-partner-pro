import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Department from "./components/pages/Department/Department";
import DepartmentDetails from "./components/pages/Department/DepartmentDetails";
import ServiceDetails from "./components/pages/Department/ServiceDetails";

import ECG from "./components/pages/Department/Cardiology/ECG/ECG";
import Echo  from "./components/pages/Department/Cardiology/Echo/Echo";
import Angiography   from "./components/pages/Department/Cardiology/Angiography/Angiography";


import Doctor from "./components/pages/Doctors/Doctor/Doctors";
import Appointment from "./components/pages/Doctors/Appointment/Appointment";
import Payment from "./components/pages/Doctors/Payment/Payment";

import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

import AdminDashboard from "./components/Admin/AdminDashboard";


import GeneralConsultation from "./components/pages/Services/GeneralConsultation/GeneralConsultation";
import DiagnosticServices from "./components/pages/Services/DiagnosticServices/DiagnosticServices";
import CardiologyCare from "./components/pages/Services/GeneralConsultation/CardiologyCare/CardiologyCare";
import WomenHealthcare from "./components/pages/Services/WomenHealthcare/WomenHealthcare";
import ChildHealthcare from "./components/pages/Services/ChildHealthcare/ChildHealthcare";
import Telemedicine from "./components/pages/Services/Telemedicine/Telemedicine";


import GeneralPhysician from "./components/pages/Home/Speciality/SpecialityDetails/GeneralPhysician/GeneralPhysician";
import DoctorProfile from "./components/pages/Home/Speciality/SpecialityDetails/GeneralPhysician/DoctorProfile";

import Cardiologist from "./components/pages/Home/Speciality/SpecialityDetails/Cardiologist/Cardiologist";

import Neurologist from "./components/pages/Home/Speciality/SpecialityDetails/Neurologist/Neurologist";
import NeurologistDoctorsProfile from "./components/pages/Home/Speciality/SpecialityDetails/Neurologist/NeurologistDoctorsProfile";
import NeurologistBooking from "./components/pages/Home/Speciality/SpecialityDetails/Neurologist/NeurologistBooking";

import Orthopedic from "./components/pages/Home/Speciality/SpecialityDetails/Orthopedic/Orthopedic";
import OrthopedicDoctorsProfile from "./components/pages/Home/Speciality/SpecialityDetails/Orthopedic/OrthopedicDoctorsProfile";
import OrthopedicBooking from "./components/pages/Home/Speciality/SpecialityDetails/Orthopedic/OrthopedicBooking";

import Dentist from "./components/pages/Home/Speciality/SpecialityDetails/Dentist/Dentist";
import DentistDoctorsProfile from "./components/pages/Home/Speciality/SpecialityDetails/Dentist/DentistDoctorsProfile";
import DentistBooking from "./components/pages/Home/Speciality/SpecialityDetails/Dentist/DentistBooking";

import Dermatologist from "./components/pages/Home/Speciality/SpecialityDetails/Dermatologist/Dermatologist";
import DermatologistDoctorsProfile from "./components/pages/Home/Speciality/SpecialityDetails/Dermatologist/DermatologistDoctorsProfile";
import DermatologistBooking from "./components/pages/Home/Speciality/SpecialityDetails/Dermatologist/DermatologistBooking";
import RootCanal from "./components/pages/Department/DentalCare/RootCanals/RootCanal/RootCanal";
import Implant from "./components/pages/Department/DentalCare/Implant/Implant/Implant";
import Braces from "./components/pages/Department/DentalCare/Braces/Brace/Braces";
import Whitening from "./components/pages/Department/DentalCare/Whitening/Whitening/Whitening";
import Stroke from "./components/pages/Department/Neurology/Stroke/Stroke/Stroke";
import Migraine from "./components/pages/Department/Neurology/Migraine/Migraine";
import Cataract from "./components/pages/Department/Eye Care/Cataract/Cataract/Cataract";
import LASIK from "./components/pages/Department/Eye Care/LASIK/LASIK/LASIK";
import Vaccination from "./components/pages/Department/Pediatrics/Vaccination/Vaccination/Vaccination";
import NewbornCare from "./components/pages/Department/Pediatrics/Newborn Care/NewbornCare/NewbornCare";
import Fever from "./components/pages/Department/General Medicine/Fever/Fever/Fever";
import Diabetes from "./components/pages/Department/General Medicine/Diabetes/Diabetes/Diabetes";
import BlogDetails from "./components/pages/Blog/BlogDetails";



const router = createBrowserRouter([

{
  path:"/",
  element:<Layout/>,

  children:[


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
      path:"/blog-details/:id",
      element:<BlogDetails/>
    },



    // Department

    {
      path:"department",
      element:<Department/>
    },


    // ECG special page
    {
      path:"department/cardiology/ecg",
      element:<ECG/>
    },
    {
      path:"department/cardiology/echo",
      element:<Echo/>
    },
    {
      path:"department/cardiology/angiography",
      element:<Angiography/>
    },
  
// Dentral special page

    {
  path:"department/dental/root-canal",
  element:<RootCanal/>
},

    {
 path:"department/dental/implant",
 element:<Implant/>
},
{
 path:"department/dental/braces",
 element:<Braces/>
},
{
 path:"department/dental/whitening",
 element:<Whitening/>
},
// Neurology special page

{
 path:"/department/neurology/stroke",
 element:<Stroke/>
},
{
 path:"/department/neurology/migraine",
 element:<Migraine/>
},
// Eye Care special page

{
 path:"department/eye-care/cataract",
 element:<Cataract/>
},
{
 path:"department/eye/lasik",
 element:<LASIK/>
},
//pediatrics special page

{
 path:"/department/pediatrics/vaccination",
 element:<Vaccination/>
},
{
  path:"/department/pediatrics/newborn-care",
  element:<NewbornCare/>
},

//General Medicine special page

{
  path:"/department/general-medicine/fever",
  element:<Fever/>
},
{
  path:"/department/general-medicine/diabetes",
  element:<Diabetes/>
},
    // Dynamic department
    {
      path:"department/:id",
      element:<DepartmentDetails/>
    },


    // Dynamic service
    {
      path:"service/:id",
      element:<ServiceDetails/>
    },



    // Doctors

    {
      path:"doctors",
      element:<Doctor/>
    },


    {
      path:"appointment/:id",
      element:<Appointment/>
    },


    {
      path:"payment",
      element:<Payment/>
    },


    {
      path:"doctor/:id",
      element:<DoctorProfile/>
    },



    // Services

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



    // Speciality

    {
      path:"general-physician",
      element:<GeneralPhysician/>
    },


    {
      path:"cardiologist",
      element:<Cardiologist/>
    },


    {
      path:"neurologist",
      element:<Neurologist/>
    },


    {
      path:"neurologist-doctor/:id",
      element:<NeurologistDoctorsProfile/>
    },


    {
      path:"neurologist-booking/:id",
      element:<NeurologistBooking/>
    },


    {
      path:"orthopedic",
      element:<Orthopedic/>
    },


    {
      path:"orthopedic-doctors-profile/:id",
      element:<OrthopedicDoctorsProfile/>
    },


    {
      path:"orthopedic-booking/:id",
      element:<OrthopedicBooking/>
    },


    {
      path:"dentist",
      element:<Dentist/>
    },


    {
      path:"dentist-doctors-profile/:id",
      element:<DentistDoctorsProfile/>
    },


    {
      path:"dentist-booking/:id",
      element:<DentistBooking/>
    },


    {
      path:"dermatologist",
      element:<Dermatologist/>
    },


    {
      path:"dermatologist-doctors-profile/:id",
      element:<DermatologistDoctorsProfile/>
    },


    {
      path:"dermatologist-booking/:id",
      element:<DermatologistBooking/>
    },


    {
      path:"admin",
      element:<AdminDashboard/>
    },


  ]

}

]);



createRoot(
  document.getElementById("root")
).render(

<StrictMode>

<RouterProvider router={router}/>

</StrictMode>

);