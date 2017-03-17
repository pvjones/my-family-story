(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', '$uibModal', '$timeout', 'user', 'bookService', bookBuilderController]);

      function bookBuilderController($scope, $uibModal, $timeout, user, bookService){

        $scope.user = user;

      //== Page Description Toggle ===========================================
        $scope.topVis = true;
        $scope.toggleTopUI = () => {
          $scope.topVis ? $timeout(() =>{
            $scope.topVis = false
          }, 200): $timeout(() => {
            $scope.topVis = true;
          }, 200);
        }

      //== Page Data =========================================================

        $scope.getUserBooks = () => {
          bookService.getUserBooks(user._id)
          .then((res) => {
            console.log(res);
            $scope.userBooks = res;
          })
        }
        $scope.getUserBooks();


          $scope.pages = [];
          $scope.book = {
            title: "",
            title_img: "",
            user: user._id,
            pages: $scope.pages
          };

          $scope.addPage = () => {
              $scope.pages.push(
                {
                  page_number: $scope.pages.length + 1,
                  text: "",
                  activity_type: "",
                  custom_activity: "",
                  portrait: "",
                  edit_allowed: false
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
          }

          $scope.sendProjectInfo = () => {
            console.log($scope.book);
              bookService.sendBookInfo($scope.book)
              .then((res) => {
                console.log("Controller response: ", res);
                return res;
              })
          }

          $scope.createNewBook = () => {
            let modalInstance = $uibModal.open({
              animation: true,
              templateUrl: '/app/components/book-builder/new-book-modal/modal.html',
              controller: 'newBookModalController',
              resolve: {
                items: function() {
                  return $scope.items;
                }
              }
            })
          }
      };

})();
