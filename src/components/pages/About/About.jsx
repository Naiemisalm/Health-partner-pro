export default function About() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            About Our Healthcare Platform
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to making healthcare simple, accessible, and
            reliable by connecting patients with experienced doctors and
            quality medical services.
          </p>
        </div>


        {/* Main About Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Health, Our Priority
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our platform helps patients easily find qualified doctors,
              explore medical departments, and book appointments without
              unnecessary waiting.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus on providing a smooth healthcare experience with
              trusted specialists, modern technology, and patient-centered
              services.
            </p>
          </div>


          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Why Choose Us?
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Experienced and verified doctors</li>
              <li>✔ Easy online appointment booking</li>
              <li>✔ Multiple healthcare departments</li>
              <li>✔ Patient-friendly services</li>
              <li>✔ Fast and reliable support</li>
            </ul>
          </div>

        </div>


        {/* Mission Section */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Making healthcare accessible for everyone through simple
              digital solutions.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Expert Doctors
            </h3>
            <p className="text-gray-600">
              Connecting patients with skilled and experienced healthcare
              professionals.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Patient Care
            </h3>
            <p className="text-gray-600">
              Providing reliable support and a better healthcare journey.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}