(function() {

  angular
    .module('app')
    .service('addressService', addressService);

  function addressService($http) {

    this.getAddress = function(user) {
      return $http.get('/api/address?user=' + user).then(function(res){
        return res.data;
      })
    };

    this.postAddress = function(){
      return $http.post('/api/address').then(function(res){
        console.log(res, 'postAddress');
        return res;
      })
    }
  };
})();
