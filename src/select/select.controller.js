(function() {
  angular
    .module('select')
    .controller('selectController', selectController);

  function selectController(Roles, Players) {
    var vm = this;
    vm.rolesList = [];
    vm.rolesSelectedList = [];
    vm.playersSelectedList = [];

    vm.displayRoles = function() {
      return Roles.displayRoles();
    };

    vm.displayPlayers = function() {
      return Players.displayPlayers();
    };

    vm.addRole = function(role) {
      Roles.addSelectedRole(role);
      vm.rolesSelectedList = Roles.rolesSelectedList;
    };

    vm.addPlayer = function(player) {
      Players.addSelectedPlayer(player);
      vm.playersSelectedList = Players.playersSelectedList;
    };


    vm.aside = {
      "title": "Title",
      "content": "Hello Aside<br />This is a multiline message!"
    };
  }

})();
