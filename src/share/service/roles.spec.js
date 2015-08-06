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

      it('should add select role to rolesSelectdList', function() {
        Roles.addSelectedRole('werewolf');
        expect(Roles.rolesSelectedList).to.deep.equal(['werewolf']);
      });

      it('should remove exist role in rolesSelectdList when add same role again', function() {
        Roles.addSelectedRole('werewolf');
        expect(Roles.rolesSelectedList).to.deep.equal(['werewolf']);
        Roles.addSelectedRole('werewolf');
        expect(Roles.rolesSelectedList).to.deep.equal([]);
      });
    });
  });
})();
