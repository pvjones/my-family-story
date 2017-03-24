(function () {

  angular
    .module('app')
    .service('CartService', ['$http', 'CleanseCartService', CartService]);

  function CartService($http, CleanseCartService) {

    this.createNewOrder = (bookId, userId) => {
      let order = {
        books: [bookId],
        user: userId
      }
      return $http.post('/api/order', order)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("Error creating order: ", err);
      })
    }

    this.addBookToOrder = (orderId, bookArr) => {
      return $http.put(`/api/order/${orderId}`, {'books': bookArr})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("Error adding book to order: ", err);
      })
    }

    this.getActiveOrder = (userId) => {
      return $http({
        method: 'GET',
        url: `/api/activeorder/${userId}`
      })
      .then((res) => {
        if(res === 'No active orders'){
          console.log(res);
        } else {
          return res.data[0];
        }
      })
      .catch((err) => {
        throw err;
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

    this.updateCart = (updatedOrder) => {
      let orderId = updatedOrder._id;
      let newOrderData = {
        books: updatedOrder.cart.map((book) => {
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

    // this.markOrderComplete = function(param) {
    //
    // }

    this.putShipAddress = function(orderId, shipping) {
      return $http({
        method: 'PUT',
        url: '/api/order/' + orderId,
        data: {ship_address: shipping}
      })
    }

  };
})();
