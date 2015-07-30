(function() {
  angular.module('main', []);

  angular
    .module('main')
    .config(configMain);

  function configMain($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        views: {
          '@': {
            templateUrl: 'src/main/main.tpl.html',
            controller: 'mainController as main'
          }
        }
      });
  }

})();
