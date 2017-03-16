(function () {

  angular
    .module('app')
    .controller('sandboxController', sandboxController)

  function sandboxController($scope, S3Service) {


    $scope.submitProperty = function () {
      // cleanseData($scope.property.name, $scope.property.photos);
      // If we have photos to upload, run AmazonS3Service
      console.log('The Property\n', $scope.property);
      S3Service.uploadPhotos($scope.property.name, $scope.property.mainPhoto)
        .then(function (res) {
          $scope.property.mainPhoto = res[0];
          if ($scope.property.photos) {
            S3Service.uploadPhotos($scope.property.name, $scope.property.photos)
              .then(function (res) {
                // Replace the current photos with the response array
                var photoLinksArray = res;
                $scope.property.photos = photoLinksArray;
                var temp = [];
                temp.push($scope.property.mainPhoto);
                temp = temp.concat($scope.property.photos);
                $scope.property.allPhotos = temp;
                // Upload the new property to the DB
                createProperty($scope.property);
              }, function (err) {
                console.log(err);
              });
          } else {
            // No photos to upload.
            // Simply upload the property to the DB
            createProperty($scope.property);
          }
        }, function (err) {
          console.log(err);
        })
    }


  }
})();