(function() {
  describe('random service', function() {
    var subject, RandomEvent;

    beforeEach(module('main'));

    beforeEach(inject(function(_RandomEvent_) {
      RandomEvent = _RandomEvent_;
      console.log(RandomEvent);
    }));
    // we can stub only factory not service
    it('should random event from event stub to equal to one', function() {
      sinon.stub(RandomEvent, "random", function() {
        return 'one';
      });
      expect(RandomEvent.random.calledOnce).to.be.false;
      expect(RandomEvent.random()).to.equal('one');
      expect(RandomEvent.random.calledOnce).to.be.true;
      expect(RandomEvent.random.callCount).to.equal(1);
    });
  });
})();
