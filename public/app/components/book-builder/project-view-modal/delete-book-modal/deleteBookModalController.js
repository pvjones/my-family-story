(function(){
   angular
    .module('app')
    .controller('deleteBookModalController', ['$scope', '$uibModalInstance', 'userBooks', 'index', deleteBookModalController]);

    function deleteBookModalController($scope, $uibModalInstance, userBooks, index){
      console.log($scope);
      
      $scope.preTitle = userBooks[index].title;

      if($scope.preTitle === undefined){
        $scope.title = "untitled";
      } else {
        $scope.title = $scope.preTitle;
      }

      $scope.delete = () => {
        $uibModalInstance.close('delete');
      }

      $scope.cancel = () => {
        $uibModalInstance.close('cancel');
      }

    }
})();