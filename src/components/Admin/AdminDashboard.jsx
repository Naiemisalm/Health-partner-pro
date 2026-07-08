import { useState } from "react";

export default function AdminDashboard() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Rahman", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Hasan", specialization: "Neurologist" },
  ]);

  const [form, setForm] = useState({
    name: "",
    specialization: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD DOCTOR
  const addDoctor = () => {
    if (!form.name || !form.specialization) return;

    const newDoctor = {
      id: Date.now(),
      name: form.name,
      specialization: form.specialization,
    };

    setDoctors((prev) => [...prev, newDoctor]);

    setForm({
      name: "",
      specialization: "",
    });
  };

  // DELETE DOCTOR
  const deleteDoctor = (id) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">
        🏥 Admin Dashboard
      </h1>

      {/* FORM */}
      <div className="bg-white shadow-md p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">
          ➕ Add Doctor
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={form.specialization}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          onClick={addDoctor}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
        >
          Add Doctor
        </button>
      </div>

      {/* DOCTOR LIST */}
      <div className="bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">
          👨‍⚕️ Doctor List
        </h2>

        {doctors.length === 0 ? (
          <p className="text-gray-500 text-center">
            No doctors available
          </p>
        ) : (
          <div className="space-y-3">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="flex justify-between items-center border p-3 rounded hover:shadow transition"
              >
                <div>
                  <h3 className="font-semibold">{doc.name}</h3>
                  <p className="text-gray-500 text-sm">
                    🩺 {doc.specialization}
                  </p>
                </div>

                <button
                  onClick={() => deleteDoctor(doc.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}