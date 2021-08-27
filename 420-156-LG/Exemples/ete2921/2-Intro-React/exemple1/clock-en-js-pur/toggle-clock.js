/**
 * ToggleClok.js - Cacher ou Afficher l'heure
 */
(function(){
    var clock = document.getElementById('clock');
    var toggleBtn = document.getElementById('toggle-btn');
    
    function showTimeHandler() {
      var now = new Date();
      clock.innerHTML = (
        now.getHours() + ":" + 
        now.getMinutes() + ":" + 
        now.getSeconds()
      );
    }
    
    function toggleHandler() {
        var displayAttr = clock.style.display;
        
        if (!displayAttr || displayAttr == 'block') {
          clock.style.display = 'none';
          toggleBtn.innerHTML = 'Show clock';
        }
        else {
          clock.style.display = 'block';
          toggleBtn.innerHTML = 'Hide clock';
        }
    }
    
    toggleBtn.addEventListener('click', toggleHandler);
    
    setInterval(showTimeHandler, 1000);
})();