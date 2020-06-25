import React, { useState, useEffect } from 'react';
import './Agenda.css';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule';
import { extend, L10n } from '@syncfusion/ej2-base';

const AgendaPage = (props) => {
    const data = [
    {
        Id: 1,
        Subject: 'Allergies',
        StartTime: new Date(2020, 5, 24, 20, 30),
        EndTime: new Date(2020, 5, 24, 21, 0),
        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,WE,FR,SA;INTERVAL=1;COUNT=13;',
        PrimaryColor: "#3484c2",
        SecondaryColor: "#3484c2",
    }, 
    {
        Id: 2,
        Subject: 'Old',
        StartTime: new Date('2020-06-25T13:30'),
        EndTime: new Date('2020-06-25T14:00'),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2',
        PrimaryColor: "#8a1c3d",
        SecondaryColor: "#8a1c3d",
    },
    {
        Id: 3,
        Subject: "New Medication",
        StartTime: "Tue Jun 24 2020 14:45:00 GMT+0100 (heure d’été d’Europe de l’Ouest)",
        EndTime: "Tue Jun 24 2020 15:15:00 GMT+0100 (heure d’été d’Europe de l’Ouest)",
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5;",
        OwnerColor: '#8a1c3d',
        PrimaryColor: "#8a1c3d",
        SecondaryColor: "#8a1c3d",
    }
]
    const [calendarData, setCalendarData] = useState(data);

    useEffect(() => {
        setCalendarData(data);
    },[]);


    // Loading data via AJAX post
    // const dataManager = [];
    // const ajax = new Ajax('Home/GetData', 'GET', false);
    // ajax.onSuccess = function (value) {
    //     dataManager = value;
    // };
    // ajax.send();

    // No Popup on meetings
    // const onPopupOpen = (args) => {
    //     args.cancel = true;
    // }

    // const onPopupOpen = (args) => {
    //     if (args.type === 'EventContainer') {
    //         args.cancel = true;
    //     }
    // }

    // const onEventRendered = (args) => {
    //     applyCategoryColor(args, scheduleObj.currentView);
    // }

    // const applyCategoryColor = (args, currentView) => {
    //     let categoryColor = args.data.CategoryColor;
    //     if (!args.element || !categoryColor) {
    //         return;
    //     }
    //     if (currentView === 'Agenda') {
    //         args.element.firstChild.style.borderLeftColor = categoryColor;
    //     }
    //     else {
    //         args.element.style.backgroundColor = categoryColor;
    //     }
    // }

    // const eventTemplate = (data) => {
    //     console.log("template", data)
    //     return (
    //         <div className="template-wrap" style={{ backgroundColor: calendarData.SecondaryColor }}>
    //             <div className="subject" style={{ backgroundColor: calendarData.PrimaryColor }}>
    //                 {calendarData.Subject}
    //             </div>
    //             <div className="time" style={{ backgroundColor: calendarData.PrimaryColor }}>
    //                 Time: {calendarData.StartTime} - {calendarData.props.EndTime}
    //             </div>
    //         </div>
    //     );
    // }

    return ( 
        <div className="Agenda">
            <div className="agenda-section">
                <div className="agenda-title">Medication Calendar</div>
            </div>
            <div className="agenda-section">
                <div className="agenda-calendar">
                    <ScheduleComponent 
                        height="500px"
                        selectedDate={new Date()}
                        eventSettings={{ dataSource: calendarData }}
                        colorField='OwnerColor'
                        // rowAutoHeight={true}
                        // ref={schedule => this.scheduleObj = schedule}
                        // eventRendered={onEventRendered}
                        >
                        <ViewsDirective>
                            <ViewDirective option="Day"></ViewDirective>
                            <ViewDirective option="Week"></ViewDirective>
                            <ViewDirective option="WorkWeek"></ViewDirective>
                            <ViewDirective option="Month"></ViewDirective>
                            <ViewDirective option="Agenda" isSelected="true"></ViewDirective>
                        </ViewsDirective>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                    </ScheduleComponent>
                </div>
            </div>
        </div>
     );
}
 
export default AgendaPage;