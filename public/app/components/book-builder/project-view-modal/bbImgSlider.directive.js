(function () {

  angular
    .module('app')
    .directive('bbImgSliderDir', bbImgSliderDir);

  function bbImgSliderDir() {

      return {
        restrict: 'A',
        link: (scope, elem, attrs) => {
          var transX = 0;
          var transTotal = scope.userBooks.length;
          var checker = 0;
          var lengthSaver = scope.userBooks.length;

          scope.$watch('userBooks.length', function(newValue, oldValue){
            console.log(scope.userBooks.length, lengthSaver);
            if(scope.userBooks.length < lengthSaver){
              console.log('watch in if');
              transX = 0;
              checker = 0;
              transTotal -= 1;
              $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              console.log(transTotal, 'transTotal');
            }
            else{
              lengthSaver = scope.userBooks.length;
              console.log('watch in else');
            }
          })

          $('#imgSliderTest1').on('click', function(){
            if(scope.userBooks.length % 3 === 1){
              if(checker < (transTotal - 4)){
                checker += 3;
                transX -= 450;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
              else if(checker === (transTotal - 4)){
                checker += 1;
                transX -= 150;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
            }
            else if(scope.userBooks.length % 3 === 2){
              if(checker < (transTotal - 5)){
                checker += 3;
                transX -= 450;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
              else if(checker === (transTotal - 5)){
                checker +=1;
                transX -= 300;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
            }
            else if(scope.userBooks.length % 3 === 0){
              if(checker < transTotal - 3){
                checker += 3;
                transX -= 450;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
            }
          })

          $('#imgSliderTest2').on('click', function(){
            if(scope.userBooks.length % 3 === 1){
              if(checker != 0 && checker != (transTotal - 3)){
                checker -= 3;
                transX += 450;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
              else if(checker === (transTotal - 3)){
                checker -= 1;
                transX += 150;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
            }
            else if(scope.userBooks.length % 3 === 2){
              if(checker != 0 && checker != (transTotal -4)){
                checker -= 3;
                transX += 450;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
              else if(checker === (transTotal -4)){
                checker -= 1;
                transX += 300;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
            }
            else if(scope.userBooks.length % 3 === 0){
              if(checker != 0){
                checker -= 3;
                transX += 450;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
            }
          })

        }
      };
    };
})();
// if 2 -1
// if 1 -2
