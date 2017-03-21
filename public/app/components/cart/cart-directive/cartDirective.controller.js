(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', cartDirectiveController]);
  
  function cartDirectiveController($scope) {

    let ctrl = this;

    $scope.$watch('ctrl.order', (newVal, oldVal) => {
      if (newVal !== oldVal) {
        console.log('fired')
        ctrl.cartTotal = getCartTotal(newVal)
      }
    })

    ctrl.removeItem = (itemIndex) => {
      ctrl.order.splice(itemIndex, 1)
    }

    function getCartTotal(order) {
      let total = 0;
      order.forEach((book) => {
        if (book.print_qty) total += book.print_qty;
        book.pageProducts.forEach((pageProduct) => {
          total += pageProduct.subtotal;
        });
      });
      return total;
    };

  };
})();
