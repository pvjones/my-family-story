(function() {

  angular
    .module('app')
    .service('bookService', bookService);

  function bookService($http) {

    this.sendBookInfo = (book) => {
      return $http.post('/api/book', book)
      .then(function(response){
        console.log("Service response: ", response);
        return response;
      });
    }

  };
})();
