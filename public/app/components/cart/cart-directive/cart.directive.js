(function () {

  angular
    .module('app')
    .directive('cart', cart);

  function cart() {

    return {
      restrict: 'E',
      scope: {
        order: '='
      },
      templateUrl: './app/components/cart/cart-directive/cart-directive.html',
      controller: 'cartDirectiveController',
      bindToController: true,
      controllerAs: 'ctrl'
    }

  };
})();
