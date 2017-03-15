(function(){
   angular
      .module('app')
      .controller('bookPageDirectiveController', bookPageDirectiveController);

      function bookPageDirectiveController($scope){

         $scope.selectedType = "Basic";
         $scope.activity_type = "Crossword";
         $scope.custom_activity = "";
         $scope.edit_allowed = false;

         $scope.pageTypes = [
            {name: "Basic", value: "Basic"}, 
            {name: "Activity", value: "Activity"},
            {name: "Portrait", value: "Portrait"}
         ];

         $scope.activity_types = [
            {name: "Crossword", value: "Crossword"}, 
            {name: "Connect the Dots", value: "Connect the Dots"},
            {name: "Maze", value: "Maze"},
            {name: "Custom", value: "Custom"}
         ];

         $scope.allowTypes = [
            {name: "No", value: false},
            {name: "Yes", value: true}
         ];

         $scope.removePage = () => {
           console.log("Page Removed")
         }

      };

})();