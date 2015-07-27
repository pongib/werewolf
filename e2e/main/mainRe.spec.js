(function() {
  var MainPage = require('./main.po.js');
  describe('Main page', function() {

    var mainPage = new MainPage();

    beforeEach(function() {
      mainPage.get();
    });

    it('should have title equal Easy Werewolf', function() {
      expect(mainPage.title()).toEqual('Easy Werewolf');
    });

    describe('display', function() {
      it('#normal scenario', function() {
        mainPage.inputName('pong');
        mainPage.selectType('werewolf');
        mainPage.listPlayer.then(function(arr) {
          expect(arr[0].getText()).toContain('"type":"werewolf"');
        });
        mainPage.selectType('seer');
        mainPage.listPlayer.then(function(arr) {
          expect(arr[0].getText()).toContain('"type":"seer"');
          expect(arr[0].getText()).toContain('"dead":false');
        });
        mainPage.selectDead();
        mainPage.listPlayer.then(function(arr) {
          expect(arr[0].getText()).toContain('"dead":true');
        });
        mainPage.deletePlayer();
        mainPage.listDeadPlayer.then(function(arr) {
          expect(arr[0].getText()).toContain('"name":"pong"');
        });
      });
    });
  });
})();
