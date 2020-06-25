import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MedicationContext = createContext();

const MedicationContextProvider = (props) => {
  const [medication, setMedication] = useState();

  useEffect(() => {
    axios.get('/medication').then((response) => {
      setMedication(response.data);
    });
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
