import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { departments } from "../../../data/departments";

export default function ServiceDetails() {
  const { slug, serviceSlug } = useParams();

  // Find department
  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Department Not Found</h2>
        <Link to="/department" className="text-blue-600 mt-4 inline-block">
          Go Back
        </Link>
      </div>
    );
  }

  // Find service
  const service = department.services?.find(
    (s) => s.slug === serviceSlug
  );

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <Link
          to={`/department/${department.slug}`}
          className="text-blue-600 mt-4 inline-block"
        >
          Back to Department
        </Link>
      </div>
    );
  }

  const Icon = department.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 min-h-screen"
    >
      {/* HEADER */}
      <div className="text-center mb-10">
        <Icon className={`text-6xl mx-auto ${department.color}`} />

        <h1 className="text-4xl font-bold mt-4">
          {service.name}
        </h1>

        <p className="text-gray-600 mt-2">
          Department: {department.title}
        </p>
      </div>

      {/* SERVICE INFO */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <p className="text-gray-600">
          This is a professional service page for{" "}
          <span className="font-semibold">{service.name}</span>{" "}
          under {department.title} department.
        </p>
      </div>

      {/* DOCTOR LIST */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Available Doctors
        </h2>

        {service.doctors?.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {service.doctors.map((doc, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-xl p-5 text-center"
              >
                <h3 className="text-xl font-semibold">
                  👨‍⚕️ {doc.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  🩺 {doc.specialization}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No doctors available for this service
          </p>
        )}
      </div>

      {/* APPOINTMENT BUTTON */}
      <div className="text-center mt-12">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={`/appointment/${service.slug}`}
            className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-6">
        <Link
          to={`/department/${department.slug}`}
          className="text-blue-600 hover:underline"
        >
          ← Back to Department
        </Link>
      </div>
    </motion.div>
  );
}