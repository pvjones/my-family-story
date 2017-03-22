(function(){
  angular

  .module('app')
  .controller('adminController', ['$scope', 'ProductService', adminController]);

  function adminController($scope, ProductService) {

    getAllProducts();

    function getAllProducts() {
      ProductService.getAllProducts()
        .then((response) => {
          $scope.allProducts = response;
        })
        .catch((error) => {
          console.log(error)
        })
    }
   
  }
})();
