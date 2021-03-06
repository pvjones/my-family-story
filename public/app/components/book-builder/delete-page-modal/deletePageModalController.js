(function(){
   angular
    .module('app')
    .controller('deletePageModalController', ['$scope', '$uibModalInstance', 'pageNum', deletePageModalController]);

    function deletePageModalController($scope, $uibModalInstance, pageNum){

      console.log(pageNum);

      $scope.delete = () => {
        $uibModalInstance.close('delete');
      }

      $scope.cancel = () => {
        $uibModalInstance.close('cancel');
      }

    }
})();