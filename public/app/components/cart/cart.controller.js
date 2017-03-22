(function(){
  angular

  .module('app')
  .controller('cartController', ['$scope', 'CartService', cartController]);

  function cartController($scope, CartService) {

    $scope.defaultMessage = "Loading..."

    getCurrentOrder("58cb1b92134e39dd0e8c27bc")

    function getCurrentOrder(orderId) {
      CartService.getOrderDetails(orderId)
        .then((res) => {
          $scope.order = res;
        })
        .catch((err) => {
          $scope.defaultMessage = 'Your cart is currently empty'
          console.log(err);
        });
    }

  }
})();
