import React, { useState }from 'react';
import { useForm } from "react-hook-form";
import SelectDateFrame from './SelectDateFrame';
import { GithubPicker } from 'react-color';
import uuid from 'uuid';
import axios from 'axios';

const NewMedicationForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const [ reccurenceRule, setReccurenceRule ]= useState("");
    const [ toggleMode, setToggleMode]= useState(false);
    const [ color, setColor]= useState();



    const onSubmit = (data) => {

        const endTime = new Date(data.start_date);
        endTime.setMinutes( endTime.getMinutes() + 30 );

        const newObject = {
            medication_id: uuid(),
            Subject: data.treatment,
            StartTime: new Date(data.start_date),
            EndTime: endTime,
            RecurrenceRule: reccurenceRule,
            OwnerColor: color,
            user_id: 1
        };
        reset({
            Subject: "",
            StartTime: "",
            RecurrenceRule: reccurenceRule,
            OwnerColor: ""
        })
        console.log('newobject', newObject)

        postNewEvent(newObject); 

    };

    const postNewEvent = (newObject) => {
        axios
        .post('/newmedication', newObject)
        .then((response) => console.log(response));
    }

    const handleClick = () => {
        setToggleMode(!toggleMode);
    }

    const handleChangeComplete = (color, event) => {
        setColor(color.hex);
        setToggleMode(!toggleMode);
    };

    const getRule = (rule) => {
        setReccurenceRule(rule)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Treatment: </p>
                <button onClick={handleClick}>{!toggleMode && 'Pick a color'}</button>
               {toggleMode && 
                <GithubPicker onChangeComplete={handleChangeComplete}/>}
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