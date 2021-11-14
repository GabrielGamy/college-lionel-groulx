import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarFooter from './CalendarFooter';
import CalendarWeek from './CalendarWeek';

import moment from 'moment';

export default class Calendar extends Component {
    state = {
        calendarOffset: 0,
        calendarTitle: "",
        calendarWeeks: []
    }

    componentDidMount() {
        this.updateCalendar(0);
    }

    updateCalendar = (newCalendarOffset) => {
        let calendarWeeks = [];
        const cloneMomentMonth = moment().clone().add(newCalendarOffset, 'month');
        const startWeek = cloneMomentMonth.startOf('month').week();
        const endWeek = cloneMomentMonth.endOf('month').week();

        for(var week = startWeek; week <= endWeek;week++){
            let days = Array(7).fill(0)
                .map((n, i) => moment()
                .week(week)
                .startOf('week').clone()
                .add(n + i, 'day'));

            calendarWeeks.push({ week, days })
        }

        this.setState({ 
            calendarOffset: newCalendarOffset,
            calendarTitle: moment().clone().add(newCalendarOffset, 'month').format("MMMM YYYY"),
            calendarWeeks
        })
    }

    render() {
        return (
            <div class="calendar-container">
                <CalendarHeader title={this.state.calendarTitle} />
                <ul id="calendar-days" class="days">
                    { this.state.calendarWeeks.map((week, index) => {
                        return (
                            <CalendarWeek key={index} week={week} />
                        )
                    } )}
                </ul>
                <CalendarFooter />
            </div>
        );
    }
}