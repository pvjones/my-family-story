(function() {

  angular
    .module('app')
    .service('bookService', bookService);

  function bookService($http) {

    this.sendBookInfo = () => {
      return $http.post('/api/book')
      .then(function(response){
        return response;
      });
    }

  };
})();
