(function() {
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
            templateUrl: 'src/select/select.tpl.html',
            controller: 'selectController as select'
          }
        }
      });
  }

})();
