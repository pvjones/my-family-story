(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', bookBuilderController]);

      function bookBuilderController($scope, bookService){

         $scope.topVis = true;
         $scope.pages = [];
         $scope.book = {
           title: "",
           title_img: "",
           date_started: "",
           user: ""
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
            bookService.sendBookInfo($scope.book)
            .then(function(response){
              return response;
            })
            pageService.sendPageInfo($scope.pages)
            .then(function(response){
              return response;
            })
         }
      };

})();