import React, { useState, useEffect } from 'react';
import './Agenda.css';
import axios from 'axios';

import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ViewsDirective,
  ViewDirective,
} from '@syncfusion/ej2-react-schedule';
import { Internationalization, extend } from '@syncfusion/ej2-base';

const AgendaPage = (props) => {
  const data = [
    {
      Id: 1,
      Subject: 'Allergies',
      StartTime: new Date(2020, 5, 24, 20, 30),
      EndTime: new Date(2020, 5, 24, 21, 0),
      RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,WE,FR,SA;INTERVAL=1;COUNT=13;',
      OwnerColor: '#d9edff',
    },
    {
      Id: 2,
      Subject: 'Test',
      StartTime: new Date('2020-06-25T13:30'),
      EndTime: new Date('2020-06-25T14:00'),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2',
      OwnerColor: '#fcebb3',
    },
    {
      Id: 3,
      Subject: 'Medication',
      StartTime:
        'Tue Jun 24 2020 14:45:00 GMT+0100 (heure d’été d’Europe de l’Ouest)',
      EndTime:
        'Tue Jun 24 2020 15:15:00 GMT+0100 (heure d’été d’Europe de l’Ouest)',
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5;',
      OwnerColor: '#ffd7cf',
    },
  ];
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    console.log('agenda');
    axios.get('/medication').then((response) => {
      console.log('agenda');
      console.log(response.data);
      setCalendarData(response.data);
    });

    axios
      .post('/notification', data)
      .then((response) => console.log(response.data));
    //setCalendarData(data);
  }, []);

  function isPushNotificationSupported() {
    return 'serviceWorker' in navigator && 'PushManager' in window;
  }

  // No Popup on click events / no editing
  // const onPopupOpen = (args) => {
  //     args.cancel = true;
  // }

  const instance = new Internationalization();
  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: 'hm' });
  };
  const eventTemplate = (props) => {
    return (
      <div
        className='template-wrap'
        style={{
          backgroundColor: props.OwnerColor,
          padding: '0px 5px',
          color: 'black',
        }}>
        <div
          className='subject'
          style={{ backgroundColor: props.OwnerColor, fontWeight: '500' }}>
          {props.Subject}
        </div>
        <div className='time' style={{ backgroundColor: props.OwnerColor }}>
          Time: {getTimeString(props.StartTime)} -{' '}
          {getTimeString(props.EndTime)}
        </div>
      </div>
    );
  };

  return (
    <div className='Agenda'>
      <div className='agenda-section'>
        <div className='agenda-title'>Medication Calendar</div>
      </div>
      <div className='agenda-section'>
        <div className='agenda-calendar'>
          <ScheduleComponent
            height='500px'
            selectedDate={new Date()}
            eventSettings={{
              dataSource: calendarData,
              template: eventTemplate,
              enableTooltip: true,
            }}
            rowAutoHeight={true}>
            <ViewsDirective>
              <ViewDirective option='Day'></ViewDirective>
              <ViewDirective option='Week'></ViewDirective>
              <ViewDirective option='WorkWeek'></ViewDirective>
              <ViewDirective option='Month'></ViewDirective>
              <ViewDirective option='Agenda' isSelected='true'></ViewDirective>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
