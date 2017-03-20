(function(){
  angular

  .module('app')
  .controller('cartController', ['$scope', 'CartService', cartController]);

  function cartController($scope, CartService) {

    getCurrentOrderDetails('58cb1b92134e39dd0e8c27bc');
    
    function getCurrentOrderDetails(currentOrderId) {
      CartService.getOrderDetails(currentOrderId)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }
})();
