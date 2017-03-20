(function () {

  angular
    .module('app')
    .directive('lineItem', lineItem);

  function lineItem() {

    return {
      restrict: 'E',
      templateUrl: './app/components/cart/line-item-directive/line-item.html',
      controller: 'lineItemController'
    }
    
  };
})();
