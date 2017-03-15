(function(){
   angular
      .module('app')
      .controller('bookPageDirectiveController', bookPageDirectiveController);

      function bookPageDirectiveController($scope){

         $scope.selectedType = "Basic";
         $scope.selectAct = "Crossword";

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

         $scope.removePage = () => {
           console.log("Page Removed")
         }

      };

})();