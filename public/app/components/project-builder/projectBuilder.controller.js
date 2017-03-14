(function(){
   angular
      .module('app')
      .controller('projectBuilderController', projectBuilderController);

      function projectBuilderController($scope){

         $scope.optionsVisible = false;

         $scope.toggleOptionsUI = function(){
            var tog = $scope.optionsVisible;
            tog ? tog = false : tog = true;
         }

      };
})();

