(function() {
  describe('Player', function() {
    var subject, Player;

    beforeEach(module('main'));

    beforeEach(inject(function(_Player_) {
      Player = _Player_;
    }));

    describe('default', function() {

      it('should set name', function() {
        subject = new Player('pongtsu');
        expect(subject.name).to.equal('pongtsu');
      });

      it('should set type', function() {
        subject = new Player('pongtsu', 'werewolf');
        expect(subject.type).to.equal('werewolf');
      });

      it('should set dead', function() {
        subject = new Player('pongtsu', 'werewolf', true);
        expect(subject.dead).to.be.true;
      });

      it('should set type to villager when not set type', function() {
        subject = new Player('pongtsu');
        expect(subject.type).to.equal('villager');
      });

      it('should set dead to false when not set dead', function() {
        subject = new Player('pongtsu');
        expect(subject.dead).to.be.false;
      });
    });

    describe('function', function() {
      describe('hasContent', function() {
        it('should return true if have name', function() {
          subject = new Player('pong');
          expect(subject.hasContent()).to.be.true;
        });
        it('should return false if not have name', function() {
          subject = new Player('');
          expect(subject.hasContent()).to.be.false;
        });
      });
    });
  });
})();
