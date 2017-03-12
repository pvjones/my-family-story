(function() {

  angular
    .module('app')
    .config(config)
  
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: './components/home/home.html',
      })
      .state('about', {
        url: '/about',
        controller: 'aboutController',
        templateUrl: './components/about/about.html'
      })

    $urlRouterProvider
      .otherwise('/home');
  };
})();