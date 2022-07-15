import React, { useState, useEffect } from "react";

const ClockFunctionalComponent = (props) => {
    const [time, setTime] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            updateTime();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const updateTime = () => {
        var now = new Date();
        const newTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        setTime(newTime);
    }

    return (
        <div className="clock-container">
            <div className="clock-text">{time}</div> 
        </div>
    );
}

export default ClockFunctionalComponent;