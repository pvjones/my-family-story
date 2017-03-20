(function(){
   angular
    .module('app')
    .controller('projectModalController', ['$scope', '$http', 'user', 'userBooks', '$uibModalInstance', projectModalController]);

    function projectModalController($scope, $http, user, userBooks, $uibModalInstance){

      $scope.visible = false;
      $scope.userBooks = userBooks;
      $scope.bookTitle = "";
      $scope.titleImg = "";

      $scope.toggleVis = () => {
        console.log($scope.visible);
        $scope.visible ? $scope.visible = false : $scope.visible = true;
      }

      $scope.openProject = (projectName) => {
        $uibModalInstance.close(projectName);
      }

      $scope.createNewBook = () => {
        let book = {
          title: $scope.bookTitle,
          title_img: $scope.titleImg,
          user: user._id
        }
        return $http.post('/api/book', book)
        .then((res) => { 
          console.log(res);
          $uibModalInstance.close(book);
        })
        .catch((err) => { 
          console.error("Book creation failed!", err) 
          $uibModalInstance.close('cancel');
        })

        console.log($scope);
      }
      
      $scope.cancel = function(){
        $uibModalInstance.close('cancel');
      };

      $scope.checkScope = () => {
        console.log($scope);
      }
    }
})();