(function () {

  angular
    .module('app')
    .controller('adminArchiveController', ['$scope', 'AdminService', adminArchiveController]);

  function adminArchiveController($scope, AdminService) {

    getAllArchivedOrders();

    function getAllArchivedOrders() {
      AdminService.getAllArchivedOrders()
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