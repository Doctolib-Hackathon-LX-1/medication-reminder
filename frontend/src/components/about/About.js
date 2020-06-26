import React from 'react';
import Header from '../sharedcomponents/Header';
import Menu from '../sharedcomponents/Menu';
import './About.css';
import arnaud from '../../assets/arnaud.jpg';
import margarida from '../../assets/margarida.png';
import andre from '../../assets/andre.jpeg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const About = () => {
    return ( 
        <div className="aboutWrapper">
            <Header />
            <div className="about-section">
                <div className="about-title">About Us</div>
                <div className="about-info">
                    <div className="about-us">
                        <div><img className="about-image" src={andre} alt="Arnaud Photo"></img></div>
                        <div className="about-text">André Pereira</div>
                        <div>
                            <a href="https://www.linkedin.com/in/andr%C3%A9-pereira-webdev/" target="_blank"><img className="about-icon" src={linkedin} alt="Arnaud Photo" /></a>
                            <a href="https://github.com/amduraes" target="_blank"><img className="about-icon" src={github} alt="Andre Photo" /></a>
                        </div>
                    </div>
                    <div className="about-us">
                        <div><img className="about-image" src={arnaud} alt="Arnaud Photo"></img></div>
                        <div className="about-text">Arnaud Duhé</div>
                        <div>
                            <a href="https://www.linkedin.com/in/arnaud-duh%C3%A9-05a00b41/" target="_blank"><img className="about-icon" src={linkedin} alt="Arnaud Photo" /></a>
                            <a href="https://github.com/Arnaud75020" target="_blank"><img className="about-icon" src={github} alt="Arnaud Photo" /></a>
                        </div>
                    </div>
                    <div className="about-us">
                        <div><img className="about-image" src={margarida} alt="Arnaud Photo"></img></div>
                        <div className="about-text">Margarida Sousa</div>
                        <div>
                            <a href="https://www.linkedin.com/in/margaridabsousa/" target="_blank"><img className="about-icon" src={linkedin} alt="Arnaud Photo" /></a>
                            <a href="https://github.com/MargSousa" target="_blank"><img className="about-icon" src={github} alt="Marg Photo" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
     );
}
 
export default About;