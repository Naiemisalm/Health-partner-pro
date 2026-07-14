import React from "react";
import {
  Brain,
  Moon,
  Utensils,
  Sun,
  Droplets,
  Wind,
  AlertTriangle,
} from "lucide-react";

const Triggers = () => {

  const triggers = [
    {
      icon: Brain,
      title: "মানসিক চাপ (Stress)",
      description:
        "অতিরিক্ত মানসিক চাপ, উদ্বেগ ও দুশ্চিন্তা মাইগ্রেনের ব্যথা শুরু করতে পারে।",
    },
    {
      icon: Moon,
      title: "ঘুমের সমস্যা",
      description:
        "কম ঘুম, অতিরিক্ত ঘুম অথবা ঘুমের সময়ের পরিবর্তন মাইগ্রেনের ঝুঁকি বাড়াতে পারে।",
    },
    {
      icon: Utensils,
      title: "কিছু খাবার",
      description:
        "চকলেট, অতিরিক্ত ক্যাফেইন, প্রক্রিয়াজাত খাবার বা নির্দিষ্ট কিছু খাবার ট্রিগার হতে পারে।",
    },
    {
      icon: Sun,
      title: "উজ্জ্বল আলো",
      description:
        "তীব্র আলো, স্ক্রিনের অতিরিক্ত ব্যবহার বা ঝলকানি মাইগ্রেন বাড়াতে পারে।",
    },
    {
      icon: Droplets,
      title: "পানিশূন্যতা",
      description:
        "পর্যাপ্ত পানি না খাওয়া শরীরে পানিশূন্যতা তৈরি করে মাইগ্রেনের কারণ হতে পারে।",
    },
    {
      icon: Wind,
      title: "পরিবেশগত পরিবর্তন",
      description:
        "আবহাওয়ার পরিবর্তন, তীব্র গন্ধ বা শব্দ অনেকের ক্ষেত্রে মাইগ্রেন ট্রিগার করে।",
    },
  ];



  return (
    <section className="
      py-16
      sm:py-20
      bg-white
      px-4
      sm:px-6
      lg:px-8
    ">


      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="
          max-w-3xl
          mx-auto
          text-center
          mb-12
        ">


          <span className="
            inline-flex
            items-center
            gap-2
            bg-orange-100
            text-orange-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <AlertTriangle size={16}/>
            Migraine Triggers
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            যেসব কারণে মাইগ্রেন বাড়তে পারে
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            প্রত্যেক ব্যক্তির মাইগ্রেন ট্রিগার আলাদা হতে পারে। নিজের ট্রিগার
            চিহ্নিত করলে ব্যথা নিয়ন্ত্রণ করা সহজ হয়।
          </p>


        </div>







        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">



          {triggers.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                  group
                  bg-gray-50
                  rounded-3xl
                  p-6
                  border
                  border-gray-100
                  hover:bg-white
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >


                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-orange-100
                  text-orange-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-orange-600
                  group-hover:text-white
                  transition
                ">
                  <Icon size={30}/>
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
                  leading-relaxed
                ">
                  {item.description}
                </p>



              </div>

            );

          })}



        </div>







        {/* Tip Banner */}
        <div className="
          mt-12
          bg-gradient-to-r
          from-orange-500
          to-amber-500
          rounded-3xl
          p-6
          sm:p-8
          text-white
          flex
          flex-col
          md:flex-row
          items-center
          gap-5
        ">


          <div className="
            w-14
            h-14
            rounded-2xl
            bg-white/20
            flex
            items-center
            justify-center
            flex-shrink-0
          ">
            <AlertTriangle size={30}/>
          </div>



          <div>

            <h3 className="
              text-2xl
              font-bold
            ">
              নিজের মাইগ্রেন ট্রিগার শনাক্ত করুন
            </h3>


            <p className="
              mt-2
              text-orange-100
            ">
              মাথাব্যথার সময়, খাবার, ঘুম ও পরিবেশের তথ্য লিখে রাখলে চিকিৎসকের
              জন্য সঠিক চিকিৎসা পরিকল্পনা করা সহজ হয়।
            </p>


          </div>


        </div>


      </div>


    </section>
  );
};

export default Triggers;