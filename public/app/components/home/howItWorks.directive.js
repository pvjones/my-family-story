(function () {

  angular
    .module('app')
    .directive('howItWorks', howItWorks);

  function howItWorks() {

    return {
      restrict: 'E',
      scope: {
        imgUrl: "=",
        desc: "="
      },
      template: '<div><img ng-src="{{imgUrl}}"></div><br /><div class="divider"></div><br /><div ng-bind-html="desc | renderHTML"></div>',
      link: (scope, elem, attrs) => {

      }
    }
  };
})();

