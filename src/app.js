(function(){
  'use strict';
  // inject DI to root not leaf if inject to leaf
  // you must inject every leaf that use DI
  // but it not easy to understand on leaf module use what DI
  // because it dont't have DI on leaf module
  angular.module('werewolf', ['ui.router',
    'main',
    'select'
    ]) //setter
    .config(configState);

  angular.module('werewolf'); //getter

    function configState($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/select');
    }

})();
