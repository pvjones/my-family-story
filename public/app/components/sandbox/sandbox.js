(function () {

  angular
    .module('app')
    .controller('sandboxController', sandboxController)

  function sandboxController($scope, S3Service) {

    $scope.items = [
      {
        id: 1,
        text: 'foo'
      },
      {
        id: 2,
        text: 'bar'
      },
      {
        id: 3,
        text: 'baz'
      },
      {
        id: 4,
        text: 'faz'
      }
    ];

  $scope.$watch('printsSelection', (newValue) => {
    console.log('parent scope', newValue)
  })




  }
})();