import React from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Brain,
} from "lucide-react";

const AppointmentForm = () => {

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
            bg-indigo-100
            text-indigo-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Brain size={16}/>
            নিউরোলজি অ্যাপয়েন্টমেন্ট
          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            মাইগ্রেন চিকিৎসার জন্য অ্যাপয়েন্টমেন্ট নিন
          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            অভিজ্ঞ নিউরোলজিস্টের পরামর্শ নিতে আজই আপনার অ্যাপয়েন্টমেন্ট
            বুক করুন।
          </p>


        </div>







        {/* Main Content */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">





          {/* Contact Card */}
          <div className="
            bg-indigo-600
            rounded-3xl
            p-6
            sm:p-8
            text-white
          ">


            <h3 className="
              text-2xl
              font-bold
            ">
              আমাদের সাথে যোগাযোগ করুন
            </h3>



            <p className="
              mt-3
              text-indigo-100
            ">
              মাইগ্রেন ও মাথাব্যথা সম্পর্কিত বিশেষজ্ঞ পরামর্শের জন্য যোগাযোগ
              করুন।
            </p>





            <div className="
              mt-8
              space-y-6
            ">


              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <Phone size={22}/>
                </div>


                <div>

                  <p className="text-indigo-100 text-sm">
                    হেল্পলাইন
                  </p>

                  <p className="font-semibold">
                    +880 1234 567890
                  </p>

                </div>

              </div>






              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <Mail size={22}/>
                </div>


                <div>

                  <p className="text-indigo-100 text-sm">
                    ইমেইল
                  </p>

                  <p className="font-semibold">
                    neurology@hospital.com
                  </p>

                </div>

              </div>






              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <MapPin size={22}/>
                </div>


                <div>

                  <p className="text-indigo-100 text-sm">
                    বিভাগ
                  </p>

                  <p className="font-semibold">
                    Neurology Department
                  </p>

                </div>

              </div>






              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <Clock3 size={22}/>
                </div>


                <div>

                  <p className="text-indigo-100 text-sm">
                    সময়
                  </p>

                  <p className="font-semibold">
                    সকাল ৯টা - রাত ৮টা
                  </p>

                </div>

              </div>



            </div>


          </div>








          {/* Form */}
          <div className="
            lg:col-span-2
            bg-white
            rounded-3xl
            p-6
            sm:p-10
            border
            border-gray-100
            shadow-sm
          ">


            <form className="space-y-6">



              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              ">


                <input
                  type="text"
                  placeholder="রোগীর নাম"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    focus:ring-2
                    focus:ring-indigo-500
                    outline-none
                  "
                />



                <input
                  type="tel"
                  placeholder="মোবাইল নম্বর"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    focus:ring-2
                    focus:ring-indigo-500
                    outline-none
                  "
                />

              </div>






              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              ">


                <input
                  type="email"
                  placeholder="ইমেইল ঠিকানা"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                  "
                />



                <select
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                  "
                >

                  <option>
                    সেবা নির্বাচন করুন
                  </option>

                  <option>
                    Migraine Consultation
                  </option>

                  <option>
                    Headache Evaluation
                  </option>

                  <option>
                    Follow-up Visit
                  </option>

                </select>


              </div>







              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              ">


                <div className="relative">

                  <CalendarDays
                    size={20}
                    className="
                      absolute
                      left-3
                      top-3.5
                      text-gray-400
                    "
                  />


                  <input
                    type="date"
                    className="
                      w-full
                      pl-10
                      px-4
                      py-3
                      rounded-xl
                      border
                      border-gray-200
                    "
                  />

                </div>





                <input
                  type="time"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                  "
                />


              </div>







              <textarea
                rows="5"
                placeholder="আপনার সমস্যা বা মাইগ্রেনের লক্ষণ লিখুন"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  focus:ring-2
                  focus:ring-indigo-500
                  outline-none
                "
              />






              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  px-8
                  py-3.5
                  rounded-xl
                  font-semibold
                  transition
                "
              >

                <Send size={20}/>
                অ্যাপয়েন্টমেন্ট রিকোয়েস্ট করুন

              </button>



            </form>


          </div>


        </div>


      </div>


    </section>
  );
};

export default AppointmentForm;