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
        let order = CleanseCartService.cleanseOrder(res.data);
        return order;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    }

  };
})();
