import React, { useState }from 'react';
import { useForm } from "react-hook-form";
import SelectDateFrame from './SelectDateFrame';
import uuid from 'uuid';
import axios from 'axios';

const NewMedicationForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const [ reccurenceRule, setReccurenceRule ]= useState("");


    const onSubmit = (data) => {

        const endTime = new Date(data.start_date);
        endTime.setMinutes( endTime.getMinutes() + 30 );

        const newObject = {
            id: uuid(),
            Subject: data.treatment,
            StartTime: new Date(data.start_date),
            EndTime: endTime,
            RecurrenceRule: reccurenceRule,
            OwnerColor: '#7499E1',
        };
        reset({
            Subject: "",
            StartTime: "",
            RecurrenceRule: reccurenceRule,
            OwnerColor: ""
        })
        console.log('newobject', newObject)

        axios.get('/api')
        .then(res => console.log(res.data))
    };

    const getRule = (rule) => {
        setReccurenceRule(rule)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Treatment: </p>
                <input type="text" placeholder="Treatment" name="treatment" ref={register}/>
                <p>Starting date: </p>
                <input type="datetime-local" placeholder="start_date" name="start_date" ref={register}/>
            <SelectDateFrame recurrenceRule={reccurenceRule} getRule={getRule}/>
            <button type="submit">Add to Agenda</button>
            </form>
        </div>
     );
}
 
export default NewMedicationForm;