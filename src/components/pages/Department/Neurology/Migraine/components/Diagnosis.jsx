import React from "react";
import {
  Stethoscope,
  ClipboardList,
  Brain,
  ScanLine,
  Activity,
  CheckCircle2,
} from "lucide-react";

const Diagnosis = () => {

  const diagnosisMethods = [
    {
      icon: ClipboardList,
      title: "Medical History Review",
      description:
        "ডাক্তার মাথাব্যথার ধরন, সময়কাল, তীব্রতা এবং পূর্বের চিকিৎসার ইতিহাস পর্যালোচনা করেন।",
    },
    {
      icon: Brain,
      title: "Neurological Examination",
      description:
        "স্নায়ুর কার্যক্ষমতা, চোখের নড়াচড়া, ভারসাম্য ও অন্যান্য বিষয় পরীক্ষা করা হয়।",
    },
    {
      icon: ScanLine,
      title: "MRI / CT Scan",
      description:
        "প্রয়োজন হলে মস্তিষ্কের অন্যান্য সমস্যা শনাক্ত করার জন্য MRI বা CT Scan করা হতে পারে।",
    },
    {
      icon: Activity,
      title: "Headache Pattern Analysis",
      description:
        "মাথাব্যথার সময়, ট্রিগার এবং লক্ষণের ধরন বিশ্লেষণ করে রোগ নির্ণয় করা হয়।",
    },
  ];



  const steps = [
    "রোগীর উপসর্গ ও মেডিকেল ইতিহাস জানা",
    "মাথাব্যথার ধরন ও ট্রিগার বিশ্লেষণ",
    "নিউরোলজিক্যাল পরীক্ষা করা",
    "প্রয়োজন অনুযায়ী চিকিৎসা পরিকল্পনা তৈরি",
  ];



  return (
    <section className="
      py-16
      sm:py-20
      bg-gray-50
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
            bg-purple-100
            text-purple-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Stethoscope size={16}/>
            Migraine Diagnosis
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            মাইগ্রেন নির্ণয়ের পদ্ধতি
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
          ">
            সঠিক রোগ নির্ণয়ের জন্য নিউরোলজিস্ট রোগীর লক্ষণ, ইতিহাস এবং
            প্রয়োজনীয় পরীক্ষা মূল্যায়ন করেন।
          </p>


        </div>







        {/* Diagnosis Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


          {diagnosisMethods.map((item,index)=>{

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
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-purple-600
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







        {/* Process */}
        <div className="
          mt-14
          bg-white
          rounded-3xl
          p-6
          sm:p-10
          border
          border-gray-100
        ">


          <div className="
            flex
            items-center
            gap-3
            mb-8
          ">


            <div className="
              w-12
              h-12
              rounded-xl
              bg-green-100
              text-green-600
              flex
              items-center
              justify-center
            ">
              <CheckCircle2 size={26}/>
            </div>



            <h3 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              রোগ নির্ণয়ের ধাপসমূহ
            </h3>


          </div>





          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
          ">


            {steps.map((step,index)=>(

              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  bg-gray-50
                  rounded-xl
                  p-4
                "
              >

                <span className="
                  w-10
                  h-10
                  rounded-full
                  bg-purple-600
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  flex-shrink-0
                ">
                  {index + 1}
                </span>


                <p className="
                  text-gray-700
                  text-sm
                  font-medium
                ">
                  {step}
                </p>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
};

export default Diagnosis;