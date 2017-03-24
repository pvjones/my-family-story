(function () {

  angular
    .module('app')
    .directive('bbImgSliderDir', bbImgSliderDir);

  function bbImgSliderDir() {

      return {
        restrict: 'A',
        link: (scope, elem, attrs) => {
          var x = 0;
          var primary = scope.userBooks[x];
          var transX = 0;
          var transXM = 0;
          var transTotal = scope.userBooks.length;
          var checker = 0;
          var checkerM = 0;
          var lengthSaver = scope.userBooks.length;


          // delete=====================
          scope.$watch('userBooks.length', function(newValue, oldValue){
            if(scope.userBooks.length < lengthSaver){

              // if(scope.deletedIndex > 2){
                transX = 0;
                checker = 0;
                transTotal -= 1;
                $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
                console.log(scope.deletedIndex, 'deletedindex');
              // }
              if(scope.deletedIndex <= 2){
                // transTotal -= 1;
                // $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
              }
            }
            else{
              lengthSaver = scope.userBooks.length;
            }
          })



// delete============================


          $('#imgSliderTest1').on('click', function(){
            if(checker < transTotal - 3){
              checker ++;
              transX -= 150;
              $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
            }
          })
          $('#imgSliderTest2').on('click', function(){
            if(checker > 0){
              checker --;
              transX += 150;
              $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
            }
          })

          // ====mobile====================
                  scope.$watch('userBooks.length', function(newValue, oldValue){
                    if(scope.userBooks.length < lengthSaver){
                      transXM += 185;
                      checkerM --;
                      transTotal -= 1;
                      $('.imgSliderAbs2').css("transform", "translateX(" + transXM + "px)");
                    }
                    else{
                      lengthSaver = scope.userBooks.length;
                    }
                  })

                $('#imgSliderTest12').on('click', function(){
                  if(checkerM < transTotal - 1){
                    checkerM ++;
                    transXM -= 185;
                    $('.imgSliderAbs2').css("transform", "translateX(" + transXM + "px)");
                  }
                })
                    $('#imgSliderTest22').on('click', function(){
                      if(checkerM > 0){
                        checkerM --;
                        transXM += 185;
                        $('.imgSliderAbs2').css("transform", "translateX(" + transXM + "px)");
                      }
                    })

          // ====mobile====================
          // windowresize==========================
          $(window).resize(function(){
            if($(window).width() <= 562){
              transX = 0;
              checker = 0;
              transXM = 0;
              checkerM = 0;
              $('.imgSliderAbs2').css("transform", "translateX(" + transX + "px)");
            }
            if($(window).width() > 562){
              transX = 0;
              checker = 0;
              transXM = 0;
              checkerM = 0;
              $('.imgSliderAbs').css("transform", "translateX(" + transX + "px)");
            }
          })
        }
      };
    };
})();
