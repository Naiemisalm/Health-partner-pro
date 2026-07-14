import React from "react";
import {
  Brain,
  Eye,
  VolumeX,
  CloudRain,
  AlertCircle,
  Activity,
} from "lucide-react";

const Symptoms = () => {

  const symptoms = [
    {
      icon: Brain,
      title: "তীব্র মাথাব্যথা",
      description:
        "সাধারণত মাথার এক পাশে বা উভয় পাশে মাঝারি থেকে তীব্র ব্যথা অনুভূত হতে পারে।",
    },
    {
      icon: Eye,
      title: "আলোতে সংবেদনশীলতা",
      description:
        "উজ্জ্বল আলো সহ্য করতে সমস্যা হওয়া এবং চোখে অস্বস্তি অনুভব করা।",
    },
    {
      icon: VolumeX,
      title: "শব্দে সংবেদনশীলতা",
      description:
        "স্বাভাবিক শব্দও মাইগ্রেনের সময় বিরক্তিকর বা অসহ্য মনে হতে পারে।",
    },
    {
      icon: CloudRain,
      title: "বমি বমি ভাব",
      description:
        "মাইগ্রেনের সময় অনেকের বমি ভাব, বমি বা খাবারে অনীহা দেখা দিতে পারে।",
    },
    {
      icon: AlertCircle,
      title: "Aura বা পূর্ব সংকেত",
      description:
        "কিছু রোগীর ক্ষেত্রে চোখে ঝলকানি, আলো দেখা বা দৃষ্টির পরিবর্তন হতে পারে।",
    },
    {
      icon: Activity,
      title: "দুর্বলতা ও ক্লান্তি",
      description:
        "মাইগ্রেনের সময় বা পরে শরীরে দুর্বলতা ও অতিরিক্ত ক্লান্তি অনুভূত হতে পারে।",
    },
  ];


  return (
    <section
      className="
        py-16
        sm:py-20
        bg-gray-50
        px-4
        sm:px-6
        lg:px-8
      "
    >

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
            bg-red-100
            text-red-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <AlertCircle size={16}/>
            মাইগ্রেনের লক্ষণ
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            মাইগ্রেনের সাধারণ লক্ষণসমূহ
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            মাইগ্রেনের লক্ষণ ব্যক্তি ভেদে আলাদা হতে পারে। সঠিক সময়ে লক্ষণ
            চিনতে পারলে কার্যকর চিকিৎসা নেওয়া সহজ হয়।
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


          {symptoms.map((item, index) => {

            const Icon = item.icon;


            return (
              <div
                key={index}
                className="
                  group
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
                  w-14
                  h-14
                  rounded-2xl
                  bg-red-100
                  text-red-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-red-600
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







        {/* Bottom Info */}
        <div className="
          mt-12
          bg-indigo-600
          rounded-3xl
          p-6
          sm:p-8
          text-white
          text-center
        ">


          <h3 className="
            text-2xl
            font-bold
          ">
            নিয়মিত মাইগ্রেন হলে বিশেষজ্ঞের পরামর্শ নিন
          </h3>



          <p className="
            mt-3
            text-indigo-100
            leading-relaxed
          ">
            সঠিক রোগ নির্ণয় ও চিকিৎসার মাধ্যমে মাইগ্রেনের সমস্যা নিয়ন্ত্রণ করা
            সম্ভব।
          </p>


        </div>


      </div>

    </section>
  );
};

export default Symptoms;