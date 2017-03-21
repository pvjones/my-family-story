(function(){
  angular

  .module('app')
  .controller('cartController', ['$scope', '$uibModal', 'CartService', cartController]);

  function cartController($scope, $uibModal, CartService) {

    getCurrentOrderDetails("58cb1b92134e39dd0e8c27bc")

    function getCurrentOrderDetails(orderId) {

      CartService.getOrderDetails(orderId)
        .then((res) => {
          $scope.order = res;
          console.log("cartController scope", $scope.order);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    $scope.openPaymentModal = () => {
      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: './payment-modal/payment-modal.html',
        controller: 'paymentModalController',
        resolve: {
          mockPrice: function() {
            return 50;
          }
        }
      })
      modalInstance.result.then((param) => {
        if(param == 'success'){
          alert("Thank you! Your order was succesful.");
        }
      })
    };


    // $scope.openBookModal = () => {
    //   let modalInstance = $uibModal.open({
    //     animation: true,
    //     templateUrl: '/app/components/book-builder/new-book-modal/modal.html',
    //     controller: 'newBookModalController',
    //     resolve: {
    //       user: function() {
    //         return $scope.user;
    //       }
    //     }
    //   })
    //   modalInstance.result.then((param) => {
    //     if(param == 'success'){
    //       // $scope.addNewPage();
    //       $scope.getUserBooks();
    //     }
    //   })
    // }

  }
})();
