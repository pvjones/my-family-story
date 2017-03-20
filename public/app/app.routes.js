(function () {

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', config])
    .run(['$rootScope', '$window', scrollFix]);

  function config($stateProvider, $urlRouterProvider) {

    let getUser = ($state, AuthService) => {
      return AuthService.checkUser()
        .then((res) => {
          return res;
        });
    };

    let limitUser = ($state, AuthService) => {
      return AuthService.checkUser()
        .then((res) => {
          if (!res) $state.go('home');
          return res;
        })
        .catch((err) => {
          $state.go('home');
        });
    };

    let limitAdmin = ($state, AuthService) => {
      return AuthService.checkUser()
        .then((res) => {
          if (!res || res.privilege !== "admin") {
            $state.go('home')
          };
          return res;
        })
        .catch((err) => {
          $state.go('home');
        });
    };

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: './app/components/home/home.html',
        resolve: {
          user: getUser
        }
      })
      .state('about', {
        url: '/about',
        controller: 'aboutController',
        templateUrl: './app/components/about/about.html',
        resolve: {
          user: getUser
        }
      })
      .state('start', {
        url: '/start',
        templateUrl: './app/components/start/start.html',
        controller: 'startController',
        resolve: {
          user: getUser
        }
      })
      .state('book-builder', {
        url: '/book-builder',
        controller: 'bookBuilderController',
        templateUrl: './app/components/book-builder/book-builder.html',
        resolve: {
          user: limitUser
        }
      })
      .state('prints', {
        url: '/prints',
        controller: 'printsController',
        templateUrl: './app/components/prints/prints.html',
        resolve: {
          user: limitUser
        }
      })
      .state('cart', {
        url: '/cart',
        controller: 'cartController',
        templateUrl: './app/components/cart/cart.html',
        resolve: {
          user: limitUser
        }
      })
      .state('account', {
        url: '/account',
        controller: 'accountController',
        templateUrl: './app/components/account/account.html',
        resolve: {
          user: limitUser
        }
      })
      .state('sandbox', {
        url: '/sandbox',
        controller: 'sandboxController',
        templateUrl: './app/components/sandbox/sandbox.html'
      })
      .state('admin', {
        url: '/admin',
        controller: 'adminController',
        templateUrl: './app/components/admin/admin.html',
        resolve: {
          user: limitAdmin
        }
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
