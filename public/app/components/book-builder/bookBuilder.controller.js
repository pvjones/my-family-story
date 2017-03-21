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
            $scope.userBooks = res;
          })
        }
        $scope.getUserBooks();

        $scope.createNewBook = () => {
          $scope.addNewPage;
          let book = {
            title: $scope.bookTitle,
            title_img: "this will be title image", //$scope.titleImg,
            user: user._id,
            pages: $scope.pages
          }
          return $http.post('/api/book', book)
          .then((res) => { 
            console.log(res);
          })
          .catch((err) => { console.error("Book creation failed!", err) })
        }

        $scope.getBookPages = (book) => {
          if($scope.currentBook != book){
            $scope.pages = [];
            $scope.currentBook = book;
            if(!book.pages){
              book.pages = [];
            }
            let pageArr = book.pages;
            if(pageArr.length < 1){
              $scope.addNewPage('', 'Basic', '', '', '', false, $scope.pages.length + 1);
            } else {
              for(var i of pageArr){
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
            }
          )
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
        }

        $scope.saveCurrentBook = () => {
          $scope.currentBook.pages = $scope.pages;

          bookService.saveCurrentBook($scope.currentBook._id, $scope.currentBook)
          .then((res) => {
            console.log("Save current book response: ", res, $scope.currentBook._id);

          })
        }

        $scope.openProjectModal = () => {
          let modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/app/components/book-builder/project-view-modal/projectViewModal.html',
            controller: 'projectModalController',
            resolve: {
              user: function() {
                return $scope.user;
              },
              userBooks: function() {
                return $scope.userBooks;
              }
            }
          })
          modalInstance.result.then((data) => {
            if(data == 'cancel'){
              console.log("cancelled");
            }
            else {
              console.log(data);
              $scope.getUserBooks();
              $scope.getBookPages(data);
            }
          })
        }
      };

})();
