(function(){
  angular

  .module('app')
  .controller('cartController', ['$scope', 'CartService', cartController]);

  function cartController($scope, CartService) {

    getCurrentOrderDetails("58cb1b92134e39dd0e8c27bc")

    function getCurrentOrderDetails(orderId) {

      CartService.getOrderDetails(orderId)
        .then((res) => {
          $scope.order = res;
          console.log($scope.order);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }
})();
