import React from 'react';
import Agenda from './Agenda';
import Header from '../sharedcomponents/Header';
import Menu from '../sharedcomponents/Menu';
import './Agenda.css';

const AgendaPage = () => {
    return ( 
        <div className='agendaWrapper'>
            <Header />
            <Agenda />
            <Menu />
        </div>
     );
}
 
export default AgendaPage;