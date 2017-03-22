(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', 'CartService', cartDirectiveController]);
  
  function cartDirectiveController($scope, CartService) {

    let ctrl = this;

    $scope.$watch('ctrl.order', (newVal) => {
        if (newVal) ctrl.cartTotal = getCartTotal(newVal["cart"]);
    })

    ctrl.deleteBook = (bookId) => {
      ctrl.order.cart = ctrl.order.cart.filter((elem) => {
        return elem._id !== bookId;
      });
      ctrl.cartTotal = getCartTotal(ctrl.order.cart);
      $scope.$apply()

      CartService.updateOrder(ctrl.order)
        .then((res) => {
          ctrl.order = res;
        })
        .catch((err) => {
          console.log(err);
        })
    }

    function getCartTotal(cart) {
      let total = 0;
      cart.forEach((book) => {
        if (book.print_qty) total += book.print_qty.price;
        book.pageProducts.forEach((pageProduct) => {
          total += pageProduct.subtotal;
        });
      });
      return total;
    };

  };
})();
