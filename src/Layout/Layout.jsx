import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* NAVBAR (fixed top content) */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1">

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}