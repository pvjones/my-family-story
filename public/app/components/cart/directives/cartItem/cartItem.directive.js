(function () {

  angular
    .module('app')
    .directive('cartItem', cartItem);

  function cartItem() {


    return {
      restrict: 'E',
      templateUrl: './cartItem/cartItem.html',
      controller: 'cartItemController'
    }


  };
})();
