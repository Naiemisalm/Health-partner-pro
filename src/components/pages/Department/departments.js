import {
  FaHeartbeat,
  FaTooth,
  FaBrain,
  FaEye,
  FaBaby,
  FaStethoscope,
} from "react-icons/fa";


export const departments = [

  {
    id: 1,
    title: "Cardiology",
    icon: FaHeartbeat,
    color: "text-red-500",
    description: "Expert heart care with advanced diagnosis and treatment.",
    details:
      "We provide ECG, Echo, Angiography, Heart Surgery and advanced cardiac care.",

    services: [
      {
        id: 101,
        name: "ECG",
        doctors: [
          { name: "Dr. Rahman", specialization: "Cardiologist" },
          { name: "Dr. Hasan", specialization: "Heart Specialist" },
        ],
      },
      {
        id: 102,
        name: "Echo",
        doctors: [
          { name: "Dr. Ahmed", specialization: "Cardiac Imaging" },
        ],
      },
      {
        id: 103,
        name: "Angiography",
        doctors: [
          { name: "Dr. Karim", specialization: "Interventional Cardiology" },
        ],
      },
      {
        id: 104,
        name: "Heart Surgery",
        doctors: [
          { name: "Dr. Sinha", specialization: "Cardiac Surgeon" },
        ],
      },
    ],
  },


  {
    id: 2,
    title: "Dental Care",
    icon: FaTooth,
    color: "text-blue-500",
    description: "Complete dental services for healthy smile.",
    details:
      "We provide root canal, braces, implants and cosmetic dentistry.",

    services: [
      {
        id: 201,
        name: "Root Canal",
        doctors: [
          { name: "Dr. Lina", specialization: "Endodontist" },
        ],
      },
      {
        id: 202,
        name: "Implant",
        doctors: [
          { name: "Dr. John", specialization: "Oral Surgeon" },
        ],
      },
      {
        id: 203,
        name: "Braces",
        doctors: [
          { name: "Dr. Sarah", specialization: "Orthodontist" },
        ],
      },
      {
        id: 204,
        name: "Whitening",
        doctors: [
          { name: "Dr. Ahmed", specialization: "Cosmetic Dentist" },
        ],
      },
    ],
  },


  {
    id: 3,
    title: "Neurology",
    icon: FaBrain,
    color: "text-purple-500",
    description: "Brain and nervous system treatment.",
    details:
      "We treat stroke, migraine, epilepsy and neurological disorders.",

    services: [
      {
        id: 301,
        name: "Stroke",
        doctors: [
          { name: "Dr. Kamal", specialization: "Neurologist" },
        ],
      },
      {
        id: 302,
        name: "Migraine",
        doctors: [
          { name: "Dr. Rafi", specialization: "Brain Specialist" },
        ],
      },
    ],
  },


  {
    id: 4,
    title: "Eye Care",
    icon: FaEye,
    color: "text-green-500",
    description: "Vision and eye treatment.",
    details:
      "We provide cataract, LASIK and retina care.",

    services: [
      {
        id: 401,
        name: "Cataract",
        doctors: [
          { name: "Dr. Noor", specialization: "Ophthalmologist" },
        ],
      },
      {
        id: 402,
        name: "LASIK",
        doctors: [
          { name: "Dr. Ayesha", specialization: "Eye Surgeon" },
        ],
      },
    ],
  },


  {
    id: 5,
    title: "Pediatrics",
    icon: FaBaby,
    color: "text-pink-500",
    description: "Child healthcare services.",
    details:
      "Newborn care, vaccination and child health support.",

    services: [
      {
        id: 501,
        name: "Vaccination",
        doctors: [
          { name: "Dr. Tania", specialization: "Child Specialist" },
        ],
      },
      {
        id: 502,
        name: "Newborn Care",
        doctors: [
          { name: "Dr. Rakib", specialization: "Pediatrician" },
        ],
      },
    ],
  },


  {
    id: 6,
    title: "General Medicine",
    icon: FaStethoscope,
    color: "text-sky-500",
    description: "Primary healthcare for all ages.",
    details:
      "Fever, diabetes, blood pressure and general treatment.",

    services: [
      {
        id: 601,
        name: "Fever",
        doctors: [
          { name: "Dr. Sumon", specialization: "General Physician" },
        ],
      },
      {
        id: 602,
        name: "Diabetes",
        doctors: [
          { name: "Dr. Rina", specialization: "Endocrinologist" },
        ],
      },
    ],
  },

];