(function () {

  angular
    .module('app')
    .controller('ordersTableController', ['$scope', ordersTableController]);

  function ordersTableController($scope) {

    let ctrl = this;

    $scope.$watch('ctrl.allOrders', (newValue) => {
      if (newValue) {
        ctrl.allOrders = newValue;
      }
    });

    ctrl.countTotalPages = (order) => {
      let total = 0;
      if (order && order.books && order.books.length > 0) {
        order.books.forEach((book) => {
          if (book.pages && book.pages.length > 0) {
            book.pages.forEach((page) => {
              total++;
            });
          };
        });
      };
      return total;
    };

  };
})();