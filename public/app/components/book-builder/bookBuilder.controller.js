(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', '$uibModal', '$timeout', 'user', 'bookService', bookBuilderController]);

      function bookBuilderController($scope, $uibModal, $timeout, user, bookService){

        $scope.user = user;
        $scope.pages = [];
        $scope.currentBook = {};


        $scope.getUserBooks = () => {
          bookService.getUserBooks(user._id)
          .then((res) => {
            console.log(res);
            $scope.userBooks = res;
          })
        }
        $scope.getUserBooks();


        $scope.getBookPages = (book) => {
          if($scope.currentBook != book){
            $scope.pages = [];
            $scope.currentBook = book;
            let pageArr = book.pages;
            if(pageArr.length < 1){
              $scope.addNewPage('', 'Basic', '', '', '', false, $scope.pages.length + 1);
            } else {
              for(var i of pageArr){
                console.log(i);
                $scope.fillPage(i);
              }
            }
          } else {
            console.log("this book is already selected");
          }
        }

        $scope.fillPage = (i) => {
          $scope.pages.push(
            {
              text: i.text,
              page_type: i.page_type,
              activity_type: i.activity_type,
              custom_activity: i.custom_activity,
              image_url: i.image_url,
              edit_allowed: i.edit_allowed,
              page_number: i.page_number
            }
          );
        }

        $scope.addNewPage = () => {
          $scope.pages.push(
            {
              text: "",
              page_type: "Basic",
              activity_type: "",
              custom_activity: "",
              image_url: "",
              edit_allowed: false,
              page_number: $scope.pages.length + 1
            });
            console.log($scope.pages);
        }

        let updatePageNums = (arr) => {
          for(var i=0; i<arr.length; i++){
            arr[i].page_number = i+1;
          }
        }

        $scope.removePage = (i) => {
          $timeout(() => {
            $scope.pages.splice(i, 1);
            updatePageNums($scope.pages);
          }, 250)
          console.log($scope.pages);
        }

        $scope.saveCurrentBook = () => {
          $scope.currentBook.pages = $scope.pages;

          bookService.saveCurrentBook($scope.currentBook._id, $scope.currentBook)
          .then((res) => {
            console.log("Save current book response: ", res, $scope.currentBook._id);

          })
        }

        $scope.openBookModal = () => {
          let modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/app/components/book-builder/new-book-modal/modal.html',
            controller: 'newBookModalController',
            resolve: {
              user: function() {
                return $scope.user;
              }
            }
          })
          modalInstance.result.then((param) => {
            if(param == 'success'){
              // $scope.addNewPage();
              $scope.getUserBooks();
            }
          })
        }

      };

})();
