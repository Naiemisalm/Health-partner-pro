import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    title: "Search careers",
    text: "Voted a top place to work, we take pride in our mission to improve health and well-being.",
    link: "/careers",
  },
  {
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
    title: "Learn about our Institute",
    text: "Support our mission through research, education and practice.",
    link: "/institute",
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    title: "Explore our blog",
    text: "Discover helpful tips about health, wellness and healthcare.",
    link: "/blog-details",
  },
  {
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
    title: "Healthy living tips",
    text: "Find simple ideas and expert advice to improve your lifestyle.",
    link: "/health-tips",
  },
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    title: "Patient resources",
    text: "Explore resources designed to help patients.",
    link: "/patients",
  },
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    title: "Community support",
    text: "Learn how we support communities through care.",
    link: "/community",
  },
];

const Blog = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <Link
              to={blog.link}
              key={index}
              className="block"
            >
              <div className="bg-gray-100 overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer h-full">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-7">
                  <h2 className="text-2xl font-semibold text-[#243b5a] mb-4">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {blog.text}
                  </p>
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