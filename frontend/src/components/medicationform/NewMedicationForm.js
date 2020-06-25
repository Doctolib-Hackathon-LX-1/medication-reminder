import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SelectDateFrame from './SelectDateFrame';
import { GithubPicker } from 'react-color';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import uuid from 'uuid';
import axios from 'axios';
import './NewMedicationForm.scss';

const NewMedicationForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [reccurenceRule, setReccurenceRule] = useState('');
  const [toggleMode, setToggleMode] = useState(false);
  const [color, setColor] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    const endTime = new Date(data.start_date);
    endTime.setMinutes(endTime.getMinutes() + 30);

    const newObject = {
      medication_id: uuid(),
      Subject: data.treatment,
      StartTime: new Date(data.start_date),
      EndTime: endTime,
      RecurrenceRule: reccurenceRule,
      OwnerColor: color,
      user_id: 1,
    };
    reset({
      Subject: '',
      StartTime: '',
      RecurrenceRule: reccurenceRule,
      OwnerColor: '',
    });
    console.log('newobject', newObject);

    postNewEvent(newObject);
    handleClickOpen();
  };

  const postNewEvent = (newObject) => {
    axios
      .post('/newmedication', newObject)
      .then((response) => console.log(response));
  };

  const handleClick = () => {
    setToggleMode(!toggleMode);
  };

  const handleChangeComplete = (color, event) => {
    setColor(color.hex);
    setToggleMode(!toggleMode);
  };

  const getRule = (rule) => {
    setReccurenceRule(rule);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Treatment: </p>
        <button onClick={handleClick}>{!toggleMode && 'Pick a color'}</button>
        {toggleMode && <GithubPicker onChangeComplete={handleChangeComplete} />}
        <input
          type='text'
          placeholder='Treatment'
          name='treatment'
          ref={register}
        />
        <p>Starting date: </p>
        <input
          type='datetime-local'
          placeholder='start_date'
          name='start_date'
          ref={register}
        />
        <SelectDateFrame recurrenceRule={reccurenceRule} getRule={getRule} />
        <button type='submit'>Add to Agenda</button>
      </form>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            {'Your treatment has been successfully created.'}
          </DialogTitle>
          <DialogActions>
            <Link to='/agenda' className='modal-ok-link'>
              <Button onClick={handleClose} color='primary' autoFocus>
                OK
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default NewMedicationForm;
