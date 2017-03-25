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

    this.getOneOrderById = (orderId) => {
      return $http({
        method: 'GET',
        url: `/api/order/${orderId}`
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    };

  };
})();
