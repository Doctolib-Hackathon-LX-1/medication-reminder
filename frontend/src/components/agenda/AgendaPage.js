import React from 'react';
import Agenda from './Agenda';
import Header from '../sharedcomponents/Header';
import Menu from '../sharedcomponents/Menu';

const AgendaPage = () => {
    return ( 
        <div>
            <Header />
            <Agenda />
            <Menu />
        </div>
     );
}
 
export default AgendaPage;