(function () {
  angular
    .module('app')
    .directive('navDirective', navDirective);

  function navDirective() {
    return {
      restrict: 'E',
      templateUrl: './app/shared/directives/nav/nav.html',
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
  }
})();
