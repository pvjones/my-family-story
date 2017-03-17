(function() {

  angular
    .module('app')
    .controller('cartController', ['$scope', 'cartService', cartController]);

  function cartController($scope, cartService) {

    $scope.test = [
  		{"title": "Pauls Coloring Book", "basic": 2, "activity": 1, "portrait": 3, "price": 250},
  		{"title": "Barry's Coloring Book", "basic": 5, "activity": 4, "portrait": 2, "price": 505},
  		{"title": "Julie's Coloring Book", "basic": 3, "activity": 5, "portrait": 5, "price": 50000},
  	];

    cartService.getOrderDetails('58cb1b92134e39dd0e8c27bc')
      .then((response) => {
        console.log(response);
        $scope.orderDetails = response.data;
      })
      .catch((err) => {
        console.log(err)
      });

  };
})();
