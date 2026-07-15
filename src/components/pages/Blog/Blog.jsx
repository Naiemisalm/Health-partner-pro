import React from "react";
import { Link } from "react-router-dom";

export const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    category: "Diabetes",
    title: "Understanding Diabetes: Symptoms & Prevention",
    text:
      "Learn about diabetes symptoms, causes, prevention methods and how to maintain a healthy lifestyle.",
    doctor: "Dr. Ahmed Rahman",
    readTime: "5 min read",
    content:
      "Diabetes is one of the most common health conditions that affects millions of people worldwide. It occurs when the body cannot properly control blood sugar levels. Common symptoms include increased thirst, frequent urination, tiredness and unexpected weight changes. Early diagnosis helps prevent serious health complications. A healthy lifestyle plays an important role in controlling diabetes. Eating a balanced diet with vegetables, fruits and whole grains helps maintain healthy blood sugar levels. Regular exercise improves insulin function and supports overall wellness. Avoiding unhealthy foods and reducing sugar intake can lower diabetes risks. Regular medical checkups and blood glucose monitoring are important for better disease management. Maintaining a healthy weight, managing stress and getting proper sleep also help control diabetes. Following medical advice and taking prescribed medicines properly can improve quality of life.",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8",
    category: "Cardiology",
    title: "10 Ways to Keep Your Heart Healthy",
    text:
      "Discover simple lifestyle changes and habits that improve heart health.",
    doctor: "Dr. Sarah Khan",
    readTime: "4 min read",
    content:
      "Heart health is essential for living a long and active life. The heart continuously works to supply oxygen and nutrients throughout the body. A balanced diet, regular exercise and healthy habits can protect the heart from many diseases. Eating fresh fruits, vegetables and healthy fats supports cardiovascular health. Daily walking and physical activity improve blood circulation and strengthen the heart. Avoiding smoking, excessive salt and unhealthy foods reduces heart risks. Managing stress and getting enough sleep are also important for maintaining heart function. Regular health checkups help detect blood pressure and cholesterol problems early. Small lifestyle changes can create long-term benefits and improve overall heart wellness.",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
    category: "General Health",
    title: "When Should You Visit a Doctor?",
    text:
      "Know the warning signs when professional medical advice becomes necessary.",
    doctor: "Dr. Mahmud Hasan",
    readTime: "3 min read",
    content:
      "Visiting a doctor at the right time can prevent serious health complications. Many people ignore small symptoms until they become major problems. Persistent pain, unusual tiredness, fever, breathing difficulties or sudden health changes should not be ignored. Regular health consultations help identify problems early and provide proper treatment. Doctors can guide patients about prevention, lifestyle changes and necessary medical care. Taking care of your health today can protect you from future risks.",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    category: "Health Tips",
    title: "Healthy Lifestyle Habits For Better Living",
    text:
      "Simple daily habits that improve physical and mental wellness.",
    doctor: "Dr. Nusrat Jahan",
    readTime: "6 min read",
    content:
      "A healthy lifestyle is the foundation of a better life. Good nutrition, regular exercise and proper sleep improve physical and mental health. Drinking enough water, eating balanced meals and staying active help the body work properly. Reducing stress through relaxation and positive activities improves overall wellness. Healthy habits developed today can provide benefits for many years.",
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
    category: "Preventive Care",
    title: "Importance of Regular Health Checkups",
    text:
      "Routine checkups help detect health problems early.",
    doctor: "Dr. Fahim Ahmed",
    readTime: "5 min read",
    content:
      "Regular health checkups are important for preventing diseases and maintaining good health. Many health problems can be treated more effectively when detected early. Medical screenings help doctors understand your health condition and identify possible risks. Blood pressure, cholesterol and other important tests provide valuable information about your body. Regular checkups support better health decisions and improve long-term wellness.",
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7",
    category: "Nutrition",
    title: "Nutrition Tips For A Healthy Body",
    text:
      "Learn how balanced nutrition supports immunity and wellness.",
    doctor: "Dr. Maria Islam",
    readTime: "4 min read",
    content:
      "Proper nutrition provides essential nutrients needed for a healthy body. A balanced diet containing proteins, vitamins, minerals and healthy carbohydrates supports immunity and energy. Eating fresh foods and avoiding excessive processed foods improves overall health. Good nutrition helps maintain healthy weight, stronger immunity and better daily performance. Making healthy food choices is an important step toward a healthier lifestyle.",
  },
];


const Blog = ({ showAll = true }) => {

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#243b5a]">
              {showAll ? "Health Articles" : "Latest Articles"}
            </h2>

            <p className="text-gray-600 mt-2">
              Expert health information from our medical professionals.
            </p>
          </div>


          {!showAll && (
            <Link 
              to="/blog"
              className="text-[#00C2CB] font-semibold"
            >
              View All Articles →
            </Link>
          )}

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {displayedBlogs.map((blog)=>(

            <Link
              key={blog.id}
              to={`/blog-details/${blog.id}`}
              className="group"
            >

              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition"
                />


                <div className="p-6">

                  <span className="text-[#00C2CB] text-sm font-semibold">
                    {blog.category}
                  </span>


                  <h3 className="text-2xl font-semibold text-[#243b5a] mt-3">
                    {blog.title}
                  </h3>


                  <p className="text-gray-600 mt-3">
                    {blog.text}
                  </p>


                  <div className="flex justify-between mt-5 text-sm text-gray-500">
                    <span>{blog.doctor}</span>
                    <span>{blog.readTime}</span>
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};


export default Blog;