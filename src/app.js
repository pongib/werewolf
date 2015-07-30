(function(){
  'use strict';

  angular.module('werewolf', [  'ui.router',
    'main',
    'select'
    ]) //setter
    .config(configState);

  angular.module('werewolf'); //getter

    function configState($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/select');
    }

})();
