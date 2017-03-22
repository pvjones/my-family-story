(function () {

  angular
    .module('app')
    .controller('sandboxController', sandboxController)

  function sandboxController($scope, S3Service) {

    $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.$watch('printsSelection', (newValue) => {
    console.log('parent scope', newValue)
  })




  }
})();