(function() {

  angular
    .module('app')
    .controller('accountController', ['$scope', 'bookService', 'addressService', 'user', accountController]);

  function accountController($scope, BookService, addressService, user) {
    $scope.user = user;
    console.log(user);

    BookService.getUserBooks(user._id).then(function(res){
      $scope.userBooks = res;
      console.log($scope.userBooks);
    })

    addressService.getAddress(user._id).then(function(res){
      console.log(res, 'addressCtrl');
    })

  
    $scope.CreateAddress = function(address){
      addressService.postAddress(address)
      console.log(address);
    }

  };


})();
