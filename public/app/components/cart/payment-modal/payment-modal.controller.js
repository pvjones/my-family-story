angular.module('app')
.controller('paymentModalController', ($scope, stripe, $http, $state, $uibModalInstance, cartTotal, CartService, StripeService) => {

  $scope.cartTotal = cartTotal;

  $scope.payment = {};

  $scope.putShipAddress = function(orderId) {
    CartService.putShipAddress(orderId, $scope.shipping)
  }

  $scope.charge = function () {
    StripeService.makePayment($scope.payment.card, $scope.payment) //Run this by Stephen tomorrow
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      $uibModalInstance.close('success');
      $state.go('thanks');
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

  // $scope.validateNumber = function(value) {
  //   if (value) {
  //       if ($scope.payment.card.number.validateCardNumber(value)) {
  //           $scope.numberError = false;
  //           $scope.cardInfoForm.number.$setValidity("number", true);
  //           $scope.cardType = Stripe.card.cardType(value);
  //       } else {
  //           $scope.numberError = true;
  //           $scope.cardInfoForm.number.$setValidity("number", false);
  //       }
  //   }
  // }
  // $scope.validateExpiry = function(month, year) {
  //     if (month && year) {
  //         let exp = month + ' ' + year;
  //         if (Stripe.card.validateExpiry(exp)) {
  //             $scope.expiryError = false;
  //             $scope.cardInfoForm.month.$setValidity("month", true);
  //         } else {
  //             $scope.expiryError = true;
  //             $scope.cardInfoForm.month.$setValidity("month", false);
  //         }
  //     }
  // }
  // $scope.validateCVC = function(value) {
  //     if (value) {
  //         if (Stripe.card.validateCVC(value)) {
  //             $scope.cvcError = false;
  //             $scope.cardInfoForm.cvc.$setValidity("cvc", true);
  //         } else {
  //             $scope.cvcError = true;
  //             $scope.cardInfoForm.cvc.$setValidity("cvc", false);
  //         }
  //     }
  // }


})
