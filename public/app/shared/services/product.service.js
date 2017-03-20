(function () {

  angular
    .module('app')
    .service('ProductService', ['$http', ProductService]);

  function ProductService($http) {

    this.getProductByName = (name) => {
      return $http({
        method: 'GET',
        url: `/api/product?name=${name}`
      })
        .then((response) => {
          return response.data[0];
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
    };

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
          throw error;
        })
    };

    this.getAllProducts = () => {
      return $http({
        method: 'GET',
        url: `/api/product`
      })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
    };

  };
})();
