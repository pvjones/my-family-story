(function(){
   angular
    .module('app')
    .controller('newProjectModalCtrl', ['$scope', 'modalService', '$uibModal', '$uibModalInstance', newProjectModalCtrl]);

    function newProjectModalCtrl($scope, modalService, $uibModal, $uibModalInstance){ 

      $scope.createNewBook = () => {
        if(!$scope.newBookTitle){
          modalService.openAlertModal();
        } else {
          let book = {
            title: $scope.newBookTitle,
            title_img: $scope.titleImg
          }
          $uibModalInstance.close(book);
        }
      }

      $scope.close = () => {
        $uibModalInstance.close('close');
      };
    }
})();
