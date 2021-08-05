/**
 * calendar.js - Ficher javascript principal qui utilise le builder et les autres actions du calendrier.
 */

(function () {
  let currentMonth = moment().month();

  const TaskManager = Calendar.CalendarTasks();
  TaskManager.initialize();

  const Navigation = Calendar.CalendarNavigation();
  Navigation.initialize();

  const Builder = Calendar.CalendarBuilder();
  Builder.build(currentMonth);
})();
