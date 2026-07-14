import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);


  const faqs = [
    {
      question: "মাইগ্রেন কী?",
      answer:
        "মাইগ্রেন হলো একটি স্নায়ুবিষয়ক সমস্যা, যার কারণে বারবার মাঝারি থেকে তীব্র মাথাব্যথা হতে পারে। অনেক সময় এর সাথে বমি ভাব, আলো ও শব্দে অস্বস্তি দেখা যায়।",
    },
    {
      question: "মাইগ্রেনের প্রধান লক্ষণগুলো কী কী?",
      answer:
        "মাথার এক পাশে ব্যথা, আলো ও শব্দে অস্বস্তি, বমি বমি ভাব, চোখে ঝলকানি দেখা এবং অতিরিক্ত ক্লান্তি মাইগ্রেনের সাধারণ লক্ষণ।",
    },
    {
      question: "মাইগ্রেন কেন হয়?",
      answer:
        "মাইগ্রেনের নির্দিষ্ট একটি কারণ সবসময় পাওয়া যায় না। তবে মানসিক চাপ, ঘুমের পরিবর্তন, কিছু খাবার, পানিশূন্যতা এবং পরিবেশগত পরিবর্তন মাইগ্রেন ট্রিগার করতে পারে।",
    },
    {
      question: "মাইগ্রেন কি পুরোপুরি ভালো হয়?",
      answer:
        "মাইগ্রেন দীর্ঘমেয়াদি সমস্যা হতে পারে, তবে সঠিক চিকিৎসা, জীবনযাত্রার পরিবর্তন এবং নিয়মিত চিকিৎসকের পরামর্শের মাধ্যমে এটি ভালোভাবে নিয়ন্ত্রণ করা সম্ভব।",
    },
    {
      question: "মাইগ্রেন হলে কখন ডাক্তার দেখানো উচিত?",
      answer:
        "যদি মাথাব্যথা খুব বেশি হয়, ঘন ঘন হয়, দৈনন্দিন কাজে সমস্যা সৃষ্টি করে অথবা নতুন ধরনের মাথাব্যথা শুরু হয়, তাহলে বিশেষজ্ঞ চিকিৎসকের পরামর্শ নেওয়া উচিত।",
    },
    {
      question: "মাইগ্রেন কমানোর জন্য কী করা যায়?",
      answer:
        "পর্যাপ্ত ঘুম, নিয়মিত খাবার গ্রহণ, পর্যাপ্ত পানি পান, ট্রিগার এড়িয়ে চলা এবং চিকিৎসকের দেওয়া ওষুধ নিয়ম অনুযায়ী গ্রহণ করলে মাইগ্রেন নিয়ন্ত্রণে রাখা যায়।",
    },
  ];



  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <section className="
      py-16
      sm:py-20
      bg-white
      px-4
      sm:px-6
      lg:px-8
    ">


      <div className="max-w-5xl mx-auto">


        {/* Header */}
        <div className="
          text-center
          mb-12
        ">


          <span className="
            inline-flex
            items-center
            gap-2
            bg-indigo-100
            text-indigo-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <HelpCircle size={16}/>
            মাইগ্রেন FAQ
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            সচরাচর জিজ্ঞাসিত প্রশ্ন
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            মাইগ্রেনের লক্ষণ, কারণ ও চিকিৎসা সম্পর্কে সাধারণ প্রশ্নের উত্তর
            এখানে দেওয়া হয়েছে।
          </p>


        </div>






        {/* FAQ Items */}
        <div className="space-y-4">


          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                bg-gray-50
                hover:border-indigo-200
                transition
              "
            >



              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-5
                  sm:p-6
                  text-left
                "
              >


                <span className="
                  text-base
                  sm:text-lg
                  font-semibold
                  text-gray-900
                ">
                  {faq.question}
                </span>



                <ChevronDown
                  size={22}
                  className={`
                    text-indigo-600
                    flex-shrink-0
                    transition-transform
                    duration-300

                    ${
                      activeIndex === index
                      ? "rotate-180"
                      : ""
                    }
                  `}
                />


              </button>







              {/* Answer */}
              <div
                className={`
                  grid
                  transition-all
                  duration-300

                  ${
                    activeIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                  }
                `}
              >

                <div className="overflow-hidden">


                  <p className="
                    px-5
                    sm:px-6
                    pb-5
                    sm:pb-6
                    text-gray-600
                    leading-relaxed
                  ">
                    {faq.answer}
                  </p>


                </div>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
};

export default FAQ;