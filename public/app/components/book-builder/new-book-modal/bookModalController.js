(function(){
   angular
    .module('app')
    .controller('bookModalController', ['$scope', '$http', 'user', '$uibModalInstance', bookModalController]);

    function bookModalController($scope, $http, user, $uibModalInstance){

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