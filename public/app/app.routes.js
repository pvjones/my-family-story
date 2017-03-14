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
        templateUrl: './app/components/home/home.html',
      })
      .state('about', {
        url: '/about',
        controller: 'aboutController',
        templateUrl: './app/components/about/about.html'
      })
      .state('start', {
        url: '/start',
        controller: 'startController',
        templateUrl: './app/components/start/start.html'
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
      // .state('cart', {
      //   url: '/cart',
      //   controller: 'cartController',
      //   templateUrl: './components/cart/cart.html'
      // })
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
})();
