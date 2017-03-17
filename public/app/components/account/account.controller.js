(function() {

  angular
    .module('app')
    .controller('accountController', ['$scope', 'UserService', accountController]);

  function accountController($scope, userService) {

    userService.getUser().then(function(response) {
      $scope.userData = response;
      console.log($scope.userData, 'ctrl data');
    })

  };


})();
