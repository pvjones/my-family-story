(function () {

  angular
    .module('app')
    .controller('adminProductsController', ["$scope", "ProductService", adminProductsController]);

  function adminProductsController($scope, ProductService) {

    getAllProducts();

    function getAllProducts() {
      ProductService.getAllProducts()
        .then((response) => {
          $scope.allProducts = response;
        })
        .catch((error) => {
          console.log(error)
        });
    };

  };
})();