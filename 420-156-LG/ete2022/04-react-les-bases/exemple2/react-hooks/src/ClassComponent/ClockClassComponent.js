import React, { Component } from 'react';

class ClockClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { time: null }
    }

    componentDidMount() {
        console.log('ClockClassComponent - componentDidMount()');
        this.interval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    componentDidUpdate() {
        console.log('ClockClassComponent - componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('ClockClassComponent - componentWillUnmount()');
        clearInterval(this.interval);
    }

    updateTime = () => {
        var now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        this.setState({ time });
    }

    render(){
        return (
            <div className="clock-container">
                <div className="clock-text">{this.state.time}</div> 
            </div>
        );
    }
}

export default ClockClassComponent;