import React, { Component } from "react";
import "./style.css";

export default class CalendarFooter extends Component {
  previousHandler = () => {
    this.props.onPrevious();
  };

  nextHandler = () => {
    this.props.onNext();
  };

  render() {
    return (
      <div className="calendar-actions">
        <button
          className="calendar-actions__btn js-prev"
          type="button"
          onClick={this.previousHandler}
        >
          Previous
        </button>
        <button
          className="calendar-actions__btn js-next"
          type="button"
          onClick={this.nextHandler}
        >
          Next
        </button>
      </div>
    );
  }
}
