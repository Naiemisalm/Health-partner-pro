import { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctors from "../../Doctors/data/data";

export default function Doctor() {

  const navigate = useNavigate();

  const [showAll, setShowAll] = useState(false);

  const [search, setSearch] = useState("");

  const [specialty, setSpecialty] = useState("");

  const [location, setLocation] = useState("");

  const [rating, setRating] = useState("");



  const handleBook = (id) => {
    navigate(`/appointment/${id}`);
  };



  const specialties = [
    ...new Set(doctors.map((doc) => doc.specialty))
  ];


  const locations = [
    ...new Set(doctors.map((doc) => doc.location))
  ];




  const filteredDoctors = doctors.filter((doc) => {


    const searchMatch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase());



    const specialtyMatch =
      specialty === "" ||
      doc.specialty === specialty;



    const locationMatch =
      location === "" ||
      doc.location === location;



    const ratingMatch =
      rating === "" ||
      doc.rating >= Number(rating);



    return (
      searchMatch &&
      specialtyMatch &&
      locationMatch &&
      ratingMatch
    );

  });




  const visibleDoctors = showAll
    ? filteredDoctors
    : filteredDoctors.slice(0, 6);




  return (

    <section className="py-16 bg-gray-50">


      <div className="max-w-7xl mx-auto px-4 sm:px-6">



        {/* Header */}

        <div className="text-center mb-10">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Expert Doctors
          </h1>

          <p className="text-gray-500 mt-3">
            Find the best doctors and book your appointment easily.
          </p>

        </div>






        {/* Filter */}

        <div className="
        bg-white shadow rounded-2xl p-5 mb-10
        grid grid-cols-1 md:grid-cols-4 gap-4
        ">


          <input

            type="text"

            placeholder="Search doctor..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="
            px-4 py-3 border rounded-xl
            outline-none focus:ring-2 
            focus:ring-blue-500
            "

          />





          <select

            value={specialty}

            onChange={(e)=>setSpecialty(e.target.value)}

            className="
            px-4 py-3 border rounded-xl
            text-gray-600
            "

          >

            <option value="">
              Select Specialty
            </option>


            {
              specialties.map((item)=>(
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            }


          </select>







          <select

            value={location}

            onChange={(e)=>setLocation(e.target.value)}

            className="
            px-4 py-3 border rounded-xl
            text-gray-600
            "

          >

            <option value="">
              Select Location
            </option>


            {
              locations.map((item)=>(
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            }


          </select>







          <select

            value={rating}

            onChange={(e)=>setRating(e.target.value)}

            className="
            px-4 py-3 border rounded-xl
            text-gray-600
            "

          >

            <option value="">
              Select Rating
            </option>


            <option value="4.5">
              4.5+ ⭐
            </option>


            <option value="4.8">
              4.8+ ⭐
            </option>


          </select>



        </div>







        {/* View More Button */}

        <div className="text-center mb-8">


          <button

            onClick={()=>setShowAll(!showAll)}

            className="
            bg-blue-600 text-white 
            px-8 py-3 rounded-xl
            font-semibold
            hover:bg-blue-700
            transition
            "

          >

            {
              showAll
              ?
              "Show Less Doctors"
              :
              "View More Doctors"
            }


          </button>


        </div>







        {/* Cards */}


        {
          visibleDoctors.length === 0 ?

          (

            <h2 className="
            text-center text-gray-500 text-xl
            ">
              No Doctor Found
            </h2>

          )


          :

          (

          <div className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8
          ">


          {
            visibleDoctors.map((doc)=>(


              <div

                key={doc.id}

                className="
                bg-white rounded-2xl
                shadow-md hover:shadow-xl
                transition p-6
                "

              >



                <div className="text-center">


                  <img

                    src={doc.image}

                    alt={doc.name}

                    className="
                    w-28 h-28 rounded-full
                    mx-auto object-cover
                    border-4 border-blue-100
                    "

                  />


                  <h2 className="
                  mt-4 text-xl font-bold text-gray-800
                  ">
                    {doc.name}
                  </h2>


                  <p className="
                  text-blue-600 font-medium
                  ">
                    {doc.specialty}
                  </p>


                  <p className="
                  text-sm text-gray-500 mt-1
                  ">
                    {doc.qualification}
                  </p>


                </div>





                <div className="
                mt-5 space-y-3 text-sm text-gray-600
                ">


                  <div className="flex justify-between">
                    <span>Experience</span>
                    <b>{doc.experience}</b>
                  </div>


                  <div className="flex justify-between">
                    <span>Hospital</span>
                    <b className="text-right">
                      {doc.hospital}
                    </b>
                  </div>


                  <div className="flex justify-between">
                    <span>Location</span>
                    <b>
                      {doc.location}
                    </b>
                  </div>


                  <div className="flex justify-between">
                    <span>Rating</span>

                    <b className="text-yellow-500">
                      ⭐ {doc.rating} ({doc.reviews})
                    </b>

                  </div>


                  <div className="flex justify-between">
                    <span>Consultation</span>

                    <b className="text-green-600">
                      ৳{doc.consultationFee}
                    </b>

                  </div>


                </div>





                <button

                  onClick={()=>handleBook(doc.id)}

                  className="
                  w-full mt-6
                  bg-blue-600 text-white
                  py-3 rounded-xl
                  font-semibold
                  hover:bg-blue-700
                  transition
                  "

                >

                  Book Appointment

                </button>



              </div>


            ))
          }


          </div>

          )

        }



      </div>


    </section>

  );

}