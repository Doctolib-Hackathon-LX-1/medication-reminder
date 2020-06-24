import React, { createContext, useState, useEffect } from 'react';

export const MedicationContext = createContext();

const MedicationContextProvider = (props) => {
  const [medication, setMedication] = useState('a');

  useEffect(() => {
    // Axios call from backend
  }, []);

  return (
    <div>
      <MedicationContext.Provider value={{ medication }}>
        {props.children}
      </MedicationContext.Provider>
    </div>
  );
};

export default MedicationContextProvider;
