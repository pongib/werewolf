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
    return {
      numberOfRoles: vm.roles.length,
      displayRoles: function () {
        return vm.roles;
      }
    };


  }

})();
