(function() {
  angular.module('players.service', []); // เป็นการ register module (setter)

  angular
    .module('players.service') // ถ้ามีแค่นี้ ไม่มีบรรทัดด้านบน จะไม่นับว่าเป็นการ register module (getter)
    .factory('Players', Players);

  function Players(Player) {
    var vm = this;
    vm.players = ['พี่แดน', 'พี่ก้อง', 'พี่กลอฟ', 'พี่นนท์', 'พี่ไบรท์', 'เทพเจ้าขิง', 'ปิงปอง',
      'น้องโม','น้องโช', 'พี่โต๊ด', 'พี่ปะจิ', 'พี่บัว','พี่ออม', 'พี่วิน', 'พี่ฟิมล์'
    ];

    vm.playersSelectedList = [];


    return {
      numberOfPlayers: vm.players.length,
      playersSelectedList: vm.playersSelectedList,
      displayPlayers: function () {
        return vm.players;
      },
      addSelectedPlayer: function(name) {
        var player = new Player(name);
        var id = vm.playersSelectedList.map(function(entry) {
          return entry.name;
        }).indexOf(name);
        if(id === -1) {
            vm.playersSelectedList.push(player);
        }else if(id >= 0){
            vm.playersSelectedList.splice(id, 1);
        }
      }
    };


  }

})();
