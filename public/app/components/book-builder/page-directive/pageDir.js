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

        setTimeout(() => $('modal-delete').on('click', function() {
          if($('.con' + scope.index).hasClass('pageinitial')){
            $('.con' + scope.index).removeClass('pageinitial');
          }
          $('.con' + scope.index).addClass('page-anime');
          setTimeout(function(){
            $('.con' + scope.index).removeClass('page-anime');
          }, 250);
        }), 250);
      }
    }
  };
})();