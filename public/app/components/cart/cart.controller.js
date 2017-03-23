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
          console.log($scope.order.cart.length)
          if ($scope.order.cart.length == 0) {
            $scope.defaultMessage = 'Your cart is currently empty';
          }
        })
        .catch((err) => {
          $scope.defaultMessage = 'Your cart is currently empty'
          console.log(err);
        });
    }

  }
})();
