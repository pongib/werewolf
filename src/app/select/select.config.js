(function() {
  // hesitate to inject or not inject 'ui.router' to this DI
  // care performance and easy to read and maintain
  angular.module('select', []);

  angular
    .module('select')
    .config(configSelect);

  function configSelect($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('select', {
        url: '/select',
        views: {
          '@': {
            templateUrl: 'app/select/select.tpl.html',
            controller: 'selectController as select'
          }
        }
      });
  }

})();
