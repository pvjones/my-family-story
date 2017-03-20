(function() {

  angular
    .module('app')
    .service('CartService', ['$http', 'CleanseCartService', CartService]);

  function CartService($http, CleanseCartService) {

    this.getOrderDetails = (orderId) => {
      return $http({
        method: 'GET',
        url: `/api/order/${orderId}`
      })
      .then((res) => {
        return CleanseCartService.cleanseOrder(res.data);
      })
      .catch((err) => {
        throw err;
      });

    }

  };
})();
