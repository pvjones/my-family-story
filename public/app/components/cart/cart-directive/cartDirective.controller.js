(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', cartDirectiveController]);

  function cartDirectiveController($scope) {

    let ctrl = this;

    $scope.$watch('ctrl.order', (newVal, oldVal) => {
      if (newVal !== oldVal) {
        ctrl.cartTotal = getCartTotal(newVal)
      }
    })

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
