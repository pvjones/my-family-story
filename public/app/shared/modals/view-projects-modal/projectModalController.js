(function(){
   angular
    .module('app')
    .controller('viewProjectModalCtrl', ['$scope', '$http', 'user', 'userBooks', 'bookService', 'modalService', '$uibModal', '$uibModalInstance', viewProjectModalCtrl]);

    function viewProjectModalCtrl($scope, $http, user, userBooks, bookService, modalService, $uibModal, $uibModalInstance){

      $scope.userBooks = userBooks;
      $scope.checkBookLength = false;
      if($scope.userBooks.length < 3){
        $scope.checkBookLength = true;
      }
      if($scope.userBooks.length >= 3){
        $scope.checkBookLength = false;
      }
      $scope.openBook = (book) => {
        $uibModalInstance.close(book);
      }

      $scope.openDeleteBookModal = (index) => {
          let m = modalService.openDeleteBookModal($scope.userBooks, index)
          m.result.then((res) => {
            if(res === 'delete'){
              $scope.deleteBook(userBooks[index]);
              $scope.userBooks.splice(index, 1);
              if($scope.userBooks.length < 3){
                $scope.checkBookLength = true;
              }
              if($scope.userBooks.length >= 3){
                $scope.checkBookLength = false;
              }
            }
          })
      }

      $scope.deleteBook = (book) => {
        bookService.deleteBook(book)
        .then((res) => { console.log(res) })
        .catch((err) => { console.error(err) })
      }

      $scope.close = function(){
        $uibModalInstance.close('close');
      };
    }
})();
