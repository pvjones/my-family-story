angular.module('app')
.controller('paymentModalController', ($scope, stripe, $http, $state, $uibModalInstance, cartTotal, CartService, StripeService) => {

  $scope.cartTotal = cartTotal;

  $scope.payment = {};

  $scope.putShipAddress = function(orderId) {
    CartService.putShipAddress(orderId, $scope.shipping)
  }

  $scope.charge = function () {
    StripeService.makePayment($scope.payment.card, $scope.payment)
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      $uibModalInstance.close('success');
      //$state.go('congrats');
    })
    .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
         alert(err.message)
       }
       else {
         console.log('Other error occurred, possibly with your API', err.message);
         alert(err.message)
       }
       $uibModalInstance.close('cancel');
     });
   };

 $scope.cancel = function() {
   $uibModalInstance.close('cancel');
 }


})
