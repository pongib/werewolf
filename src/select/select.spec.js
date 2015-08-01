(function() {
  describe('select page', function() {
    var subject, Roles;
    beforeEach(module('werewolf'));

    beforeEach(inject(function($controller, _Roles_) {
      subject = $controller('selectController');
      Roles = _Roles_;
    }));

    describe('display roles', function() {
      it('should display roles from roles service', function() {
        expect(subject.displayRoles()).to.equal(Roles.displayRoles());
      });

      it('should add role to Roles service', function() {
        subject.addRole('werewolf');
        expect(Roles.rolesSelectdList).to.deep.equal(['werewolf']);
      });
    });
  });
})();
