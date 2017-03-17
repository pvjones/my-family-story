(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', '$timeout', bookBuilderController]);

      function bookBuilderController($scope, $timeout, bookService){

         $scope.topVis = true;
         $scope.pages = [];
         $scope.book = {
           title: "",
           title_img: "",
           date_started: "",
           user: ""
         };

        //  $scope.toggleTopUI = () => {
        //     $scope.topVis ? $timeout(() =>{
        //       $scope.topVis = false
        //     }, 200): $timeout(() => {
        //       $scope.topVis = true;
        //     }, 200);
        //  }

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

         $scope.removePage = (i) => {
                 $timeout(() => {
                   $scope.pages.splice(i, 1);
                   updatePageNums($scope.pages);
                 }, 250)


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
