/**
 * Calendar.js - Construire le calendrier
 */
(function(){
    var calendarDaysElment = document.getElementById('calendar-days');
    var monthTextElement = document.getElementById('month-text');

    let calendarWeeks = []
    let calendarOffset = 0;

    monthTextElement.innerHTML = moment()
        .clone()
        .add(calendarOffset, 'month')
        .format("MMMM YYYY")

    const cloneMomentMonth = moment().clone().add(calendarOffset, 'month');
    const startWeek = cloneMomentMonth.startOf('month').week();
    const endWeek = cloneMomentMonth.endOf('month').week();

    for(var week = startWeek; week<=endWeek;week++){
      let days = Array(7).fill(0)
        .map((n, i) => moment()
        .week(week)
        .startOf('week').clone()
        .add(n + i, 'day'));

      calendarWeeks.push({ week, days })
    }

    calendarWeeks.forEach(renderCalendar);

    function renderCalendar(week, index, arr) {
      for(var i = 0; i < week.days.length; i++) {
          var li = document.createElement('li');
          li.setAttribute('class','item');

          calendarDaysElment.appendChild(li);

          li.innerHTML += week.days[i].format("DD MMMM");
        }
    }
})();