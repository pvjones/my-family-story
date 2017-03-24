(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', '$uibModal', 'CartService', cartDirectiveController]);

  function cartDirectiveController($scope, $uibModal, CartService) {

    let ctrl = this;

    $scope.$watch('ctrl.order', (newVal) => {
      "fired"
      if (newVal) ctrl.cartTotal = getCartTotal(newVal["cart"]);
    });
    // UNNECESSARY?

    ctrl.deleteBook = (bookId) => {
      ctrl.order.cart = ctrl.order.cart.filter((elem) => {
        return elem._id !== bookId;
      });
      ctrl.cartTotal = getCartTotal(ctrl.order.cart);
      
      CartService.updateCart(ctrl.order)
        .then((res) => {
          ctrl.order = res;
        })
        .catch((err) => {
          ctrl.order = {};
          console.log(err);
        })
    };

    function getCartTotal(cart) {
      let total = 0;
      cart.forEach((book) => {
        if (book.print_qty) {
          console.log(typeof(book.print_qty.price), book.print_qty.price)
          total += book.print_qty.price;
        }
        book.pageProducts.forEach((pageProduct) => {
          total += pageProduct.subtotal;
        });
      });
      console.log("cart-total", total)
      return total;
    };

  ctrl.openPaymentModal = () => {
    console.log("Cart Directive says: ", ctrl.order);
    let modalInstance = $uibModal.open({
      animation: true,
      size: 'lg',
      templateUrl: 'app/components/cart/payment-modal/payment-modal.html',
      controller: 'paymentModalController',
      resolve: {
        cartTotal: function() {
          return ctrl.cartTotal;
        },
        orderId: function() {
          return ctrl.order._id;
        }
      }
    });
      modalInstance.result.then((param) => {
        if (param == 'success') {
          console.log("From cartDirectiveController: Successful payment");
        }
        if (param == 'cancel') {
          console.log("Cancelled");
        }
      });
    };

  };

})();
