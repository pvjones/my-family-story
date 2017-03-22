(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', '$uibModal', 'CartService', cartDirectiveController]);

  function cartDirectiveController($scope, $uibModal, CartService) {

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
        if (book.print_qty) total += book.print_qty;
        book.pageProducts.forEach((pageProduct) => {
          total += pageProduct.subtotal;
        });
      });
      return total;
    };

  $scope.openPaymentModal = () => {
    let modalInstance = $uibModal.open({
      animation: true,
      size: 'md',
      ariaLabelledBy: 'ariaCardInfo',
      templateUrl: 'app/components/cart/payment-modal/payment-modal.html',
      controller: 'paymentModalController',
      resolve: {
        mockPrice: function() {
          return $scope.mockPrice;
        }
      }
    })
    modalInstance.result.then((param) => {
      if(param == 'success'){
        alert("Thank you! Your order was succesful.");
      }
    })
  };

  };

})();
