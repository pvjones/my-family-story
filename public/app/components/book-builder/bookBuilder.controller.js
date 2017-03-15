(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', bookBuilderController]);

      function bookBuilderController($scope){

         $scope.topVis = false;
         $scope.pages = [];

         $scope.toggleTopUI = ()=>{
            $scope.topVis ? $scope.topVis = false : $scope.topVis = true;
         }

         $scope.addPage = ()=>{
            $scope.pages.push(
              {
                number: $scope.pages.length + 1,
                text: "",
                activity_type: "",
                custom_activity: "",
                portrait: "",
                edit_allowed: false
              });
              console.log($scope.pages);
         }
      };

})();