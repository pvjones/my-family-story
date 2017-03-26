(function () {

  angular
    .module('app')
    .controller('adminOrdersController', ["$scope", "AdminService", adminOrdersController]);

  function adminOrdersController($scope, AdminService) {

    getAllActiveOrders();

    function getAllActiveOrders() {
      AdminService.getAllActiveOrders()
        .then((res) => {
          $scope.allOrders = res;
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        })

    };

  };
})();