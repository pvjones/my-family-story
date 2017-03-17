(function () {

  angular
    .module('app')
    .directive('s3file', s3file);

  function s3file() {

    return {
      restrict: 'A',
      scope: true,
      controller: 's3Controller',
      bindToController: true,
      controllerAs: 'ctrl',
      link: (scope, elem, attrs, ctrl) => {

        elem.on('change', (onChangeEvent) => {

          let reader = new FileReader();
          reader.onload = (onLoadEvent) => {
            
            let imageData = onLoadEvent.target.result;
            let imageExtension = imageData.split(';')[0].split('/')
            imageExtension = imageExtension[imageExtension.length - 1];
            
            let newImage = {
              //other properties can be added and passed to the server
              imageBody: imageData,
              imageExtension: imageExtension
            }
            ctrl.submitPhoto(newImage)
          };
          reader.readAsDataURL(onChangeEvent.target.files[0]);
        }
        );
      }
    };
  };

})();