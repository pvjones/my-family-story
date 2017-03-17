(function () {

  angular
    .module('app')
    .controller('s3Controller', ['S3Service', s3Controller]);

  function s3Controller(S3Service) {

    let ctrl = this;
    
      ctrl.submitPhoto = (photo) => {

      S3Service.uploadPhoto(photo)
        .then((res) => {
          ctrl.link = res;
          console.log(ctrl.link)
        })
        .catch((err) => {
          console.log(err)
        })
    };

  };
})();