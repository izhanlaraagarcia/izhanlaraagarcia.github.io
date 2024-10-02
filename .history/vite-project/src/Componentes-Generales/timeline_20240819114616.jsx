import React from "react";
import HorizontalTimeline from 'react-horizontal-timeline';

import './styles/timelinecss.scss'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HorizontalTimeline
                    index={0}
                    indexClick={(index) => console.log(index)}
                    values={['2020-01-01', '2020-02-01', '2020-03-01']}
                />
            </div>
        );
    }
}