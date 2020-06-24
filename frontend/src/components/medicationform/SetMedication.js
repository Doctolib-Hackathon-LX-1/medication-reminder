import React from 'react';
import NewMedicationForm from './NewMedicationForm';
import Header from '../sharedcomponents/Header';
import Menu from '../sharedcomponents/Menu';

const SetMedication = () => {
    return ( 
        <div>
            <Header />
            <NewMedicationForm />
            <Menu />
        </div>
     );
}
 
export default SetMedication;