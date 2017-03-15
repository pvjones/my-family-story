(function () {

  angular
    .module('app')
    .controller('startController', ['$scope', 'ProductService', startController]);

  function startController($scope, ProductService) {

    getProductByCategory('page');

    function getProductByCategory(category) {
      ProductService.getProductByCategory(category)
        .then((response) => { $scope.pageTypes = response })
        .catch((error) => console.log(error))
    };

  };
})();