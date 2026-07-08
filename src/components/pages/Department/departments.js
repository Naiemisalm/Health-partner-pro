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
    slug: "cardiology",
    title: "Cardiology",
    icon: FaHeartbeat,
    color: "text-red-500",
    description: "Expert heart care with advanced diagnosis and treatment.",
    details:
      "We provide ECG, Echo, Angiography, Heart Surgery and advanced cardiac care.",

    services: [
      {
        name: "ECG",
        slug: "ecg",
        doctors: [
          { name: "Dr. Rahman", specialization: "Cardiologist" },
          { name: "Dr. Hasan", specialization: "Heart Specialist" },
        ],
      },
      {
        name: "Echo",
        slug: "echo",
        doctors: [
          { name: "Dr. Ahmed", specialization: "Cardiac Imaging" },
        ],
      },
      {
        name: "Angiography",
        slug: "angiography",
        doctors: [
          { name: "Dr. Karim", specialization: "Interventional Cardiology" },
        ],
      },
      {
        name: "Heart Surgery",
        slug: "heart-surgery",
        doctors: [
          { name: "Dr. Sinha", specialization: "Cardiac Surgeon" },
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "dental-care",
    title: "Dental Care",
    icon: FaTooth,
    color: "text-blue-500",
    description: "Complete dental services for healthy smile.",
    details:
      "We provide root canal, braces, implants and cosmetic dentistry.",

    services: [
      {
        name: "Root Canal",
        slug: "root-canal",
        doctors: [
          { name: "Dr. Lina", specialization: "Endodontist" },
        ],
      },
      {
        name: "Implant",
        slug: "implant",
        doctors: [
          { name: "Dr. John", specialization: "Oral Surgeon" },
        ],
      },
      {
        name: "Braces",
        slug: "braces",
        doctors: [
          { name: "Dr. Sarah", specialization: "Orthodontist" },
        ],
      },
      {
        name: "Whitening",
        slug: "whitening",
        doctors: [
          { name: "Dr. Ahmed", specialization: "Cosmetic Dentist" },
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "neurology",
    title: "Neurology",
    icon: FaBrain,
    color: "text-purple-500",
    description: "Brain and nervous system treatment.",
    details:
      "We treat stroke, migraine, epilepsy and neurological disorders.",

    services: [
      {
        name: "Stroke",
        slug: "stroke",
        doctors: [
          { name: "Dr. Kamal", specialization: "Neurologist" },
        ],
      },
      {
        name: "Migraine",
        slug: "migraine",
        doctors: [
          { name: "Dr. Rafi", specialization: "Brain Specialist" },
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "eye-care",
    title: "Eye Care",
    icon: FaEye,
    color: "text-green-500",
    description: "Vision and eye treatment.",
    details:
      "We provide cataract, LASIK and retina care.",

    services: [
      {
        name: "Cataract",
        slug: "cataract",
        doctors: [
          { name: "Dr. Noor", specialization: "Ophthalmologist" },
        ],
      },
      {
        name: "LASIK",
        slug: "lasik",
        doctors: [
          { name: "Dr. Ayesha", specialization: "Eye Surgeon" },
        ],
      },
    ],
  },

  {
    id: 5,
    slug: "pediatrics",
    title: "Pediatrics",
    icon: FaBaby,
    color: "text-pink-500",
    description: "Child healthcare services.",
    details:
      "Newborn care, vaccination and child health support.",

    services: [
      {
        name: "Vaccination",
        slug: "vaccination",
        doctors: [
          { name: "Dr. Tania", specialization: "Child Specialist" },
        ],
      },
      {
        name: "Newborn Care",
        slug: "newborn-care",
        doctors: [
          { name: "Dr. Rakib", specialization: "Pediatrician" },
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "general-medicine",
    title: "General Medicine",
    icon: FaStethoscope,
    color: "text-sky-500",
    description: "Primary healthcare for all ages.",
    details:
      "Fever, diabetes, blood pressure and general treatment.",

    services: [
      {
        name: "Fever",
        slug: "fever",
        doctors: [
          { name: "Dr. Sumon", specialization: "General Physician" },
        ],
      },
      {
        name: "Diabetes",
        slug: "diabetes",
        doctors: [
          { name: "Dr. Rina", specialization: "Endocrinologist" },
        ],
      },
    ],
  },
];