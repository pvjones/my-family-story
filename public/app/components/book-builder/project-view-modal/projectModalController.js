(function(){
   angular
    .module('app')
    .controller('projectModalController', ['$scope', '$http', 'user', 'userBooks', '$uibModal', '$uibModalInstance', projectModalController]);

    function projectModalController($scope, $http, user, userBooks, $uibModal, $uibModalInstance){

      $scope.userBooks = userBooks;

      $scope.openBook = (book) => {
        $uibModalInstance.close(book);
      }

      $scope.openDeleteBookModal = (index) => {
          let modalInstance = $uibModal.open({
            animation: true,
            size: 'sm',
            templateUrl: '/app/components/book-builder/project-view-modal/delete-book-modal/deleteBookModal.html',
            controller: 'deleteBookModalController',
            resolve:{
              userBooks: function(){
                return $scope.userBooks;
              },
              index: function(){
                return index;
              }
            }
          })
          modalInstance.result.then((param) => {
            if(param === 'delete'){
              console.log("Deleting ", userBooks[index])
              $scope.deleteBook(userBooks[index]);
              $scope.userBooks.splice(index, 1);
            }
            else {
              console.log('cancelled');
            }
          })
      }

      $scope.openAlertModal = () => {
        let modalInstance = $uibModal.open({
          animation: true,
          size: 'sm',
          templateUrl: '/app/components/book-builder/project-view-modal/open-alert-modal/alertModal.html',
          controller: 'alertModalCtrl'
        })
        modalInstance.result.then((res) => {
          console.log(res);
        })
      }

      $scope.deleteBook = (book) => {
        console.log(book);
        return $http.delete(`/api/book/${book._id}`)
        .then((res) => {
          console.log("The book titled, " + book.title + " has been deleted.");
          console.log(res);
        })
        .catch((err) => { 
          console.error("Book Deletion Failed!", err) 
        })
      }

      $scope.createNewBook = () => {
        if($scope.newBookTitle !== undefined){
          let book = {
            title: $scope.newBookTitle,
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
            $uibModalInstance.close('failed');
          })
        } else {
          $scope.openAlertModal();
        }
        
      }
      
      $scope.cancel = function(){
        $uibModalInstance.close('cancel');
      };
    }
})();