(function () {

  angular
    .module('app')
    .controller('adminArchiveController', ['$scope', 'AdminService', adminArchiveController]);

  function adminArchiveController($scope, AdminService) {

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