(function() {

  angular
    .module('app')
    .service('cartService', ['$http', 'CleanseCartService', cartService]);

  function cartService($http, CleanseCartService) {

    this.getOrderDetails = function(id) {
      return $http({
        method: 'GET',
        url: '/api/order/' + id
      })
      .then((res) => {
        //return CleanseCartService.cleanseOrder(res.data);

        console.log(res);
        pageCounts = [];

        for (let i = 0; i < res.data.books.length; i++) {
          let pages = {
            basic: 0,
            activity: 0,
            portrait: 0
          };

          for (let j = 0; j < res.data.books[i].pages.length; j++) {
            let type = res.data.books[i].pages[j].page_type;
            if (type === "Basic") {
              pages.basic += 1;
            }
            else if (type === "Activity") {
              pages.activity += 1;
            }
            else if (type === "Portrait") {
              pages.portrait += 1;
            }
          }
          $scope.pageCounts.push(pages);
          res.data.books[i].pageCounts = pages;
        }
        return (res.data)
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    }




  };


})();
