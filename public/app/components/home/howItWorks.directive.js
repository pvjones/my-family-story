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
      template: '<img ng-src="{{imgUrl}}"><br /><div>{{desc}}</div>',
      link: (scope, elem, attrs) => {

      }
    }
  };
})();

