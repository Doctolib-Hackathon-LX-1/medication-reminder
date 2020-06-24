import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

// Router File Imports

import MedicationContextProvider from './context/MedicationContext';
import HomePage from './components/home/HomePage';
import SetMedication from './components/medicationform/SetMedication';
import AgendaPage from './components/agenda/AgendaPage';

function App() {
  // Example Connection to the Express Server
  React.useEffect(() => {
    axios.get('/api').then((res) => console.log(res.data));
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <MedicationContextProvider>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/medicationform' component={SetMedication} />
            <Route path='/agenda' component={AgendaPage} />
          </Switch>
        </MedicationContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
