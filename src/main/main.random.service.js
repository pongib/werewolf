(function() {
  angular
    .module('werewolf')
    .factory('RandomEvent', RandomEvent);

  function RandomEvent() {
    var answer, index;
    var events = [
      'one',
      'two',
      'three'
    ];

    return {
      random: function() {
        index = Math.floor((Math.random()*vm.events.length));
        answer = events[index];
        return answer;
      }
    };
  }
})();
