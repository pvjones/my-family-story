(function() {

  angular
    .module('app')
    .controller('accountController', ['$scope', 'bookService', 'addressService', 'UserService', 'user', accountController]);

  function accountController($scope, BookService, addressService, UserService, user) {
    $scope.user = user;
    // addressService.user = $scope.user;
    console.log(user);

    BookService.getUserBooks(user._id).then(function(res){
      $scope.userBooks = res;
      console.log($scope.userBooks);
    })

    addressService.getAddress(user._id).then(function(res){
      console.log(res, 'addressCtrl');
    })

    $scope.updateUser = function(user){
      console.log(user);
      UserService.updateUser(user);
    }

    $scope.CreateAddress = function(address){
      address.user = $scope.user._id;
      addressService.putAddress(address);
      console.log(address.user, 'ctrl address');
    }

    // $scope.CreateAddress = function(address){
    //   address.user = $scope.user._id;
    //   addressService.postAddress(address);
    //   console.log(address);
    // }
  };


})();
