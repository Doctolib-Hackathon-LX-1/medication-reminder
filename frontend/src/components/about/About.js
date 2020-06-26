import React from 'react';
import Header from '../sharedcomponents/Header';
import Menu from '../sharedcomponents/Menu';
import './About.css';

const About = () => {
    return ( 
        <div className="aboutWrapper">
            <Header />
            <div className="about-section">
                <div>
                    <img></img>
                    <div>André Pereira</div>
                </div>
                <div>
                    <img></img>
                    <div>Arnaud Duhé</div>
                </div>
                <div>
                    <img></img>
                    <div>Margarida Sousa</div>
                </div>
            </div>
            <Menu />
        </div>
     );
}
 
export default About;