(function () {

  angular
    .module('app')
    .directive('bookPage', bookPage);

  function bookPage() {
    return {
      restrict: 'E',
      scope: {
        page: '='
      },
      templateUrl: './app/components/book-builder/book-page-directive/bookPageTemplate.html',
      controller: 'bookPageDirectiveController',
      link: (scope, elem, attrs) => {
      }
    }
  };
})();