(function() {

  angular
    .module('app')
    .controller('cartController', printsController);

  function printsController($scope) {

    $scope.test = [
  		{"title": "Pauls Coloring Book", "basic": 2, "activity": 1, "protrait": 0, "price": 250},
  		{"name": "Barry's Coloring Book", "basic": 1, "activity": 1, "protrait": 0, "price": 505},
  		{"name": "Julie's Coloring Book", "basic": 3, "activity": 5, "protrait": 5, "price": 50000},
  	];

  };
})();
