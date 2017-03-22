(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', '$uibModal', '$timeout', 'user', 'bookService', bookBuilderController]);

      function bookBuilderController($scope, $uibModal, $timeout, user, bookService){

        $scope.userBooks;
        $scope.user = user;
        
        let resetPages = () => {
          $scope.pages = [];
        }

        $scope.getUserBooks = () => {
          bookService.getUserBooks(user._id)
          .then((res) => { $scope.userBooks = res })
        }

        $scope.createNewBook = (title, img, user) => {
          console.log($scope.bookTitle);
          if($scope.userBooks.length === 0 && !title){
            $scope.openAlertModal();
          } else {
            resetPages();
            $scope.addNewPage();
            let book = {
              title: title,
              title_img: img,
              user: user,
              pages: $scope.pages
            }
            bookService.createNewBook(book)
            .then((res) => { 
              $scope.currentBook = res.data;
              $scope.fillBookInfo($scope.currentBook);
              $scope.getUserBooks();
            })
            .catch((err) => { console.error("Book creation failed!", err) })
          }
        }

        $scope.initialLoad = () => {
          bookService.getUserBooks(user._id)
          .then((res) => { 
            $scope.userBooks = res;
            if($scope.userBooks.length > 0){
              $scope.fillBookInfo($scope.userBooks[$scope.userBooks.length - 1])
            } else {
              //Provide HTML for new project
            }
          })
          .catch((err) => { console.error(err) })
        }
        $scope.initialLoad();

        $scope.fillBookInfo = (book) => {
          resetPages();
          $scope.currentBook = book;
          for(var i of book.pages){
            $scope.fillPage(i);
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

        $scope.saveBook = () => {
          $scope.currentBook.pages = $scope.pages;
          bookService.saveBook($scope.currentBook)
          .then((res) => {
            console.log("Save current book response: ", res.data);
          })
        }

        $scope.openProjectModal = () => {
          let modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/app/components/book-builder/project-view-modal/projectViewModal.html',
            controller: 'projectModalController',
            resolve: {
              user: function() { return user },
              userBooks: function() { return $scope.userBooks }
            }
          })
          modalInstance.result.then((data) => {
            if(data == "close"){ console.log("Closed")} 
            else if(data.hasOwnProperty('title') && !data.hasOwnProperty('pages')){
              $scope.createNewBook(data.title, data.title_img, data.user);
              $scope.getUserBooks();
            } else {
              $scope.getUserBooks();
              $scope.fillBookInfo(data);
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
        }

        $scope.sendToCart = () => {
          $scope.saveBook();
        }
      }
})();
