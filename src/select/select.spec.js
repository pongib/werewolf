(function() {
  describe('select page', function() {
    var subject, Roles, Players;
    beforeEach(module('werewolf'));

    beforeEach(inject(function($controller, _Roles_, _Players_) {
      subject = $controller('selectController');
      Roles = _Roles_;
      Players = _Players_;
    }));

    describe('display roles', function() {
      it('should display roles from roles service', function() {
        expect(subject.displayRoles()).to.equal(Roles.displayRoles());
      });

      it('should add role to Roles service', function() {
        subject.addRole('werewolf');
        expect(Roles.rolesSelectedList).to.deep.equal(['werewolf']);
      });
    });

    describe('display player', function() {
      it('should display player from players service', function() {
        expect(subject.displayPlayers()).to.equal(Players.displayPlayers());
      });

      it('should add player to Players service', function() {
        subject.addPlayer('พี่แดน');
        expect(Players.playersSelectedList).to.deep.equal(['พี่แดน']);
      });
    });

  });
})();
