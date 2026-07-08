import { createContext, useContext, useState } from "react";

const DoctorContext = createContext();

export function DoctorProvider({ children }) {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Rahman", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Hasan", specialization: "Neurologist" },
  ]);

  // ADD
  const addDoctor = (doctor) => {
    setDoctors((prev) => [...prev, doctor]);
  };

  // DELETE
  const deleteDoctor = (id) => {
    setDoctors((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DoctorContext.Provider
      value={{ doctors, addDoctor, deleteDoctor }}
    >
      {children}
    </DoctorContext.Provider>
  );
}

export const useDoctor = () => useContext(DoctorContext);