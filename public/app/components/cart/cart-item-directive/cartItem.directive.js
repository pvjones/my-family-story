(function () {

  angular
    .module('app')
    .directive('cartItem', cartItem);

  function cartItem() {

    return {
      restrict: 'E',
      templateUrl: './app/components/cart/cart-item-directive/cart-item.html',
      controller: 'cartItemController'
    }

  };
})();
