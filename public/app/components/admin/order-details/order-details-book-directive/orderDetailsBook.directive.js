(function () {

  angular
    .module('app')
    .directive('orderDetailsBook', [orderDetailsBook]);

  function orderDetailsBook() {

    return {
      restrict: 'E',
      templateUrl: './app/components/admin/order-details/order-details-book-directive/order-details-book.html',
      scope: true,
      link: link
    };

    function link(scope, elem, attrs) {

      scope.book = attrs.book;
      scope.bookNumber = +attrs.bookNumber

    }

  };
})();