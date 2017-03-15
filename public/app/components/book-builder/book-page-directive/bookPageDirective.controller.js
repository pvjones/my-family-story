(function(){
   angular
      .module('app')
      .controller('bookPageDirectiveController', bookPageDirectiveController);

      function bookPageDirectiveController($scope){

         $scope.selectedType = "Basic";
         $scope.selectAct = "Crossword";
         $scope.customActivityDesc = "";
         $scope.allowEdit = false;

         $scope.pageTypes = [
            {name: "Basic", value: "Basic"}, 
            {name: "Activity", value: "Activity"},
            {name: "Portrait", value: "Portrait"}
         ];

         $scope.activityTypes = [
            {name: "Crossword", value: "Crossword"}, 
            {name: "Connect the Dots", value: "Connect the Dots"},
            {name: "Maze", value: "Maze"},
            {name: "Custom", value: "Custom"}
         ];

         $scope.allowTypes = [
            {name: "No", value: false},
            {name: "Yes", value: true}
         ]

         $scope.createPageInfo = () => {
           var pageInfo = {
              //number: num,
              text: $scope.pageText,
              activityType: $scope.selectAct,
              customActivity: $scope.customActivityDesc,
              portraitUrl: "portraitUrlGoesHere",
              editAllowed: $scope.allowEdit
           }

           console.log(pageInfo);
         }

         $scope.removePage = () => {
           console.log("Page Removed")
         }

      };

})();