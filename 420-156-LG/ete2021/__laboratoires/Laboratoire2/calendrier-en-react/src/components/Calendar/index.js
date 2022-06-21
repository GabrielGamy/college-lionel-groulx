import React from "react";
import CalendarBody from "../CalendarBody";
import CalendarFooter from "../CalendarFooter";
import CalendarHeader from "../CalendarHeader";
import CalendarTasks from "../CalendarTasks";
import moment from "moment";
import "./style.css";

export default class Calendar extends React.Component {
  state = {
    monthToGenerate: 0,
    calendarTitle: "",
    activeDay: "",
  };

  componentDidMount() {
    this.setState({ monthToGenerate: moment().month() });
  }

  setMonthToGenerate = (newMonth) => {
    this.setState({ monthToGenerate: newMonth });
  };

  onCalendarTitle = (calendarTitle) => {
    this.setState({ calendarTitle });
  };

  onActiveDayChanged = (newActiveDay) => {
    this.setState({ activeDay: newActiveDay });
  };

  onPrevious = () => {
    this.setMonthToGenerate(this.state.monthToGenerate - 1);
  };

  onNext = () => {
    this.setMonthToGenerate(this.state.monthToGenerate + 1);
  };

  render() {
    const { calendarTitle, monthToGenerate, activeDay } = this.state;
    return (
      <>
        <section className="calendar-container">
          <CalendarHeader
            title={calendarTitle}
            onPrevious={this.onPrevious}
            onNext={this.onNext}
          />
          <CalendarBody
            monthToGenerate={monthToGenerate}
            onCalendarTitle={this.onCalendarTitle}
            onActiveDayChanged={this.onActiveDayChanged}
          />
          <CalendarFooter onPrevious={this.onPrevious} onNext={this.onNext} />
        </section>

        <CalendarTasks activeDay={activeDay} />
      </>
    );
  }
}
