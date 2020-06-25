import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MedicationContext } from '../../context/MedicationContext';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './HomePageButtons.scss';

const useStyles = makeStyles({
  TypoStyle: {
    textAlign: 'center',
    fontFamily: 'Monospace',
    color: 'secondary',
  },
  ButtonStyle: {},
});

const HomePageButtons = () => {
  const { medication } = useContext(MedicationContext);
  const classes = useStyles();

  const medicationHasData = () => {
    if (medication) {
      return (
        <div>
          <div className='prescription'>
            <Link to='/agenda'>
              <Button
                className={classes.ButtonStyle}
                fullWidth
                variant='contained'
                color='secondary'>
                <Typography
                  className={classes.TypoStyle}
                  variant='h3'
                  color='primary'>
                  CURRENT MEDICATION
                </Typography>
                <div>
                  {/* Receives data from the form passed by the context */}
                </div>
              </Button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className='prescription'>
          <Typography
            className={classes.TypoStyle}
            variant='h3'
            color='primary'>
            NO PRESCRIPTION AVAILABLE
          </Typography>
        </div>
      );
    }
  };

  console.log('medication', medication);

  return (
    <div>
      <div className='new-med'>
        <Link to='/medicationform'>
          <Button
            className={classes.ButtonStyle}
            fullWidth
            variant='contained'
            color='secondary'>
            <Typography
              className={classes.TypoStyle}
              color='primary'
              variant='h3'>
              SET NEW MEDICATION
            </Typography>
          </Button>
        </Link>
      </div>
      {medicationHasData()}
    </div>
  );
};

export default HomePageButtons;
