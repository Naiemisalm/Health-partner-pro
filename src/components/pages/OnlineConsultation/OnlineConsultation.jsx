import Speciality from "../Home/Speciality/Speciality";


const OnlineConsultation = () => {


  return (

    <section className="
    min-h-screen
    bg-[#F8FAFC]
    py-10
    ">


      <Speciality

        online={true}

        layout="grid"

        title="Consult Online with Specialist Doctors"

        description="Get expert medical advice from experienced doctors anytime, anywhere."

      />


    </section>

  );

};


export default OnlineConsultation;