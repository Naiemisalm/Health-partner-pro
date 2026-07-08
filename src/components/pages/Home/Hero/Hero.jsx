

const Hero = () => {
  return (
   <div className="min-h-screen bg-gray-50 px-6 py-20">
      
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900">
          About Our Healthcare Platform
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are dedicated to connecting patients with experienced doctors,
          making healthcare simple, fast, and accessible for everyone.
        </p>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-sky-600">Trusted Doctors</h2>
            <p className="mt-2 text-gray-600">
              Verified and experienced doctors across multiple specialties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-sky-600">Easy Booking</h2>
            <p className="mt-2 text-gray-600">
              Book appointments in just a few clicks without any hassle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-sky-600">24/7 Support</h2>
            <p className="mt-2 text-gray-600">
              Get medical help anytime with our support team.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;