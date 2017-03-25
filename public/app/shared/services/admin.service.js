(function () {

  angular
    .module('app')
    .service('AdminService', ['$http', AdminService]);

  function AdminService($http) {

    this.getAllActiveOrders = () => {
      return $http({
        method: 'GET',
        url: `/api/allactiveorders`
      })
        .then((res) => {
          if (res === 'No active orders') {
            console.log(res);
          } else {
            return res.data;
          }
        })
        .catch((err) => {
          throw err;
        });
    };

  };
})();
