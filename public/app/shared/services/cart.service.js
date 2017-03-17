(function() {

  angular
    .module('app')
    .service('cartService', cartService);

  function cartService($http) {

    this.getOrderDetails = function(id) {
      return $http({
        method: 'GET',
        url: '/api/order/' + id
      })
    }
  };


})();
