import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);


  const faqs = [
    {
      question: "স্ট্রোক কী?",
      answer:
        "স্ট্রোক হলো একটি গুরুতর স্নায়ুরোগ, যেখানে মস্তিষ্কে রক্ত প্রবাহ বাধাগ্রস্ত হয় অথবা মস্তিষ্কের কোনো রক্তনালী ফেটে যায়। এর ফলে মস্তিষ্কের কোষ ক্ষতিগ্রস্ত হতে পারে।",
    },
    {
      question: "স্ট্রোকের সাধারণ লক্ষণগুলো কী কী?",
      answer:
        "মুখের এক পাশ বেঁকে যাওয়া, হাত বা পায়ের দুর্বলতা, কথা জড়িয়ে যাওয়া, হঠাৎ মাথা ঘোরা, ভারসাম্য হারানো এবং তীব্র মাথাব্যথা স্ট্রোকের প্রধান লক্ষণ।",
    },
    {
      question: "স্ট্রোক হলে কত দ্রুত চিকিৎসা নেওয়া প্রয়োজন?",
      answer:
        "স্ট্রোক একটি জরুরি অবস্থা। যত দ্রুত সম্ভব হাসপাতালে নিয়ে গেলে দ্রুত চিকিৎসা শুরু করা যায় এবং জটিলতা কমানোর সম্ভাবনা বাড়ে।",
    },
    {
      question: "স্ট্রোক নির্ণয়ের জন্য কী কী পরীক্ষা করা হয়?",
      answer:
        "স্ট্রোক শনাক্ত করার জন্য সাধারণত CT Scan, MRI Brain, রক্ত পরীক্ষা এবং নিউরোলজিক্যাল পরীক্ষা করা হয়।",
    },
    {
      question: "স্ট্রোকের পর রোগী কি সুস্থ হতে পারেন?",
      answer:
        "হ্যাঁ, অনেক রোগী চিকিৎসা ও নিয়মিত পুনর্বাসনের মাধ্যমে ভালোভাবে সুস্থ হয়ে উঠতে পারেন। সুস্থতা নির্ভর করে স্ট্রোকের ধরন, আক্রান্ত স্থান এবং চিকিৎসার সময়ের উপর।",
    },
    {
      question: "কীভাবে স্ট্রোকের ঝুঁকি কমানো যায়?",
      answer:
        "উচ্চ রক্তচাপ ও ডায়াবেটিস নিয়ন্ত্রণ, স্বাস্থ্যকর জীবনযাপন, নিয়মিত ব্যায়াম, ধূমপান পরিহার এবং চিকিৎসকের পরামর্শ মেনে চললে স্ট্রোকের ঝুঁকি কমানো যায়।",
    },
  ];



  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">

      <div className="max-w-5xl mx-auto">


        {/* Header */}
        <div className="text-center mb-12">

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
            স্ট্রোক FAQ
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
            স্ট্রোকের লক্ষণ, চিকিৎসা এবং প্রতিরোধ সম্পর্কে সাধারণ প্রশ্নের
            উত্তর এখানে দেওয়া হয়েছে।
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
                hover:border-blue-200
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