(function(){
   angular
    .module('app')
    .controller('projectModalController', ['$scope', '$http', 'user', 'userBooks', '$uibModalInstance', projectModalController]);

    function projectModalController($scope, $http, user, userBooks, $uibModalInstance){

      $scope.userBooks = userBooks;

      $scope.openProject = (param) => {
        $uibModalInstance.close(param);
      }

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