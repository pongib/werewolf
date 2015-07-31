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

      it('should add selected role to roleSelected', function() {
        Roles.addSelectedRole('werewolf');
        expect(Roles.selectedRole).to.deep.equal(['werewolf']);
      });

      it('should delete same value from selectedRole', function() {
        Roles.addSelectedRole('werewolf');
        expect(Roles.selectedRole).to.deep.equal(['werewolf']);
        Roles.addSelectedRole('werewolf');
        expect(Roles.selectedRole).to.deep.equal([]);
      });
    });
  });
})();
