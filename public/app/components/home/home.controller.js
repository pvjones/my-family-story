(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope) {

    // $(window).scroll((e) => {
    //   let winScroll = $(window).scrollY();

    //   $('.bg')
    //     .css('transform',`translateY(+${winScroll / 15}%)`);

    // })

  };
})();