import {
  FaHeartbeat,
  FaWaveSquare,
  FaChartLine,
  FaStethoscope,
} from "react-icons/fa";


export const echoServices = [

  {
    id: 1,

    title: "2D Echocardiography",

    shortTitle: "Standard Heart Ultrasound",

    icon: FaHeartbeat,

    description:
      "A non-invasive ultrasound test that creates detailed images of heart chambers, valves and overall heart function.",

    duration: "20-30 Minutes",

    category: "Diagnostic",

  },


  {
    id: 2,

    title: "Color Doppler Echo",

    shortTitle: "Blood Flow Analysis",

    icon: FaWaveSquare,

    description:
      "Advanced echocardiography that evaluates blood flow through heart valves and detects abnormalities.",

    duration: "30-45 Minutes",

    category: "Advanced Imaging",

  },


  {
    id: 3,

    title: "Stress Echocardiography",

    shortTitle: "Exercise Heart Assessment",

    icon: FaChartLine,

    description:
      "Evaluates heart performance during physical stress to identify possible cardiac issues.",

    duration: "45-60 Minutes",

    category: "Cardiac Test",

  },


  {
    id: 4,

    title: "Transesophageal Echo (TEE)",

    shortTitle: "Detailed Cardiac Imaging",

    icon: FaStethoscope,

    description:
      "A specialized echo procedure that provides clearer images of heart structures using advanced ultrasound technology.",

    duration: "30-60 Minutes",

    category: "Advanced Procedure",

  },


];