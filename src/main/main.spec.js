(function() {
  describe('werewolf', function() {
    describe('main page', function() {
      var subject;
      beforeEach(module('werewolf'));

      beforeEach(inject(function($controller) {
        subject = $controller('werewolfController');
      }));

      it('should add playerName to playerNameSet', function() {
        subject.playerName = 'pingpong';
        subject.addPlayer(subject.playerName);
        subject.playerName = 'gib';
        subject.addPlayer(subject.playerName);
        expect(subject.playerNameSet).to.eql(['pingpong','gib']);
      });

      it('should clear playerName to blank when submit', function() {
        subject.playerName = 'pingpong';
        subject.addPlayer(subject.playerName);
        expect(subject.playerName).to.equal('');
      });
    });
  });
})();
