(function() {

  angular
    .module('app')
    .service('bookService', bookService);

  function bookService($http) {

    this.getUserBooks = (user) => {
      return $http.get('/api/book', user)
      .then((res) => {return res.data})
      .catch((err) => {console.error(err)})
    }

    this.saveCurrentBook = (id, book) => {
      return $http.put(`/api/book/${id}`, book)
      .then((res) => {return res})
      .catch((err) => {console.error(err)})
    }

  };
})();
