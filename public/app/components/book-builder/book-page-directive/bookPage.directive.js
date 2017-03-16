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
      templateUrl: './app/components/book-builder/book-page-directive/bookPageTemplate.html',
      controller: 'bookPageDirectiveController',
      link: (scope, elem, attrs) => {
        console.log('scope.index: ', scope.index);
        setTimeout(() => $('.page' + scope.index).on('click', function() {
          $('.con' + scope.index).addClass('page-anime');
          setTimeout(function(){
            $('.con' + scope.index).removeClass('page-anime');
          }, 1000)
        }), 0);

      }
    }
  };
})();
