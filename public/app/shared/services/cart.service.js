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
        console.log("cartservice", res)
        return CleanseCartService.cleanseOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    }

  };
})();
