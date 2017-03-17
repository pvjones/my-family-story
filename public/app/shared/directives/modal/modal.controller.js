(function() {

  angular
    .module('app')
    .controller('modalController', ['$scope', '$uibModal', modalController]);

  function modalController($scope, $uibModal, $log, $document) {
    var $ctrl = this;
  };
})();
