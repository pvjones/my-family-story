(function () {

  angular
    .module('app')
    .service('CartService', ['$http', 'CleanseCartService', CartService]);

  function CartService($http, CleanseCartService) {

    this.createNewOrder = (book, user) => {
      let order = {
        books: [book],
        user: user._id
      }
      return $http.post('/api/order', order)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("Error creating order: ", err);
      })
    }

    this.getAllOrders = (user) => {
      return $http.get(`/api/order?user=${user._id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("Error getting orders: ", err);
      })
    }

    this.getOrderDetails = (orderId) => {
      return $http({
        method: 'GET',
        url: `/api/order/${orderId}`
      })
        .then((res) => {
          return CleanseCartService.cleanseOrder(res.data);
        })
        .catch((err) => {
          throw err;
        });
    };

    this.updateOrder = (newOrder) => {
      let orderId = newOrder._id;
      let newOrderData = {
        books: newOrder.cart.map((book) => {
          return book._id
        })
      };

      return $http({
        method: 'PUT',
        url: `/api/order/${orderId}`,
        data: JSON.stringify(newOrderData)
      })
        .then((res) => {
          return CleanseCartService.cleanseOrder(res.data);
        })
        .catch((err) => {
          throw err;
        })
    };

    this.putShipAddress = function(orderId, shipping) {
      return $http({
        method: 'PUT',
        url: '/api/order/' + orderId,
        data: {ship_address: shipping}
      })
    }



  };
})();
