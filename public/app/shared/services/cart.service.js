(function() {

  angular
    .module('app')
    .service('orderService', orderService);

  function orderService($http) {
    this.getOrderDetails = function(id) {
      return $http({
        method: 'GET',
        url: '/api/order/' + id
      })
    }

  };
})();
