(function () {

  angular
    .module('app')
    .controller('sandboxController', sandboxController)

  function sandboxController($scope, S3Service) {

    $scope.submitPhoto = (photo) => {

      S3Service.uploadPhoto(photo)
        .then((res) => {
          $scope.photo = res[0];
        })
        .catch((err) => {
          console.log(err)
        })
    };

  }
})();