(function(){
  angular
    .module('app')
    .controller('pageDirCtrl', ['$scope', '$uibModal', '$timeout', pageDirCtrl]);

    function pageDirCtrl($scope, $uibModal, $timeout){

      $scope.page_type = "Basic";
      $scope.activity_type = "Crossword";
      $scope.custom_activity = "";
      $scope.edit_allowed = false;

      $scope.pageTypes = [
        {name: "Basic", value: "Basic"},
        {name: "Activity", value: "Activity"},
        {name: "Portrait", value: "Portrait"}
      ]

      $scope.activity_types = [
        {name: "Crossword", value: "Crossword"},
        {name: "Connect the Dots", value: "Connect the Dots"},
        {name: "Maze", value: "Maze"},
        {name: "Custom", value: "Custom"}
      ]

      $scope.allowTypes = [
        {name: "No", value: false},
        {name: "Yes", value: true}
      ]

      $scope.openDeletePageModal = () => {
      let modalInstance = $uibModal.open({
        animation: true,
        size: 'sm',
        templateUrl: '/app/components/book-builder/delete-page-modal/deletePageModal.html',
        controller: 'deletePageModalController',
        resolve: {
          pageNum: function() {
            return $scope.page.page_number;
          }
        }
      })
      modalInstance.result.then((param) => {
        console.log($scope);
        if(param == 'delete'){
          $timeout(function(){
            $scope.$parent.$parent.removePage($scope.index);
          }, 200);
        }
        else {
          console.log('cancelled');
        }
      })
    }
  }
})();
