import {
  FaHeartbeat,
  FaRunning,
  FaChartLine,
  FaMobileAlt,
  FaClipboardCheck,
  FaNotesMedical,
} from "react-icons/fa";


export const ecgServices = [

  {
    id: 1,
    icon: FaHeartbeat,
    title: "Resting ECG",
    shortTitle: "Standard ECG Test",
    description:
      "A basic ECG test that records the electrical activity of your heart while you are resting.",
    duration: "5-10 Minutes",
    category: "Diagnostic",
  },


  {
    id: 2,
    icon: FaRunning,
    title: "Stress ECG (TMT)",
    shortTitle: "Exercise Heart Test",
    description:
      "A stress ECG monitors your heart performance during physical activity to identify cardiac problems.",
    duration: "20-30 Minutes",
    category: "Cardiac Test",
  },


  {
    id: 3,
    icon: FaChartLine,
    title: "Holter Monitoring",
    shortTitle: "24-48 Hour Monitoring",
    description:
      "A portable ECG device continuously records your heart rhythm during daily activities.",
    duration: "24-48 Hours",
    category: "Monitoring",
  },


  {
    id: 4,
    icon: FaMobileAlt,
    title: "Ambulatory ECG",
    shortTitle: "Portable ECG Monitoring",
    description:
      "Tracks your heart activity while you continue normal daily activities.",
    duration: "1-7 Days",
    category: "Advanced Monitoring",
  },


  {
    id: 5,
    icon: FaClipboardCheck,
    title: "Event Monitor",
    shortTitle: "Symptom Based Recording",
    description:
      "Records heart rhythm during symptoms like dizziness, chest discomfort, or palpitations.",
    duration: "Days to Weeks",
    category: "Monitoring",
  },


  {
    id: 6,
    icon: FaNotesMedical,
    title: "ECG Interpretation",
    shortTitle: "Expert Report Analysis",
    description:
      "Detailed ECG report evaluation by experienced cardiologists for accurate diagnosis.",
    duration: "Same Day",
    category: "Consultation",
  },

];