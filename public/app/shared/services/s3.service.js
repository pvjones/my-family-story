(function () {

  angular
    .module('app')
    .service('S3Service', ['$http', '$q', S3Service])

  function S3Service($http, $q) {

    this.uploadPhotos = function (propertyName, photos) {
      photos = preparePhotos(propertyName, photos);
      photos = angular.toJson(photos);
      return $http.post('/api/upload-photos', photos)
        .then(function (res) {
          return res.data;
        }, function (err) {
          console.log(err);
          return err;
        });

      /******************** PREPARE PHOTOS ********************/
      function preparePhotos(name, photos) {
        var propertyName = name.replace(/ /g, '');
        for (var i = 0; i < photos.length; i++) {
          photos[i].imageName = propertyName + i;
        }
        return photos;
      }
      
    }

  };

})();