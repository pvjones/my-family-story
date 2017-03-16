(function () {

  angular
    .module('app')
    .controller('startController', ['$scope', 'ProductService', 'user', startController]);

  function startController($scope, ProductService, user) {
    
    $scope.user = user;

    getProductByCategory('page');

    function getProductByCategory(category) {
      ProductService.getProductByCategory(category)
        .then((response) => { $scope.pageTypes = response })
        .catch((error) => console.log(error))
    };

  };
})();