(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', '$state', '$uibModal', '$timeout', 'user', 'bookService', 'modalService', 'CartService', bookBuilderController]);

      function bookBuilderController($scope, $state, $uibModal, $timeout, user, bookService, modalService, CartService){

        $scope.saved = false;
        $scope.userBooks;
        $scope.user = user;

        $scope.getActiveOrder = () => {
          CartService.getActiveOrder(user._id)
          .then((res) => { $scope.activeOrder = res })
        }
        $scope.getActiveOrder();

        let resetPages = () => {
          $scope.pages = [];
        }

        $scope.getUserBooks = () => {
          bookService.getUserBooks(user._id)
          .then((res) => { $scope.userBooks = res })
        }

        $scope.createNewBook = (title, img, user) => {
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
          $scope.saved = false;
        }

        let updatePageNums = (arr) => {
          for(var i=0; i<arr.length; i++){
            arr[i].page_number = i+1;
          }
        }

        $scope.removePage = (i) => {
          if($scope.pages.length > 1){
            $timeout(() => {
              $scope.pages.splice(i, 1);
              updatePageNums($scope.pages);
            }, 250)
          }
          $scope.saved = false;
        }

        $scope.saveBook = () => {
          $scope.currentBook.pages = $scope.pages;
          bookService.saveBook($scope.currentBook)
          .then((res) => {
            $scope.saved = true;
          })
        }
        $scope.openViewProjectsModal = () => {
          let m = modalService.openViewProjectsModal(user, $scope.userBooks)
          m.result.then((data) => {
            if(data == "close"){ console.log("Closed")}
            else {
              $scope.getUserBooks();
              $scope.fillBookInfo(data);
            }
          })
        }

        $scope.openNewProjectModal = () => {
          let m = modalService.openNewProjectModal()
          m.result.then((data) => {
            if(data == "close"){ console.log("Closed")}
            else {
              $scope.createNewBook(data.title, data.title_img, user._id);
              $scope.getUserBooks();
            }
          })
        }

        $scope.openReviewModal = () => {
          let m = modalService.openReviewModal()
        }

        $scope.openAlertModal = () => {
          let modalInstance = $uibModal.open({
            animation: true,
            size: 'sm',
            templateUrl: '/app/components/book-builder/project-view-modal/open-alert-modal/alertModal.html',
            controller: 'alertModalCtrl'
          })
        }

        $scope.selectPrints = () => {
          let m = modalService.openPrintsModal()
          m.result.then((data) => {
            if(data !== 'cancel'){
              $scope.currentBook.print_qty = data;
              $scope.saveBook();
              $scope.saveToOrder($scope.currentBook, user);
            }
          })
        }

        $scope.saveToOrder = (book, user) => {
          if(!$scope.activeOrder._id){
            CartService.createNewOrder(book._id, user._id)
            .then((res) => {
              $state.go('cart');
            })
          } else {
            let newBookArray = $scope.activeOrder.books;
            let dupe = false;
            for(var i in newBookArray){
              if(book._id == newBookArray[i]){
                dupe = true;
              }
            }
            if(dupe === false){
              newBookArray.push(book._id)
              CartService.addBookToOrder($scope.activeOrder._id, newBookArray)
              .then((res) => {
                $state.go('cart');
              })
              .catch((err) => {
                console.log(err);
              })
            } else {
              $state.go('about');
            }
          }
        }
      }
})();
