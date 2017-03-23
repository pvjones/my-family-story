angular.module('app')
.controller('paymentModalController', ($scope, stripe, $http, $state, $uibModalInstance, cartTotal, orderId, CartService, StripeService) => {

  $scope.cartTotal = cartTotal;

  $scope.orderId = orderId;

  $scope.payment = {
    card: {
      name: "Meg Ryan",
      number: "4242424242424242",
      exp_month: "01",
      exp_year: "19",
      cvc: "123"
    }
  };

  $scope.ship_info = {
    ship_name: "Ghengis Khan",
    ship_address1: "Fourth yurt from the left",
    ship_address2: "",
    ship_city: "Philadelphia",
    ship_state: "PA",
    ship_zip: "10001",
    ship_country: "Uzbekibekibekistan"
  }

  $scope.putShipAddress = function(orderId) {
    CartService.putShipAddress($scope.orderId, $scope.ship_info)
  }

  $scope.charge = function () {
    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      var payment = angular.copy($scope.payment); //Arrgh, what's this payment stuff?
      payment.card = void 0;
      payment.token = response.id;

      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: $scope.cartTotal * 100,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
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
     });
 };

  $scope.cancel = function() {
   $uibModalInstance.close('cancel');
  }

  $scope.validateNumber = function(value) {
    if (value) {
        if ($scope.payment.card.number.validateCardNumber(value)) {
            $scope.numberError = false;
            $scope.cardInfoForm.number.$setValidity("number", true);
            $scope.cardType = Stripe.card.cardType(value);
        } else {
            $scope.numberError = true;
            $scope.cardInfoForm.number.$setValidity("number", false);
        }
    }
  }
  $scope.validateExpiry = function(month, year) {
      if (month && year) {
          let exp = month + ' ' + year;
          if (Stripe.card.validateExpiry(exp)) {
              $scope.expiryError = false;
              $scope.cardInfoForm.month.$setValidity("month", true);
          } else {
              $scope.expiryError = true;
              $scope.cardInfoForm.month.$setValidity("month", false);
          }
      }
  }
  $scope.validateCVC = function(value) {
      if (value) {
          if (Stripe.card.validateCVC(value)) {
              $scope.cvcError = false;
              $scope.cardInfoForm.cvc.$setValidity("cvc", true);
          } else {
              $scope.cvcError = true;
              $scope.cardInfoForm.cvc.$setValidity("cvc", false);
          }
      }
  }


})
