import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import user from '../../assets/user.png';
import medication from '../../assets/medication.png';
import plus from '../../assets/plus.png';
import calendar from '../../assets/calendar.png';
import group from '../../assets/group.png';

const Menu = () => {
    return ( 
        <div className="Menu">
            <div className="menu-section">
                <Link to="/medicationform">
                    <div className="menu-item">
                        <img className="menu-plus" src={plus}/>
                        <img className="menu-medication" src={medication}/>
                        <div className="menu-text">Set new medication</div>
                    </div>
                </Link>
                <Link to="/agenda">
                    <div className="menu-item">
                        <img className="menu-calendar" src={calendar}/>
                        <div className="menu-text">Medication Calendar</div>
                    </div>
                </Link>
                <Link to="/about">
                    <div className="menu-item">
                        <img className="menu-user" src={group}/>
                        <div className="menu-text">About us</div>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Menu;
