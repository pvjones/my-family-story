(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', 'user', 'bookService', bookBuilderController]);

      function bookBuilderController($scope, user, bookService){

         $scope.topVis = true;
         $scope.pages = [];
         $scope.book = {
           title: "",
           title_img: "",
           user: user._id,
           pages: $scope.pages
         };

         $scope.toggleTopUI = () => {
            $scope.topVis ? $scope.topVis = false : $scope.topVis = true;
         }

         $scope.addPage = () => {
            $scope.pages.push(
              {
                number: $scope.pages.length + 1,
                text: "",
                activity_type: "",
                custom_activity: "",
                portrait: "",
                edit_allowed: false
              });
         }

         var updatePageNums = (arr) => {
           for(var i=0; i<arr.length; i++){
             arr[i].number = i+1;
           }
         }

         $scope.removePage = (num) => {
            $scope.pages.splice(num-1, 1);
            updatePageNums($scope.pages);
         }

         $scope.sendProjectInfo = () => {
           console.log($scope.book);
            bookService.sendBookInfo($scope.book)
            .then(function(response){
              console.log("Controller response: ", response);
              return response;
            })
         }
      };

})();