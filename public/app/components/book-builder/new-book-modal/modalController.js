(function(){
   angular
    .module('app')
    .controller('newBookModalController', ['$scope', '$uibModalInstance', 'items', newBookModalController]);

    function newBookModalController($scope, $uibModalInstance, items){

      $scope.create = () => {
        console.log("Creating");
      }
      
      $scope.cancel = function(){
        console.log("closing modal");
        $uibModalInstance.close('cancel');
      };


    }
})();