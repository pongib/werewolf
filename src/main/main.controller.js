(function() {
  angular.module('werewolf', []);

  angular
    .module('werewolf')
    .controller('werewolfController', werewolfController);

  function werewolfController () {
    var vm = this;
    vm.playerName = '';
    vm.playerNameSet = [];
    vm.addPlayer = function(name) {
      vm.playerNameSet.push(name);
      vm.playerName = '';
    };
  }
})();
