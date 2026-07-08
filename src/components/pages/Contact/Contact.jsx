// src/components/Contact.jsx

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log(formData);
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center py-16 px-4">

      <div className="max-w-6xl mx-auto w-full bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Side */}
          <div className="bg-blue-600 text-white p-8 md:p-12">

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Get In Touch
            </h2>

            <p className="text-blue-100 mb-8 leading-relaxed">
              Have a project in mind or need help? Feel free to contact us.
              We will get back to you as soon as possible.
            </p>


            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-200">
                    Email
                  </p>
                  <p>
                    HealthPartnar@gmail.com
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-200">
                    Phone
                  </p>
                  <p>
                    +880 1234-567890
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-200">
                    Location
                  </p>
                  <p>
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Right Side Form */}
          <div className="p-8 md:p-12">

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Message
            </h3>


            <form 
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block mb-2 text-gray-600">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="
                    w-full px-4 py-3 rounded-xl
                    border border-gray-300
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                  "
                  required
                />
              </div>


              <div>
                <label className="block mb-2 text-gray-600">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full px-4 py-3 rounded-xl
                    border border-gray-300
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                  "
                  required
                />
              </div>


              <div>
                <label className="block mb-2 text-gray-600">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full px-4 py-3 rounded-xl
                    border border-gray-300
                    resize-none
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                  "
                  required
                />
              </div>


              <button
                type="submit"
                disabled={loading}
                className="
                  w-full flex items-center justify-center gap-2
                  bg-blue-600 text-white
                  py-3 rounded-xl
                  font-semibold
                  hover:bg-blue-700
                  transition duration-300
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}

                <Send size={18}/>
              </button>


            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;