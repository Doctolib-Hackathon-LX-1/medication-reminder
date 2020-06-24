import React from 'react';
import HomePageButtons from './HomePageButtons';
import Header from '../sharedcomponents/Header';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <Header />
            <HomePageButtons />
        </div>
    )
}

export default HomePage;