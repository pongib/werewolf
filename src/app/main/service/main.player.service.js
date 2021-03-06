(function() {
  angular
    .module('main')
    .service('Player', function() { return Player; });

  function Player (_name_, _type_, _dead_, _silent_) {
    var vm = this;
    vm.name = _name_ || '';
    vm.type = _type_ || 'villager';
    vm.silent = angular.isDefined(_silent_)? _silent_ : false;
    vm.dead = angular.isDefined(_dead_)? _dead_  : false;
  }

  Player.prototype.hasContent = function () {
    var vm = this;
    if(vm.name.trim() === ''){
      return false;
    }else {
      return true;
    }
    // return vm.name.trim() !== ''; short code
  };
})();
