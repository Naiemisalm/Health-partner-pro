import React from "react";
import {
  Smile,
  Hand,
  MessageCircle,
  AlertTriangle,
  Brain,
} from "lucide-react";

const Symptoms = () => {

  const fastSigns = [
    {
      icon: Smile,
      letter: "F",
      title: "Face Drooping",
      description:
        "One side of the face may feel weak or numb. Ask the person to smile and check for unevenness.",
    },
    {
      icon: Hand,
      letter: "A",
      title: "Arm Weakness",
      description:
        "Sudden weakness or numbness in one arm or one side of the body can be a warning sign.",
    },
    {
      icon: MessageCircle,
      letter: "S",
      title: "Speech Difficulty",
      description:
        "Slurred speech, confusion, or difficulty understanding words may indicate stroke.",
    },
    {
      icon: AlertTriangle,
      letter: "T",
      title: "Time to Act",
      description:
        "Call emergency services immediately. Fast treatment can save brain function.",
    },
  ];


  const otherSymptoms = [
    "Sudden severe headache",
    "Dizziness or loss of balance",
    "Vision problems",
    "Confusion or trouble understanding",
    "Difficulty walking",
    "Numbness on one side of the body",
  ];


  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="
            inline-flex
            items-center
            gap-2
            bg-red-100
            text-red-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <AlertTriangle size={16}/>
            Stroke Warning Signs
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Recognize Stroke Symptoms Early
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Recognizing symptoms quickly and getting emergency care can make a
            major difference in stroke recovery.
          </p>


        </div>





        {/* FAST Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


          {fastSigns.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >


                <div className="
                  flex
                  items-center
                  justify-between
                ">

                  <div className="
                    w-14
                    h-14
                    rounded-xl
                    bg-red-100
                    text-red-600
                    flex
                    items-center
                    justify-center
                  ">
                    <Icon size={28}/>
                  </div>


                  <span className="
                    text-4xl
                    font-bold
                    text-red-100
                  ">
                    {item.letter}
                  </span>

                </div>



                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-gray-900
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-3
                  text-gray-600
                  text-sm
                  leading-relaxed
                ">
                  {item.description}
                </p>


              </div>

            );

          })}


        </div>





        {/* Other Symptoms */}
        <div className="
          mt-14
          bg-white
          rounded-3xl
          p-6
          sm:p-10
          border
          border-gray-100
        ">


          <div className="
            flex
            items-center
            gap-3
            mb-6
          ">

            <div className="
              w-12
              h-12
              rounded-xl
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
            ">
              <Brain size={26}/>
            </div>


            <h3 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              Other Common Symptoms
            </h3>

          </div>



          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          ">


            {otherSymptoms.map((symptom,index)=>(

              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  bg-gray-50
                  rounded-xl
                  p-4
                  text-gray-700
                "
              >

                <span className="
                  w-2
                  h-2
                  rounded-full
                  bg-blue-600
                "></span>

                {symptom}

              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
};

export default Symptoms;