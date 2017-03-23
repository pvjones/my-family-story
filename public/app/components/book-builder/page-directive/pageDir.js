(function () {

  angular
    .module('app')
    .directive('bookPage', bookPage);

  function bookPage() {
    return {
      restrict: 'E',
      scope: {
        page: '=',
        index: '='
      },
      templateUrl: './app/components/book-builder/page-directive/pageTmpl.html',
      controller: 'pageDirCtrl',
      link: (scope, elem, attrs) => {

        setTimeout(function(){
          $('.page' + scope.index).on('click', function(){
            console.log(scope.index);
            setTimeout(function(){
              $('.modal-delete').on('click', function(){
                console.log('deleteeeee');
                if($('.con' + scope.index).hasClass('pageinitial')){
                  $('.con' + scope.index).removeClass('pageinitial');
                }

                $('.con' + scope.index).addClass('page-anime');
                setTimeout(function(){
                  $('.con' + scope.index).removeClass('page-anime');
                }, 400);
              })
            }, 10)
          })
        }, 0);
        // scope.$watch(elem, function(newValue, oldValue){
        //   if($('.modal-delete')){
        //     console.log('modal is here');
        //   }
        // })
      }
    }
  };
})();
