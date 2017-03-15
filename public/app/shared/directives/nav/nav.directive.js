(function () {
  angular
    .module('app')
    .directive('navDirective', navDirective);

  function navDirective() {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: './app/shared/directives/nav/nav.html',
      controller: 'navController',
      bindToController: true,
      controllerAs: 'ctrl',
      link: (scope, elem, attr) => {

        $(window).scroll(() => {
          let winScroll = $(window).scrollTop();
          if (winScroll > 110) {
            $(elem)
              .addClass('sticky-nav');
          } else {
            $(elem)
              .removeClass('sticky-nav');
          }
        })
      }
    }
  };
})();
