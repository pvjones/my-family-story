(function() {

  angular
    .module('app')
    .service('pageService', pageService);

  function pageService($http) {

    this.sendPageInfo = () =>{
      return $http.post('/api/page')
      .then(function(response){
        return response;
      })
    }
  };
})();
