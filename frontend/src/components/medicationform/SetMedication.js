import React from 'react';
import NewMedicationForm from './NewMedicationForm';
import Header from '../sharedcomponents/Header';
import Menu from '../sharedcomponents/Menu';
import './NewMedicationForm.scss';


const SetMedication = () => {
    return ( 
        <div className='medicationWrapper'>
            <Header />
            <NewMedicationForm />
            <Menu />
        </div>
     );
}
 
export default SetMedication;