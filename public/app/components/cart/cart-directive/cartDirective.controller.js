(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', cartDirectiveController]);
  
  function cartDirectiveController($scope) {

    let ctrl = this;

    $scope.$watch('ctrl.order', (newVal) => {
        if (newVal) ctrl.cartTotal = getCartTotal(newVal);
    })

    ctrl.deleteBook = (bookId) => {
      ctrl.order = ctrl.order.filter((elem) => {
        return elem._id !== bookId;
      });
      ctrl.cartTotal = getCartTotal(ctrl.order);
      $scope.$apply()
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
