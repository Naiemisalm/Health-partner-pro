import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { departments } from "../Department/departments";

export default function DepartmentDetails() {
  const { slug } = useParams();

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

  const Icon = department.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      {/* HEADER */}
      <div className="text-center">
        <Icon className={`text-7xl mx-auto ${department.color}`} />
        <h1 className="text-4xl font-bold mt-4">
          {department.title}
        </h1>
        <p className="text-gray-600 mt-3">
          {department.details}
        </p>
      </div>

      {/* SERVICES */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {department.services.map((s, i) => (
          <Link
            key={i}
            to={`/department/${department.slug}/service/${s.slug}`}
            className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-xl hover:-translate-y-1 transition block"
          >
            {s.name}
          </Link>
        ))}
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-12">
        <Link
          to="/department"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          ← Back to Departments
        </Link>
      </div>
    </motion.div>
  );
}