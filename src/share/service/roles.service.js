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
    vm.rolesSelectdList = [];
    return {
      numberOfRoles: vm.roles.length,
      rolesSelectdList: vm.rolesSelectdList,
      displayRoles: function () {
        return vm.roles;
      },
      addSelectedRole: function(role) {
        var id = vm.rolesSelectdList.indexOf(role);
        if(id === -1) {
            vm.rolesSelectdList.push(role);
        }else if(id >= 0){
            vm.rolesSelectdList.splice(id, 1);
        }
      }
    };


  }

})();
