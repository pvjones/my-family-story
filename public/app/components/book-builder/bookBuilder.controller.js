(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', bookBuilderController]);

      function bookBuilderController($scope){
         $scope.topVis = false;
         $scope.pages = [1];

         $scope.toggleTopUI = ()=>{
            $scope.topVis ? $scope.topVis = false : $scope.topVis = true;
         }

         $scope.addPage = ()=>{
            $scope.pages.push($scope.pages.length + 1);
         }
         
      };

})();