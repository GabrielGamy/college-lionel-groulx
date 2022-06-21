import React, { Component } from "react";
import moment from "moment";

import "./style.css";

export default class CalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarWeeks: [],
      activeDay: "",
    };
  }

  componentDidMount() {
    this.setActiveDay(moment().format("DD MMMM"));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.monthToGenerate !== this.props.monthToGenerate) {
      this.build();
    }
  }

  build = () => {
    let calendarWeeks = [];
    const currentMonth = moment().month();
    const monthOffset = this.props.monthToGenerate - currentMonth;
    const _momentCloned = moment().clone().add(monthOffset, "month");

    this.props.onCalendarTitle(_momentCloned.format("MMMM YYYY"));

    let startWeek = _momentCloned.startOf("month").week();
    let endWeek = _momentCloned.endOf("month").week();

    // Cas special pour le mois de Decembre. Par exempe startWeek = 49 et endWeek  1
    if (startWeek > endWeek) {
      endWeek = startWeek + 4; // On conserve les 4 prochaines semaines du mois.
    }

    for (let week = startWeek; week <= endWeek; week++) {
      let days = Array(7)
        .fill(0)
        .map((n, i) =>
          moment().week(week).startOf("week").clone().add(i, "day")
        );

      calendarWeeks.push({ week, days });
    }

    this.setState({ calendarWeeks });
  };

  getWeekDays = (week) => {
    const calendarDays = week.days.map((day, index) => {
      const dayText = day.format("DD MMMM");
      let isActive = dayText === this.state.activeDay;
      return (
        <li
          key={index}
          className={isActive ? "active" : ""}
          onClick={() => this.setActiveDay(dayText)}
        >
          {dayText}
        </li>
      );
    });
    return calendarDays;
  };

  setActiveDay = (activeDay) => {
    this.props.onActiveDayChanged(activeDay);
    this.setState({ activeDay });
  };

  render() {
    return (
      <ul id="calendar-days" className="days">
        {this.state.calendarWeeks.map((week) => this.getWeekDays(week))}
      </ul>
    );
  }
}
