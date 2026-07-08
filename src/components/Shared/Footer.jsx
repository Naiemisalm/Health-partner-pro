import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2">
            <MdMedicalServices className="text-3xl text-blue-500" />
            <h2 className="text-2xl font-bold text-white">
              Health<span className="text-blue-500">Partner</span>
            </h2>
          </div>

          <p className="mt-4 text-sm leading-7">
            We provide trusted healthcare services with experienced doctors,
            easy appointment booking and modern medical facilities.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-blue-500 transition">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-blue-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition">About</Link></li>
            <li><Link to="/doctors" className="hover:text-blue-500 transition">Doctors</Link></li>
            <li><Link to="/department" className="hover:text-blue-500 transition">Departments</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h3>

          <ul className="space-y-3">
            <li><Link to="/cardiology" className="hover:text-blue-500 transition">Cardiology</Link></li>
            <li><Link to="/dental-care" className="hover:text-blue-500 transition">Dental Care</Link></li>
            <li><Link to="/neurology" className="hover:text-blue-500 transition">Neurology</Link></li>
            <li><Link to="/emergency-care" className="hover:text-blue-500 transition">Emergency Care</Link></li>
            <li><Link to="/online-consultation" className="hover:text-blue-500 transition">Online Consultation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm">
            <p>📍 Dhaka, Bangladesh</p>
            <p>📞 +880 1234-567890</p>
            <p>✉️ healthpartner@gmail.com</p>
            <p>🕒 Sat - Thu : 9AM - 10PM</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 py-5 text-center text-sm">
        © {new Date().getFullYear()} HealthPartner. All Rights Reserved.
      </div>
    </footer>
  );
}