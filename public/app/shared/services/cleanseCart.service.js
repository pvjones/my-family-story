(function () {

  angular
    .module('app')
    .service('CleanseCartService', CleanseCartService);

  function CleanseCartService() {

    this.cleanseOrder = (resData) => {
      console.log(resData);
      $scope.orderDetails = response.data;
      $scope.pageCounts = [];

      for (let i = 0; i < $scope.orderDetails.books.length; i++) {
        let pages = {
          basic: 0,
          activity: 0,
          portrait: 0
        };

        for (let j = 0; j < $scope.orderDetails.books[i].pages.length; j++) {
          let type = $scope.orderDetails.books[i].pages[j].page_type;
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
        $scope.orderDetails.books[i].pageCount = pages;
      }
    }
    
  };
})();
