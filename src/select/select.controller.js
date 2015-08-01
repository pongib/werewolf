(function() {
  angular
    .module('select')
    .controller('selectController', selectController);

  function selectController(Roles) {
    var vm = this;
    vm.rolesList = [];
    vm.selectedList = [];

    vm.displayRoles = function() {
      return Roles.displayRoles();
    };

    vm.addRole = function(role) {
      Roles.addSelectedRole(role);
      vm.selectedList = Roles.rolesSelectdList;
    };

  }

})();
