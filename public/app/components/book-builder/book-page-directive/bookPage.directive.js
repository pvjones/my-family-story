(function () {

  angular
    .module('app')
    .directive('bookPage', bookPage);

  function bookPage() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: './app/components/book-builder/book-page-directive/bookPageTemplate.html',
      bindToController: true,
      controller: 'bookPageDirectiveController',
      controllerAs: 'pageDirCtrl',
      link: (scope, elem, attrs) => {
        $('#deleter').bind('click', () => {
          alert("Are you sure you want to remove this page?");
          elem.remove();
        });
      }
    }
  };
})();