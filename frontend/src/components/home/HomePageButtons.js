import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MedicationContext } from '../../context/MedicationContext';
import './HomePageButtons.scss';

const HomePageButtons = () => {
  const { medication } = useContext(MedicationContext);

  const medicationHasData = () => {
    if (medication) {
      return (
        <div>
          <div className='prescription'>
            <Link>
              <button>
                <h3>CURRENT MEDICATION</h3>
                <div>
                  {/* Receives data from the form passed by the context */}
                </div>
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className='prescription'>
          <h3>NO PRESCRIPTION AVAILABLE</h3>
        </div>
      );
    }
  };

  console.log('medication', medication);

  return (
    <div>
      <div className='new-med'>
        <Link to='/medicationform'>
          <button>SET NEW MEDICATION</button>
        </Link>
      </div>
      {medicationHasData()}
    </div>
  );
};

export default HomePageButtons;
