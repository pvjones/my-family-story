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
      template: '<div><img ng-src="{{imgUrl}}"></div><br /><div>{{desc}}</div>',
      link: (scope, elem, attrs) => {

      }
    }
  };
})();

