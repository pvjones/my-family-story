(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', cartDirectiveController]);
  
  function cartDirectiveController($scope) {

    let ctrl = this;

    $scope.$watch('ctrl.order', (newVal) => {
        if (newVal) ctrl.cartTotal = getCartTotal(newVal);
    })

    ctrl.deleteBook = (itemIndex) => {
      ctrl.order.splice(itemIndex, 1);
      ctrl.cartTotal = getCartTotal(ctrl.order)
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
