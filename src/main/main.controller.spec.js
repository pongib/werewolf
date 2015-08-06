(function() {
  describe('werewolf', function() {
    describe('main page', function() {
      var subject, Player, vm = this, sandbox, RandomEvent, Players, Roles;

      beforeEach(module('werewolf'));

      beforeEach(inject(function($controller, _Player_, _RandomEvent_, _Players_, _Roles_) {
        subject = $controller('mainController');
        RandomEvent = _RandomEvent_;
        Player = _Player_;
        Players = _Players_;
        Roles = _Roles_;
      }));

      describe('default', function() {
        it('should set playerNameSet to blank', function() {
          expect(subject.playerNameSet).to.eql([]);
        });

        it('should contain Silent, Dead, Name and Delete column', function() {
          subject.headerTable = ['Silent', 'Dead', 'Name', 'Delete'];
          expect(subject.displayTableHead()).to.deep.equal(subject.headerTable);
        });
      });

      describe('display player', function() {
        beforeEach(function() {
          vm.item1 = new Player('pingpong');
          vm.item2 = new Player('gib');
        });

        it('should add playerName to playerNameSet', function() {
          subject.playerName = 'pingpong';
          subject.addPlayer(subject.playerName);
          subject.playerName = 'gib';
          subject.addPlayer(subject.playerName);
          expect(subject.playerNameSet).to.eql([vm.item1, vm.item2]);
        });

        it('should clear playerName to blank when submit', function() {
          subject.playerName = 'pingpong';
          subject.addPlayer(subject.playerName);
          expect(subject.playerName).to.equal('');
        });

        it('should delete player from playerNameSet', function() {
          Players.addSelectedPlayer('pingpong');
          Players.addSelectedPlayer('gib');
          Players.addSelectedPlayer('khing');
          subject.deletePlayer(2);
          expect(subject.showPlayer()).to.eql([vm.item1, vm.item2]);
        });


      });

      describe('display dead player', function() {
        it('should display dead player', function() {
          subject.addDeadPlayer('pong');
          expect(subject.showDeadPlayer()).to.eql(['pong']);
        });
      });

      describe('random silent', function() {
        beforeEach(function () {
          vm.item1 = new Player('one','werewolf');
          vm.item2 = new Player('two','werewolf');
          vm.item3 = new Player('three','villanger');
          vm.item4 = new Player('four','seer');
          vm.item5 = new Player('five','villanger');
          vm.item6 = new Player('six','bodyguard');
          vm.item7 = new Player('seven','magician');
          vm.item8 = new Player('eight','hunter');
          vm.item9 = new Player('nine','curse');
          subject.playerNameSet = [vm.item1, vm.item2, vm.item3, vm.item5, vm.item8];
        });
      });
    });
  });
})();
