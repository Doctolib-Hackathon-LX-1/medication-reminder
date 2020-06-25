import React from 'react';
import { RecurrenceEditorComponent } from '@syncfusion/ej2-react-schedule';


class SelectDateFrame extends React.Component {
    componentDidMount() {
        let outputElement = document.querySelector('#rule-output');
        outputElement.innerText = 'Select Rule';
    }
    onChange(args) {
        let outputElement = document.querySelector('#rule-output');
        console.log(args.value)
        if (args.value === "") {
            outputElement.innerText = 'Select Rule';
        }
        else {
            outputElement.innerText = args.value;
        }
    }
    
    render() {
        return <div className='content-wrapper recurrence-editor-wrap'>
            <div style={{ paddingBottom: '15px' }}>
            <label>Rule Output</label>
            <div className='rule-output-container'>
                <div id='rule-output'></div>
            </div>
            </div>
            <div className='RecurrenceEditor'>
            <RecurrenceEditorComponent id='RecurrenceEditor' ref={t => this.recObject = t} change={this.onChange.bind(this)}></RecurrenceEditorComponent>
            </div>
        </div>;
    }
}
;

export default SelectDateFrame;