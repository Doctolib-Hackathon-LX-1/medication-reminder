import React, { useState }from 'react';
import { useForm } from "react-hook-form";
import SelectDateFrame from './SelectDateFrame';
import { GithubPicker } from 'react-color';
import uuid from 'uuid';
import axios from 'axios';
import './NewMedicationForm.scss';

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
        <div className='formPageWrapper'>
            <div className='formTitle'>Schedule your treatment</div>
            <form onSubmit={handleSubmit(onSubmit)} className='formWrapper'>
                <div className='aroundForm'>
                    <div className='formInput'>
                        <p>Treatment: </p>
                        <input type="text" placeholder="Title" name="treatment" ref={register}/>
                        </div>
                        <div className='formInput'>
                        <p>Starting date: </p>
                        <input type="datetime-local" placeholder="start_date" name="start_date" ref={register}/>
                        </div>
                        <div className='colorButton'>
                            <button onClick={handleClick}>{!toggleMode && 'Pick a color'}</button>
                        {toggleMode && 
                            <GithubPicker onChangeComplete={handleChangeComplete}/>}
                        </div>
                    </div>
                        <div className='formSelectDateFrame'>
                        <SelectDateFrame recurrenceRule={reccurenceRule} getRule={getRule}/>
                        </div>
                    <button type="submit" className='submitButton'>Add to Agenda</button>
            </form>
        </div>
     );
}
 
export default NewMedicationForm;