(function () {

  angular
    .module('app')
    .controller('productTableController', ['ProductService', '$scope', productTableController]);

  function productTableController(ProductService, $scope) {

    let ctrl = this;

    $scope.$watch('ctrl.allProducts', (newValue) => {
      if (newValue) ctrl.allProducts = newValue;
    });

    ctrl.submitProductChanges = (productArray) => {
      productArray.forEach((elem, index) => {
        ProductService.updateProduct(elem)
          .then((res) => {
            ctrl.allProducts[index] = res;
          })
          .catch((err) => {
            console.log(err);
          })
      });
    };

  };
})();