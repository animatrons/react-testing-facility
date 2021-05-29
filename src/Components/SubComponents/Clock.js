import React, { useState } from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        console.log('Clock mounted.');
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        console.log('Clock Unmounted. ByeBye.');
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h1>
                    Today is {this.state.date.toLocaleDateString()}
                </h1>
                <h1>
                    It is {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock;