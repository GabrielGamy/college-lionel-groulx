/**
 * ToggleClok.js - Cacher ou Afficher l'heure
 * Manipulation du DOM en JavaScript.
 */
(function () {
  var clock = document.getElementById("clock");
  var toggleBtn = document.getElementById("toggle-btn");

  function showTimeHandler() {
    let now = new Date();
    clock.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

  function toggleHandler() {
    let displayAttr = clock.style.display;

    if (displayAttr !== "none") {
      clock.style.display = "none";
      toggleBtn.innerHTML = "Show clock";
    } else {
      clock.style.display = "block";
      toggleBtn.innerHTML = "Hide clock";
    }
  }

  toggleBtn.addEventListener("click", toggleHandler);

  setInterval(showTimeHandler, 1000);
})();
