(function () {

  angular
    .module('app')
    .directive('cartLineItem', cartLineItem);

  function cartLineItem() {



    return {
      restrict: 'E',
      templateUrl: './cartLineItem/cartLineItem.html',
      controller: 'cartLineItemController'
    }



  };
})();
