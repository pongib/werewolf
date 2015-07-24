(function() {
  angular.module('werewolf', []);

  angular
    .module('werewolf')
    .controller('werewolfController', werewolfController);

  function werewolfController (Player) {
    var vm = this, player;
    vm.playerName = '';
    vm.playerSilent = '';
    vm.playerNameSet = [];
    vm.playerDeadSet = [];
    vm.playerType = {
      werewolf: 'werewolf',
      villager: 'villager',
      seer: 'seer',
      hunter: 'hunter',
      curse: 'curse',
      bodyguard: 'bodyguard',
      magician : 'magician'
    };


    vm.showPlayer = function() {
      return vm.playerNameSet;
    };

    vm.showDeadPlayer = function() {
      return vm.playerDeadSet;
    };

    vm.addPlayer = function(name) {
      player = new Player(name);
      vm.playerNameSet.push(player);
      vm.playerName = '';
    };

    vm.addDeadPlayer = function(name) {
      vm.playerDeadSet.push(name);
    };

    vm.deletePlayer = function(index) {
      vm.addDeadPlayer(vm.playerNameSet[index]);
      vm.playerNameSet.splice(index, 1);
    };

    vm.randomSilent = function() {
      return vm.playerSilent = 'five';
    };



  }
})();
