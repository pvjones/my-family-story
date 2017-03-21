(function(){
   angular
    .module('app')
    .controller('newBookModalController', ['$scope', '$http', 'user', '$uibModalInstance', newBookModalController]);

    function newBookModalController($scope, $http, user, $uibModalInstance){

      $scope.createNewBook = () => {
        let book = {
          title: $scope.bookTitle,
          title_img: "this will be title image", //$scope.titleImg,
          user: user._id
        }
        return $http.post('/api/book', book)
        .then((res) => { 
          console.log(res);
          $uibModalInstance.close('success');
        })
        .catch((err) => {
          console.error("Book creation failed!", err)
          $uibModalInstance.close('cancel');
        })
      }

      $scope.cancel = function(){
        $uibModalInstance.close('cancel');
      };


    }
})();
