import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MedicationContext = createContext();

const MedicationContextProvider = (props) => {
  const [medication, setMedication] = useState();

  const getAllMedication = () => {
    axios.get('/medication').then((response) => {
      setMedication(response.data);
    });
  }
  
  useEffect(() => {
    getAllMedication()
  }, []);

  return (
    <div>
      <MedicationContext.Provider value={{ medication, getAllMedication }}>
        {props.children}
      </MedicationContext.Provider>
    </div>
  );
};

export default MedicationContextProvider;
