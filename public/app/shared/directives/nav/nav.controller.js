(function () {

  angular
    .module('app')
    .controller('navController', ['AuthService', '$rootScope', '$state', navController]);

  function navController(AuthService, $rootScope, $state) {

    let ctrl = this;

    this.logout = () => {
      AuthService.logout()
        .then((res) => {
          $state.go('home')
        })
        .catch((err) => {
          console.log(err);
        });
    };

    $rootScope.$on('user', (event, user) => {
      console.log(user);
      ctrl.user = user;
    })

  };
})();