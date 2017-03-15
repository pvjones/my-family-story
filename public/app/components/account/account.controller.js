(function() {

  angular
    .module('app')
    .controller('accountController', accountController);

  function accountController($scope, userService) {

    userService.getUser().then(function(response) {
      console.log(response);
      $scope.users = response.data;
    })

  };


})();
