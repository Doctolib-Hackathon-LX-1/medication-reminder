import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import home from '../../assets/home.png';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div>
          <img src={home} className="home-icon" alt='user avatar' />
        </div>
      </Link>
      <div className='user'>
        <div className='img-name'>Sam</div>
        <img className="user-icon" src='./Doctor.png' alt='user avatar' />
      </div>
    </div>
  );
};

export default Header;
