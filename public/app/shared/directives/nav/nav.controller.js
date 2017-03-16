(function () {

  angular
    .module('app')
    .controller('navController', ['AuthService', '$rootScope', '$state', navController]);

  function navController(AuthService, $rootScope, $state) {

    let ctrl = this;

    this.login = AuthService.login;
    this.logout = AuthService.logout;

    $rootScope.$on('user', (event, user) => {
      ctrl.user = user;
    })

  };
})();