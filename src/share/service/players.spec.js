(function() {
  describe('Players service', function() {
    var Players;
    beforeEach(module('werewolf'));

    beforeEach(inject(function(_Players_) {
      Players = _Players_;
    }));

    describe('players', function() {
      it('should return players array form displayPlayers', function() {
        expect(Players.displayPlayers().length).to.equal(Players.numberOfPlayers);
      });

      it('should add select player to playersSelectdList', function() {
        Players.addSelectedPlayer('พี่แดน');
        expect(Players.playersSelectedList).to.deep.equal(['พี่แดน']);
      });

      it('should remove exist player in playersSelectdList when add same player again', function() {
        Players.addSelectedPlayer('พี่แดน');
        expect(Players.playersSelectedList).to.deep.equal(['พี่แดน']);
        Players.addSelectedPlayer('พี่แดน');
        expect(Players.playersSelectedList).to.deep.equal([]);
      });
    });
  });
})();
