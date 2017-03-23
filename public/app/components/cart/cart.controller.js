(function () {
  angular

    .module('app')
    .controller('cartController', ['user', '$scope', 'CartService', cartController]);

  function cartController(user, $scope, CartService) {

    $scope.showCart = false;
    $scope.defaultMessage = "Loading..."

    let userId = user._id;
    console.log(userId)

    getActiveOrder("58c87346d2ce4ecb7d5ff417");

    $scope.$watch('order', (newVal, oldVal) => {
      if (newVal !== oldVal) {
      messageHandler(newVal);
      }
    });

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
              messageHandler(err);
              console.log("messagehandler catch")
            });
        })
        .catch((err) => {
          messageHandler(err)
          console.log("active order catch", err);
        });
    };

    function messageHandler(order) {
      if (!order || !order.cart || order.cart.length < 1) {
        $scope.defaultMessage = "Your cart is currently empty";
      } else {
        $scope.showCart = true;
      }
    };

  };
})();
