(function() {
  describe('main page', function() {
    beforeEach(function() {
      browser.get('http://localhost:3000/');
    });

    it('should have title equal Easy Werewolf', function() {
      expect(browser.getTitle()).toEqual('Easy Werewolf');
    });

    describe('display', function() {
      var inputName = element(by.model('ww.playerName')),
          listPlayer = element.all(by.repeater('item in ww.showPlayer()')),
          typeWerewolf = element(by.css('[ng-value="ww.playerType.werewolf"]')),
          typeSeer = element(by.css('[ng-value="ww.playerType.seer"]')),
          deletePlayer = element(by.css('[ng-click="ww.deletePlayer($index)"]')),
          listDeadPlayer = element.all(by.repeater('name in ww.showDeadPlayer()')),
          deadBtn = element(by.css('[ng-model="item.dead"]'));

      it('should input textfield to playerNameSet', function() {
        element(by.model('ww.playerName')).sendKeys('pong', protractor.Key.ENTER);
        expect(element.all(by.repeater('item in ww.showPlayer()')).first().getText()).toContain('pong');
      });

      it('should click dead and change status dead to true', function() {
        inputName.sendKeys('pong', protractor.Key.ENTER);
        expect(listPlayer.first().getText()).toContain('"dead":false');
        deadBtn.click();
        expect(listPlayer.first().getText()).toContain('"dead":true');
      });

      it('should click werewolf type and change type player to werewolf', function() {
        inputName.sendKeys('pong', protractor.Key.ENTER);
        typeWerewolf.click();
        expect(listPlayer.first().getText()).toContain('pong');
        expect(listPlayer.first().getText()).toContain('werewolf');
      });

      it('should click seer type and change type player to seer', function() {
        inputName.sendKeys('pong', protractor.Key.ENTER);
        typeSeer.click();
        expect(listPlayer.first().getText()).toContain('pong');
        expect(listPlayer.first().getText()).toContain('seer');
      });

      it('should click delete and apper in dead player', function() {
        inputName.sendKeys('pong', protractor.Key.ENTER);
        expect(listPlayer.first().getText()).toContain('pong');
        deletePlayer.click();

        // promise style
        listDeadPlayer.then(function(arr) {
          expect(arr[0].getText()).toContain('pong');
        });
        // non promise
        expect(listDeadPlayer.first().getText()).toContain('pong');
        expect(listPlayer.count()).toEqual(0);
      });
    });

    describe('random event', function() {

      it('should random event from event list', function() {
        element(by.id('randomevent')).click();
        expect(element(by.binding('ww.eventWerewolf')).getText()).toEqual('one');
      });
    });
  });
})();
