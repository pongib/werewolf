(function() {
  angular.module('roles.service', []); // เป็นการ register module (setter)

  angular
    .module('roles.service') // ถ้ามีแค่นี้ ไม่มีบรรทัดด้านบน จะไม่นับว่าเป็นการ register module (getter)
    .factory('Roles', Roles);

  function Roles() {
    var vm = this;
    vm.roles = ['Apprentice Seer', 'Bodyguard', 'Diseased', 'Hunter', 'Magician', 'Mason', 'Prince',
      'Seer','Spellcaster','Villager', 'Sorcerer', 'Minion','Werewolf', 'Wolf Cub','Cursed',
      'Doppelganger','Vampire'
    ];
    vm.selectedRole = [];
    return {
      numberOfRoles: vm.roles.length,
      selectedRole: vm.selectedRole,
      displayRoles: function () {
        return vm.roles;
      },
      addSelectedRole: function(role) {
        var id = vm.selectedRole.indexOf(role);
        if (id == -1) { //if no value in array, just push
          vm.selectedRole.push(role);
        }else if(id >= 0) { // if have, slice it out
          vm.selectedRole.splice(id,1);
        }
      }
    };


  }

})();
