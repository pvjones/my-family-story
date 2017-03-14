(function(){
   angular
      .module('app')
      .controller('bookBuilderController', bookBuilderController);

      function bookBuilderController($scope){
         $scope.topVis = false;
         $scope.pages = [1];


         $scope.toggleTopUI = ()=>{
            $scope.topVis ? $scope.topVis = false : $scope.topVis = true;
         }

         $scope.addPage = ()=>{
            $scope.pages.push($scope.pages.length + 1);
            console.log($scope.pages);
         }

      };

})();

