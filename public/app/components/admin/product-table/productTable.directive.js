(function() {
  angular
    .module('app')
    .directive('productTable', productTable);

  function productTable() {

    return {
      restrict: 'A',
      templateUrl: './app/components/admin/product-table/product-table.html'
    }

  }

})();