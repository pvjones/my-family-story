(function() {

  angular
    .module('app')
    .controller('cartItemController', ['$scope', 'cartService', 'CleanseCartService', cartItemController]);

  function cartItemController($scope) {

    cartService.getOrderDetails("58cb1b92134e39dd0e8c27bc").then(function(results){
      $scope.details = results;
    })


  };
})();
