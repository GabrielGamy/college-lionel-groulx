import React, { Component } from 'react';

export default class CalendarHeader extends Component {
    render() {
        return (
            <>
                <div class="month">      
                    <ul>
                    <li class="prev">&#10094;</li>
                    <li class="next">&#10095;</li>
                    <li id="month-text">{this.props.title}</li>
                    </ul>
                </div>
                
                <ul class="weekdays">
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