(function() {

  angular
    .module('app')
    .service('bookService', bookService);

  function bookService($http) {

    this.getUserBooks = (user) => {
      return $http.get('/api/book', user)
      .then((res) => {
        console.log(res);
        return res;
      })
    }

    this.sendBookInfo = (book) => {
      return $http.post('/api/book', book)
      .then((res) => {
        console.log("Service response: ", res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      })
    }

  };
})();
