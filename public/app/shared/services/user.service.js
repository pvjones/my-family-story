(function() {

  angular
    .module('app')
    .service('UserService', ['$http', UserService]);

  function UserService($http) {
    this.getUser = function() {
      return $http({
        method: 'GET',
        url: '/api/user'
      });
    };

  };
})();
