(function () {
  angular
    .module('app')
    .directive('modalDirective', modalDirective);

  function modalDirective() {
    return {
      restrict: 'E',
      templateUrl: './app/shared/directives/modal/modal.html'

    }
  }
})();
