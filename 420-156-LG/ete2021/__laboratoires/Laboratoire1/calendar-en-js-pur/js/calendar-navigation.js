/**
 * calendar-navigation.js - Ecouter les evenements sur les boutons Next et Previous
 */
var Calendar = Calendar || {};

Calendar.CalendarNavigation = function () {
  const Builder = Calendar.CalendarBuilder();
  const calendarDaysElment = document.getElementById("calendar-days");
  const prevButtons = document.getElementsByClassName("js-prev");
  const nextButtons = document.getElementsByClassName("js-next");

  var init = function () {
    previousHandlder();
    nextHandler();
  };

  var previousHandlder = function () {
    for (var i = 0; i < prevButtons.length; i++) {
      prevButtons[i].addEventListener("click", function () {
        var month = parseInt(calendarDaysElment.getAttribute("data-month"));
        Builder.build(month - 1);
      });
    }
  };

  var nextHandler = function () {
    for (var i = 0; i < prevButtons.length; i++) {
      nextButtons[i].addEventListener("click", function () {
        var month = parseInt(calendarDaysElment.getAttribute("data-month"));
        Builder.build(month + 1);
      });
    }
  };

  return {
    initialize: init,
  };
};
