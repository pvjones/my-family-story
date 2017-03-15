(function () {

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', config])
    .run(['$rootScope', '$window', scrollFix]);

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: './app/components/home/home.html',
      })
      .state('about', {
        url: '/about',
        controller: 'aboutController',
        templateUrl: './app/components/about/about.html'
      })
      .state('start', {
        url: '/start',
        templateUrl: './app/components/start/start.html',
        controller: 'startController'
      })
      .state('book-builder', {
        url: '/book-builder',
        controller: 'bookBuilderController',
        templateUrl: './app/components/book-builder/book-builder.html'
      })
      .state('prints', {
        url: '/prints',
        controller: 'printsController',
        templateUrl: './app/components/prints/prints.html'
      })
      .state('cart', {
        url: '/cart',
        controller: 'cartController',
        templateUrl: './app/components/cart/cart.html'
      })
      .state('account', {
        url: '/account',
        controller: 'accountController',
        templateUrl: './app/components/account/account.html'
      })
      // .state('place-order', {
      //   url: '/place-order',
      //   controller: 'placeOrderController',
      //   templateUrl: './components/place-order/place-order.html'
      // })
      // .state('confirmation', {
      //   url: '/confirmation',
      //   controller: 'confirmationController',
      //   templateUrl: './components/confirmation/confirmation.html'
      // })

    $urlRouterProvider
      .otherwise('/home');
  };

  function scrollFix($rootScope, $window) {
    $rootScope.$on('$stateChangeSuccess', function () {
      $window.scrollTo(0, 0);
    })
  };

})();
