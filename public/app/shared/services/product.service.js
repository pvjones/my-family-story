(function () {

  angular
    .module('app')
    .service('ProductService', ['$http', ProductService]);

  function ProductService($http) {

    this.getProductByCategory = (category) => {
      return $http({
        method: 'GET',
        url: `/api/product?category=${category}`
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
          return error
        })
    }

  };
})();
