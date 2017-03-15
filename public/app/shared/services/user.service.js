(function() {

  angular
    .module('app')
    .service('userService', userService);

  function userService($http) {

    this.getUser = function() {
      return $http({
        method: 'GET',
        url: '/api/user'
      });
    };

  };
})();
