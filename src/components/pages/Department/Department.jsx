import { Link } from "react-router-dom";
import { departments } from "../Department/departments";

export default function Department() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Departments</h2>
          <p className="text-gray-600 mt-3">
            Specialized healthcare services with expert doctors
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => {
            const Icon = d.icon;

            return (
              <div
                key={d.id}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center"
              >
                <Icon className={`text-5xl mx-auto ${d.color}`} />

                <h3 className="text-xl font-bold mt-4">{d.title}</h3>

                <p className="text-gray-600 mt-2">{d.description}</p>

                <Link
                  to={`/department/${d.slug}`}
                  className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}