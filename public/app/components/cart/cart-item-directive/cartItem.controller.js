(function() {

  angular
    .module('app')
    .controller('cartItemController', ['$scope', 'CartService', 'CleanseCartService', cartItemController]);

  function cartItemController($scope, CartService, CleanseCartService) {

    CartService.getOrderDetails("58cb1b92134e39dd0e8c27bc").then(function(results){
      $scope.details = results;
    })


  };
})();
