(function() {

  angular
    .module('app')
    .service('UserService', ['$http', UserService]);

  function UserService($http) {
    this.getUser = function() {
      return $http.get('/api/auth/me').then(function(res){
        console.log(res.data);
        return res.data;
      })
    };
  };
})();
