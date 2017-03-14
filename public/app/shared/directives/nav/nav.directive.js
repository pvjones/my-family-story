(function () {
  angular
    .module('app')
    .directive('navDirective', navDirective);

  function navDirective() {
    return {
      restrict: 'E',
      templateUrl: './app/shared/directives/nav/nav.html'
    }
  }
})();
