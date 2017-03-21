(function(){
  angular

  .module('app')
  .controller('cartController', ['$scope', 'CartService', cartController]);

  function cartController($scope, CartService) {

    getCurrentOrder("58cb1b92134e39dd0e8c27bc")

    function getCurrentOrder(orderId) {

      CartService.getOrderDetails(orderId)
        .then((res) => {
          $scope.order = res;
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }
})();
