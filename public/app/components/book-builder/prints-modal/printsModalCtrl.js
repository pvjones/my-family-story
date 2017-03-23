(function(){
   angular
    .module('app')
    .controller('printsModalCtrl', ['$scope', '$http', 'bookService', '$uibModal', '$uibModalInstance', printsModalCtrl]);

    function printsModalCtrl($scope, $http, bookService, $uibModal, $uibModalInstance){

      $scope.close = function(){
        $uibModalInstance.close('close');
      };
    }
})();