(function () {

  angular
    .module('app')
    .directive('bookPage', bookPage);

  function bookPage() {
    return {
      restrict: 'E',
      scope: {
        
      },
      templateUrl: './app/components/book-builder/book-page-directive/bookPageTemplate.html',
      bindToController: true,
      controller: 'bookPageDirectiveController',
      controllerAs: 'pageDirCtrl',
      link: (scope, elem, attrs) => {

      }
    }
  };
})();