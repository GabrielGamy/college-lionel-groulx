/**
 * calendar-tasks.js - Gestions des taches d'un jour du calendrier.
 */
var Calendar = Calendar || {};

// Dictionnaire des taches. key => day, value => Array(task)
// { "01 July": ['Learning Javascript', 'HTML test']}
var tasks = {};

Calendar.CalendarTasks = function () {
  const addTaskInput = document.getElementsByClassName(
    "calendar-tasks__save-input"
  )[0];
  const addTaskBtn = document.getElementsByClassName(
    "calendar-tasks__save-btn"
  )[0];

  var init = function () {
    addTaskHandler();
  };

  var addTaskHandler = function () {
    addTaskBtn.addEventListener("click", function () {
      const taskValue = addTaskInput.value.trim();
      const dayActiveElement = document.querySelector("li.active");
      const dayText = dayActiveElement ? dayActiveElement.textContent : "";

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

      showTasks(dayText);
    });
  };

  var deleteTaskHandler = function () {
    let elements = document.getElementsByClassName("calendar-tasks__item");
    for (var i = 0; i < elements.length; i++) {
      elements[i].removeEventListener("dblclick", deleteTaskHandlerCallback);
      elements[i].addEventListener("dblclick", deleteTaskHandlerCallback);
    }
  };

  var deleteTaskHandlerCallback = function () {
    let day = this.getAttribute("data-day");
    let index = parseInt(this.getAttribute("data-index"));
    tasks[day].splice(index, 1);
    showTasks(day);
  };

  var showTasks = function (day) {
    tasks[day] = tasks[day] || [];
    const tasksOfDay = tasks[day];
    const tasksElement = document.getElementsByClassName(
      "calendar-tasks__items"
    )[0];

    tasksElement.innerHTML = tasksOfDay.length ? "" : "No tasks found";

    for (var i = 0; i < tasksOfDay.length; i++) {
      var li = document.createElement("li");
      li.setAttribute("class", "calendar-tasks__item");
      li.setAttribute("data-day", day);
      li.setAttribute("data-index", i);
      li.innerHTML = tasksOfDay[i];
      tasksElement.appendChild(li);

      deleteTaskHandler();
    }
  };

  return {
    initialize: init,
    showTasks,
  };
};
