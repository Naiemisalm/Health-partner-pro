import React from "react";
import {
  Pill,
  HeartPulse,
  Brain,
  Dumbbell,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const Treatment = () => {

  const treatments = [
    {
      icon: Pill,
      title: "ওষুধের মাধ্যমে চিকিৎসা",
      description:
        "মাইগ্রেনের ব্যথা কমাতে এবং আক্রমণের তীব্রতা নিয়ন্ত্রণ করতে চিকিৎসক প্রয়োজন অনুযায়ী ওষুধ প্রদান করেন।",
    },
    {
      icon: Brain,
      title: "প্রতিরোধমূলক চিকিৎসা",
      description:
        "যাদের ঘন ঘন মাইগ্রেন হয় তাদের জন্য আক্রমণের সংখ্যা কমাতে preventive treatment দেওয়া হতে পারে।",
    },
    {
      icon: HeartPulse,
      title: "জীবনযাত্রার পরিবর্তন",
      description:
        "নিয়মিত ঘুম, স্বাস্থ্যকর খাবার, পর্যাপ্ত পানি পান এবং স্ট্রেস কমানো মাইগ্রেন নিয়ন্ত্রণে সাহায্য করে।",
    },
    {
      icon: Dumbbell,
      title: "রিল্যাক্সেশন ও থেরাপি",
      description:
        "Relaxation technique, stress management এবং প্রয়োজনীয় থেরাপি মাইগ্রেন নিয়ন্ত্রণে সহায়ক হতে পারে।",
    },
  ];



  const benefits = [
    "মাইগ্রেনের ব্যথার তীব্রতা কমানো",
    "মাথাব্যথার আক্রমণের সংখ্যা কমানো",
    "দৈনন্দিন কাজের সক্ষমতা বৃদ্ধি",
    "ভবিষ্যৎ জটিলতার ঝুঁকি কমানো",
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
            bg-green-100
            text-green-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <ShieldCheck size={16}/>
            Migraine Treatment
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            মাইগ্রেনের আধুনিক চিকিৎসা পদ্ধতি
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            রোগীর লক্ষণ ও অবস্থার উপর ভিত্তি করে আমাদের নিউরোলজি টিম
            ব্যক্তিগত চিকিৎসা পরিকল্পনা তৈরি করে।
          </p>


        </div>







        {/* Treatment Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">



          {treatments.map((item,index)=>{

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
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-green-600
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
                  text-sm
                  leading-relaxed
                ">
                  {item.description}
                </p>



              </div>

            );

          })}


        </div>







        {/* Benefits Section */}
        <div className="
          mt-14
          bg-gradient-to-r
          from-indigo-600
          to-blue-600
          rounded-3xl
          p-6
          sm:p-10
          text-white
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          items-center
        ">


          <div>


            <h3 className="
              text-2xl
              sm:text-3xl
              font-bold
            ">
              চিকিৎসার লক্ষ্য
            </h3>



            <p className="
              mt-3
              text-indigo-100
              leading-relaxed
            ">
              সঠিক চিকিৎসার মাধ্যমে মাইগ্রেন নিয়ন্ত্রণ করা এবং রোগীর জীবনযাত্রার
              মান উন্নত করাই মূল লক্ষ্য।
            </p>


          </div>





          <div className="space-y-4">


            {benefits.map((item,index)=>(

              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <CheckCircle2
                  size={22}
                  className="text-green-300"
                />

                <p className="text-white">
                  {item}
                </p>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
};

export default Treatment;