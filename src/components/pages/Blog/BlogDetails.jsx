import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../Blog/Blog";


const BlogDetails = () => {

  const { id } = useParams();

  const article = blogs.find(
    (item) => item.id === Number(id)
  );


  if (!article) {
    return (
      <div className="py-20 text-center">
        Article Not Found
      </div>
    );
  }


  return (

    <section className="py-16">

      <div className="max-w-4xl mx-auto px-6">


        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-xl"
        />


        <div className="mt-8">


          <span className="text-[#00C2CB] font-semibold">
            {article.category}
          </span>


          <h1 className="text-4xl font-bold text-[#243b5a] mt-4">
            {article.title}
          </h1>


          <p className="text-gray-500 mt-3">
            By {article.doctor} | {article.readTime}
          </p>


          <p className="text-gray-700 leading-8 mt-8 text-lg">
            {article.content}
          </p>


        </div>


      </div>

    </section>

  );
};


export default BlogDetails;