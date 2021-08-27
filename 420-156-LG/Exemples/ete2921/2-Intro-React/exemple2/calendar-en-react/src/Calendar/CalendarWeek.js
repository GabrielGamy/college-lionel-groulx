import React, { Component } from 'react';

export default class CalendarWeek extends Component {

    render() {
        const calendarDays = this.props.week.days.map((day, index) => {
            return (
                <li key={index}>{day.format("DD MMMM")}</li>
            );
        });

        return (calendarDays);
    }
}