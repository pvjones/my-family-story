(function() {

  angular
    .module('app')
    .filter('renderHTML', renderHTML);

  function renderHTML($sce) {
    console.log('fired')
      return function(string) {
        return $sce.trustAsHtml(string)
      }
    };

})();