import React from 'react';
import HomePageButtons from './HomePageButtons';
import Header from '../sharedcomponents/Header';
import './HomePage.scss';

function HomePage() {
  return (
    <div className='homeWrapper'>
      <Header />
      <HomePageButtons />
    </div>
  );
}

export default HomePage;
