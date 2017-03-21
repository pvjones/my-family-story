(function () {

  angular
    .module('app')
    .controller('cartDirectiveController', ['$scope', '$uibModal', cartDirectiveController]);

  function cartDirectiveController($scope, $uibModal) {

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

  $scope.openPaymentModal = () => {
    let modalInstance = $uibModal.open({
      animation: true,
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
