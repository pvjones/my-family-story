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


        scope.$watch('wasPageDeleted' ,function(newValue, oldValue){
          if(newValue){
            console.log('I can not believe this worked');

            if($('.con' + scope.index).hasClass('pageinitial')){
              $('.con' + scope.index).removeClass('pageinitial');
            }
            $('.con' + scope.index).addClass('page-anime');
            setTimeout(function(){
              $('.con' + scope.index).removeClass('page-anime');
            }, 550);
          }
          else{
            console.log('you suck');
          }
        })
      }
    }
  };
})();
