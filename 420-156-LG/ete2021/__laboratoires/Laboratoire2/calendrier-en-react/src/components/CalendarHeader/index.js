import React, { Component } from "react";
import "./style.css";

export default class CalendarHeader extends Component {
  previousHandler = () => {
    this.props.onPrevious();
  };

  nextHandler = () => {
    this.props.onNext();
  };

  render() {
    return (
      <>
        <div className="month">
          <ul>
            <li className="prev" onClick={this.previousHandler}>
              &#10094;
            </li>
            <li className="next" onClick={this.nextHandler}>
              &#10095;
            </li>
            <li id="month-text">{this.props.title}</li>
          </ul>
        </div>

        <ul className="weekdays">
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
        </ul>
      </>
    );
  }
}
