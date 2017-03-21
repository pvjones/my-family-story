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
          //user: function()  //anything that I need to use from the modal controller {
          //   return $scope.user //or whatever value I need to get at in the modal
          // }
        }
      })
    };

  };


  }
})();
