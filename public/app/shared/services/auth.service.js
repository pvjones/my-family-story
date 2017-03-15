(function() {

  angular
    .module('app')
    .service('AuthService', ['$http', '$rootScope', AuthService]);

  function AuthService($http, $rootScope) {

  this.logout = () => {
    return $http({
      method: 'GET',
      url: '/api/logout'
    })
    .then((res) => {
      $rootScope.$emit('user', null);
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
  }
 
  this.checkUser = () => {
      return $http({
          method: 'GET',
          url: '/api/auth/me'
        })
        .then((res) => {
          $rootScope.$emit('user', res.data)
          return res.data;
        })
        .catch((err) => {
          $rootScope.$emit('user', null)
          throw err;
        })
    };

  };
})();
