import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='user'>
        <div className='img-name'>Sam</div>
        <img src='./Doctor.png' alt='user avatar' />
      </div>
    </div>
  );
};

export default Header;
