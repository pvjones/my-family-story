(function() {

  angular
    .module('app')
    .service('cartService', ['$http', 'CleanseCartService', cartService]);

  function cartService($http, CleanseCartService) {

    this.getOrderDetails = function(id) {
      return $http({
        method: 'GET',
        url: '/api/order/' + id
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
