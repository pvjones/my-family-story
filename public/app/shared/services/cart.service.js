(function() {

  angular
    .module('app')
    .service('CartService', ['$http', 'CleanseCartService', CartService]);

  function CartService($http, CleanseCartService) {

    this.getOrderDetails = function(id) {
      return $http({
        method: 'GET',
        url: `/api/order/${id}`
      })
      .then((res) => {
        return CleanseCartService.cleanseOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    }

  };
})();
