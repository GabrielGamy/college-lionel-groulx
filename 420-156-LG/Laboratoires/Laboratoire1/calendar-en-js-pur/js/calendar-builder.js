/**
 * calendar-builder.js - Construire le calendrier
 */
var Calendar = Calendar || {};

Calendar.CalendarBuilder = function () {
  /** Index du mois courant de l'année. 0 pour Janvier, 11 pour Decembre */
  const currentMonth = moment().month();

  /** Element HTML <ul id="calendar-days"></ul> */
  var calendarDaysElment = document.getElementById("calendar-days");

  /** Element HTML <li id="month-text"> */
  var monthTextElement = document.getElementById("month-text");

  /**
   * Construire le calendrier en fonction du mois.
   * @param { monthToGenerate } Index du mois à générer. Janvier = 0, Decembre = 11
   */
  var build = function (monthToGenerate) {
    let monthOffset = monthToGenerate - currentMonth;
    let calendarWeeks = [];

    /** Clone de l'objet moment() afin d'eviter des manupulations sur l'objet de base */
    const _momentCloned = moment().clone().add(monthOffset, "month");
    monthTextElement.innerHTML = _momentCloned.format("MMMM YYYY");

    calendarDaysElment.innerHTML = "";
    calendarDaysElment.setAttribute("data-month", monthToGenerate);

    let startWeek = _momentCloned.startOf("month").week();
    let endWeek = _momentCloned.endOf("month").week();

    // Cas special pour le mois de Decembre. Par exempe startWeek = 49 et endWeek  1
    if (startWeek > endWeek) {
      endWeek = startWeek + 4; // On conserve les 4 prochaines semaines du mois.
    }

    for (var week = startWeek; week <= endWeek; week++) {
      // Obtenir les 7 jours de la semaine courante.
      let days = Array(7)
        .fill(0)
        .map((n, i) =>
          moment().week(week).startOf("week").clone().add(i, "day")
        );

      calendarWeeks.push({ week, days });
    }

    // Construire la balise <li> pour chacun des jours du mois par semaine.
    calendarWeeks.forEach(_renderCalendar);

    // Mettre la date du jour comme active.
    setTodayAsActive();
  };

  /**
   * Utilisée dans la boucle d'itération forEach() pour générer
   * les balises <li> pour chacun des jours du mois.
   *
   * @param {week} La semaine en cours d'iteration
   * @param {index} La position de la semaine en cours d'iteration
   * @param {arr} Le tableau des semaines
   */
  var _renderCalendar = function (week, index, arr) {
    for (var i = 0; i < week.days.length; i++) {
      var li = document.createElement("li");
      li.setAttribute("class", "day-item");
      calendarDaysElment.appendChild(li);
      li.innerHTML += week.days[i].format("DD MMMM");
      li.addEventListener("click", setActiveDayHandlerCallback);
    }
  };

  /**
   * Au clic sur un jour du calendrier, mettre ce jour comme le jour actif.
   */
  var setActiveDayHandlerCallback = function () {
    const TaskManager = Calendar.CalendarTasks();
    var elems = document.querySelector("li.active");
    if (elems !== null) {
      elems.classList.remove("active");
    }
    this.classList.add("active");
    TaskManager.showTasks(this.textContent);
  };

  /**
   * Mettre par defaut le jour d'aujourd'hui comme actif
   */
  var setTodayAsActive = function () {
    const TaskManager = Calendar.CalendarTasks();
    const today = moment().format("DD MMMM");
    // Transformer HTMLCollection en Array, puis obtenir l'element <li> d'aujourd'hui
    const todayElementList = Array.from(
      document.getElementsByClassName("day-item")
    ).filter((element) => element.textContent === today);

    const todayElement = todayElementList.length ? todayElementList[0] : null;

    if (todayElement != null) {
      todayElement.classList.add("active");
      TaskManager.showTasks(todayElement.textContent);
    }
  };

  return {
    build,
  };
};
