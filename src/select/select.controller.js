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


  }

})();
