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
              // $('#hamDropDownUl').css("padding-top", "60px");
              $('#hamDropDownUl').addClass("hamDropDownUlWinScroll");
          } else {
            $(elem)
              .removeClass('sticky-nav');
              // $('#hamDropDownUl').css("padding-top", "100px");
              $('#hamDropDownUl').removeClass("hamDropDownUlWinScroll");
          }
        })
        $('.navBurger').on('click', function(){
          $(this).toggleClass('ham-anime');
          $('.hamDropdownContainer').toggleClass('hamDropdownAnime');
        })
        $(window).scroll(function(){
          $('.hamDropdownContainer').removeClass('hamDropdownAnime');
          $('.navBurger').removeClass('ham-anime');
        })
      }
    }
  };
})();
