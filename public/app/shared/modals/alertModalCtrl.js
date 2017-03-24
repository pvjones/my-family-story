(function(){
   angular
    .module('app')
    .controller('alertModalCtrl', ['$scope', '$uibModalInstance', alertModalCtrl]);

    function alertModalCtrl($scope, $uibModalInstance){
      $scope.ok = function(){
        $uibModalInstance.close('ok');
      };
    }
})();