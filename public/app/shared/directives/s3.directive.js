(function () {

  angular
    .module('app')
    .directive('s3file', s3file);

  function s3file($parse) {

    return {
      restrict: 'A',
      scope: {
        photo: '='
      },
      controller: 's3Controller',
      bindToController: true,
      controllerAs: 'ctrl',
      link: (scope, elem, attrs, ctrl) => {

        let func = $parse(attrs.s3file)
        console.log(attrs.s3file)
        console.log(func)
        console.log(ctrl.submitPhoto)

        elem.on('change', (onChangeEvent) => {

          let reader = new FileReader();

          reader.onload = (onLoadEvent) => {
            let imageData = onLoadEvent.target.result;
            let imageExtension = imageData.split(';')[0].split('/')
            imageExtension = imageExtension[imageExtension.length - 1];
            // var fileName = files[i].name;
            let newImage = {
              //other properties can be added and passed to the server
              imageBody: imageData,
              imageExtension: imageExtension
            }

            scope.$apply(() => {
              func(scope.$parent, {
                photo: newImage
              });
            });

           ctrl.submitPhoto(newImage)

          };

          reader.readAsDataURL(onChangeEvent.target.files[0]);
        }

        );


        // el.bind('change', (event) => {
        //   var photoArray = [];
        //   var photo = event.target.files;
        //   console.log(photo)

        //   for (var i = 0; i < photo.length; i++) {
        //     var reader = new FileReader();

        //     reader.onload = (loadEvent) => {
        //       var imageData = loadEvent.target.result;
        //       var imageExtension = imageData.split(';')[0].split('/')
        //       imageExtension = imageExtension[imageExtension.length - 1];
        //       // var fileName = files[i].name;
        //       var newImage = {
        //         imageName: 'fileName',
        //         imageBody: imageData,
        //         imageExtension: imageExtension
        //       }

        //       photoArray.push(newImage);
        //       scope.photo = photoArray;
        //       scope.$parent.photo = photoArray;
        //       scope.$apply();
        //     };

        //     reader.readAsDataURL(photo[i]);
        //   }
        // });
      }
    };

  };

})();