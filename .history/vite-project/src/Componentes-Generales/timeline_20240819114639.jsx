import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';

import './styles/timelinecss.scss'


const events = [
    { date: '2020-01-01', description: 'New Year' },
    { date: '2020-02-14', description: 'Valentine’s Day' },
    { date: '2020-12-25', description: 'Christmas' }
];

export default class App extends React.Component {
    state = { value: 0 };

    render() {
        return (
            <div className="timeline">
                <HorizontalTimeline
                    index={this.state.value}
                    indexClick={(index) => this.setState({ value: index })}
                    values={events.map(event => event.date)}
                />
                <div>
                    {events[this.state.value].description}
                </div>
            </div>
        );
    }
}