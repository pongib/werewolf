(function() {
  describe('Roles service', function() {
    var Roles;
    beforeEach(module('werewolf'));

    beforeEach(inject(function(_Roles_) {
      Roles = _Roles_;
    }));

    describe('roles', function() {
      it('should return roles array form displayRoles', function() {
        expect(Roles.displayRoles().length).to.equal(Roles.numberOfRoles);
      });
    });
  });
})();
