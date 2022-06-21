import React, { useState } from 'react';
import ClockFunctionalComponent from './ClockFunctionalComponent';

const MainFunctionalComponent = () => {
  const [showTime, setShowTime] = useState(true);

  const toggleTimeHandler = () => {
    const newValue = !showTime;
    setShowTime(newValue);
  }

  return (
    <div className="app">
      <header>Clock Functional Component App</header>
      { showTime && <ClockFunctionalComponent /> }
      <button className="toggle-btn" onClick={toggleTimeHandler}>
          { showTime ? "Hide clock" : "Show clock" }
      </button>
    </div>
  );
}

export default MainFunctionalComponent;
