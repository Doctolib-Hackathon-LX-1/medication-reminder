import React, { useState, useEffect } from 'react';
import './Agenda.css';
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
  ResourcesDirective,
  ResourceDirective,
} from '@syncfusion/ej2-react-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

const AgendaPage = (props) => {
  const data = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2020, 5, 25, 20, 30),
      EndTime: new Date(2020, 5, 25, 21, 0),
      RecurrenceRule:
        'FREQ = WEEKLY; BYDAY=TU, WE, TH, FR, SA; INTERVAL=1; COUNT=13;',
      OwnerColor: '#7499e1',
    },
    {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2020, 5, 25, 22, 0),
      EndTime: new Date(2020, 5, 25, 22, 30),
      OwnerColor: '#7499e1',
    },
  ];

  const [calendarData, setCalendarData] = useState(data);

  useEffect(() => {
    setCalendarData(data);
  }, []);

  // Loading data via AJAX post
  // const dataManager = [];
  // const ajax = new Ajax('Home/GetData', 'GET', false);
  // ajax.onSuccess = function (value) {
  //     dataManager = value;
  // };
  // ajax.send();

  const onPopupOpen = (args) => {
    args.cancel = true;
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
            eventSettings={{ dataSource: calendarData }}
            rowAutoHeight={true}
            popupOpen={onPopupOpen}>
            <ViewsDirective>
              <ViewDirective option='Day'></ViewDirective>
              <ViewDirective option='Week'></ViewDirective>
              <ViewDirective option='WorkWeek'></ViewDirective>
              <ViewDirective option='Month'></ViewDirective>
              <ViewDirective option='Agenda' isSelected='true'></ViewDirective>
            </ViewsDirective>
            <Inject services={[Day, Agenda, WorkWeek, Week, Month]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
