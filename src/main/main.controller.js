(function() {

  angular
    .module('main')
    .controller('mainController', mainController);

  function mainController (Player, RandomEvent, Roles, Players) {
    var vm = this, player;
    vm.playerName = '';
    vm.eventWerewolf = '';
    vm.playerNameSet = [];
    vm.playerDeadSet = [];
    vm.rolesSelectedList = Roles.rolesSelectedList;
    vm.playersSelectedList = Players.playersSelectedList;
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
      if(player.hasContent()) {
        vm.playerNameSet.push(player);
        vm.playerName = '';
      }
    };

    vm.addDeadPlayer = function(name) {
      vm.playerDeadSet.push(name);
    };

    vm.deletePlayer = function(index) {
      vm.addDeadPlayer(vm.playerNameSet[index]);
      vm.playerNameSet.splice(index, 1);
    };

    vm.randomEvent = function() {
      vm.eventWerewolf = RandomEvent.random();
      console.log(vm.eventWerewolf);
    };

    vm.displayTableHead = function () {
      vm.rolesSelectedList = Roles.rolesSelectedList.concat(['Dead', 'Name', 'Delete']);
      return vm.rolesSelectedList;
    };
  }
})();
