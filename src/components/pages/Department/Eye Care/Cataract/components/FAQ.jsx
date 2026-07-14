import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);


  const faqs = [
    {
      question: "Cataract বা ছানি কী?",
      answer:
        "Cataract হলো চোখের প্রাকৃতিক লেন্স ঘোলা হয়ে যাওয়ার একটি সমস্যা। এর কারণে ধীরে ধীরে দৃষ্টি ঝাপসা হতে পারে।",
    },
    {
      question: "ছানি কি ওষুধে ভালো হয়?",
      answer:
        "সাধারণত Cataract ওষুধ দিয়ে দূর করা যায় না। দৃষ্টিশক্তি বেশি কমে গেলে Cataract Surgery এর মাধ্যমে চিকিৎসা করা হয়।",
    },
    {
      question: "Cataract Surgery কি নিরাপদ?",
      answer:
        "আধুনিক প্রযুক্তির Cataract Surgery সাধারণত একটি নিরাপদ ও কার্যকর পদ্ধতি। অভিজ্ঞ চক্ষু বিশেষজ্ঞের মাধ্যমে করলে ভালো ফল পাওয়া যায়।",
    },
    {
      question: "Cataract Surgery কত সময় লাগে?",
      answer:
        "সাধারণত আধুনিক Phaco Surgery সম্পন্ন হতে অল্প সময় লাগে। রোগীর অবস্থা অনুযায়ী সময় কিছুটা পরিবর্তিত হতে পারে।",
    },
    {
      question: "অপারেশনের পর কতদিনে দৃষ্টি ভালো হয়?",
      answer:
        "বেশিরভাগ রোগীর দৃষ্টি ধীরে ধীরে উন্নত হয়। চিকিৎসকের পরামর্শ অনুযায়ী চোখের যত্ন নেওয়া গুরুত্বপূর্ণ।",
    },
    {
      question: "কখন Cataract অপারেশন প্রয়োজন?",
      answer:
        "যখন ছানির কারণে দৈনন্দিন কাজ যেমন পড়া, গাড়ি চালানো বা চলাফেরায় সমস্যা হয়, তখন চিকিৎসক অপারেশনের পরামর্শ দিতে পারেন।",
    },
  ];



  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
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
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <HelpCircle size={16}/>
            Cataract FAQ
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
            Cataract, Surgery এবং চিকিৎসা সম্পর্কে সাধারণ প্রশ্নের উত্তর এখানে
            দেওয়া হয়েছে।
          </p>


        </div>







        {/* FAQ List */}
        <div className="space-y-4">


          {faqs.map((faq,index)=>(

            <div
              key={index}
              className="
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                bg-gray-50
                hover:border-blue-200
                transition
              "
            >



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
                    text-blue-600
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