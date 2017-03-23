(function () {
  angular

    .module('app')
    .controller('cartController', ['user', '$scope', 'CartService', cartController]);

  function cartController(user, $scope, CartService) {

    $scope.showCart = false;
    $scope.defaultMessage = "Loading..."

    let userId = user._id;
    console.log(userId)

    getActiveOrder("58c87346d2ce4ecb7d5ff417")

    $scope.$watch('order', (newVal) => {
      console.log('New')
      messageHandler(newVal);
    })

    function getActiveOrder(userId) {
      CartService.getActiveOrder(userId)
        .then((res) => {
          let orderId = res._id;
          CartService.getOrderDetails(orderId)
            .then((res) => {
              $scope.order = res;
              messageHandler(res);
            })
            .catch((err) => {
              messageHandler();
            });
        })
        .catch((err) => {
          console.log("active order err", err);
        })
    }

    function messageHandler(order) {
      if (!order || order.cart.length < 1) {
        $scope.defaultMessage = "Your cart is currently empty";
      } else {
        $scope.showCart = true;
      }
    };

  };
})();
