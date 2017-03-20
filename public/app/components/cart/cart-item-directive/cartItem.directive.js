(function () {

  angular
    .module('app')
    .directive('cartItem', cartItem);

  function cartItem() {

    return {
      restrict: 'E',
      templateUrl: './app/components/cart/directives/cartItem/cartItem.html',
      controller: 'cartItemController'
    }

  };
})();
