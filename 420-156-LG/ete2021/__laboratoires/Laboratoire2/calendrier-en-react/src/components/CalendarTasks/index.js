import React, { Component } from "react";
import "./style.css";

export default class CalendarTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: "",
      tasks: {},
    };
  }

  addTaskHandler = () => {
    let tasks = this.state.tasks;
    let taskValue = this.state.taskValue;
    const dayText = this.props.activeDay;

    if (!dayText.length) {
      alert("No selected day found!");
      return;
    }

    if (!taskValue.length) {
      alert("Please enter a valid task!");
      return;
    }

    tasks[dayText] = tasks[dayText] || [];

    if (tasks[dayText].length >= 5) {
      alert("You have exceeded the maximum. Please delete some tasks.");
      return;
    }

    tasks[dayText].push(taskValue);
    this.setState({ tasks, taskValue: "" });
  };

  deleteTaskHandler = (index, day) => {
    this.setState(({ tasks }) => {
      let tasksOfDay = tasks[day];
      tasksOfDay = [
        ...tasksOfDay.slice(0, index),
        ...tasksOfDay.slice(index + 1),
      ];
      return {
        tasks: { ...tasks, [day]: tasksOfDay },
      };
    });
  };

  renderTasks = () => {
    const { tasks } = this.state;
    const { activeDay } = this.props;
    const tasksOfDay = tasks[activeDay] || [];

    if (tasksOfDay.length === 0) return "No tasks found";

    return tasksOfDay.map((task, index) => (
      <li
        key={index}
        className="calendar-tasks__item"
        onDoubleClick={() => this.deleteTaskHandler(index, activeDay)}
      >
        {task}
      </li>
    ));
  };

  render() {
    return (
      <section className="calendar-tasks">
        <div className="calendar-tasks__title">Tasks</div>
        <div className="calendar-tasks__info">
          * Double click on the task to perform a delete action
        </div>
        <ol className="calendar-tasks__items">{this.renderTasks()}</ol>
        <div className="calendar-tasks__save">
          <div className="calendar-tasks__save-title">Add a new task:</div>
          <textarea
            className="calendar-tasks__save-input"
            rows="4"
            cols="50"
            value={this.state.taskValue}
            onChange={(event) => {
              this.setState({ taskValue: event.target.value });
            }}
          ></textarea>
          <button
            className="calendar-tasks__save-btn"
            type="button"
            onClick={this.addTaskHandler}
          >
            Add task
          </button>
        </div>
      </section>
    );
  }
}
