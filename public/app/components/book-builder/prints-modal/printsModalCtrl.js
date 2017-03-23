(function(){
   angular
    .module('app')
    .controller('printsModalCtrl', ['$scope', '$http', 'bookService', '$uibModal', '$uibModalInstance', printsModalCtrl]);

    function printsModalCtrl($scope, $http, bookService, $uibModal, $uibModalInstance){

      $scope.openAlertModal = () => {
        let modalInstance = $uibModal.open({
          animation: true,
          size: 'sm',
          templateUrl: '/app/components/book-builder/prints-modal/alertPrintModal.html',
          controller: 'alertPrintModalCtrl'
        })
      }

      $scope.sendToCart = function(){
        if(!$scope.selectedPrints){
          $scope.openAlertModal();
        } else {
          $uibModalInstance.close($scope.selectedPrints);
        }
      };

      $scope.cancel = function(){
        $uibModalInstance.close('cancel');
      }
    }
})();