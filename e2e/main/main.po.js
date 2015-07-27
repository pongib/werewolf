var MainPage = function () {
  this.inputPlayer = element(by.model('ww.playerName'));
  this.listPlayer = element.all(by.repeater('item in ww.showPlayer()'));
  this.typeWerewolf = element(by.css('[ng-value="ww.playerType.werewolf"]'));
  this.typeSeer = element(by.css('[ng-value="ww.playerType.seer"]'));
  this.btnDeletePlayer = element(by.css('[ng-click="ww.deletePlayer($index)"]'));
  this.listDeadPlayer = element.all(by.repeater('name in ww.showDeadPlayer()'));
  this.btnDead = element(by.css('[ng-model="item.dead"]'));

  this.get = function() {
    browser.get('http://localhost:3000/');
  };

  this.title = function() {
    return browser.getTitle();
  };

  this.inputName = function(name) {
    this.inputPlayer.sendKeys(name, protractor.Key.ENTER);
  };

  this.selectType = function(type) {
    if (type === 'werewolf') {
      this.typeWerewolf.click();
    } else if (type === 'seer') {
      this.typeSeer.click();
    }
  };

  this.selectDead = function() {
    this.btnDead.click();
  };

  this.deletePlayer = function() {
    this.btnDeletePlayer.click();
  };
};

module.exports = MainPage; //ต้องไป new ใหม่
// module.exports = new MainPage(); // new ให้ไปเลย
