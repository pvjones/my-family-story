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
      $scope.userAddress = res[0];
      console.log(res[0], 'addressCtrl');
    })

    $scope.updateUser = function(update){
      update._id = user._id;
      console.log(update);
      UserService.updateUser(update);
    }


    $scope.CreateAddress = function(address){
      address.user = $scope.user._id;
      addressService.postAddress(address);
      console.log(address);
    }
    var input = document.querySelectorAll('input');
    for(var x = 0; x < input.length; x++){
      input[x].setAttribute('size', input[x].getAttribute('placeholder').length);
    }


  };


})();
