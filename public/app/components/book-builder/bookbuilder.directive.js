(function () {

  angular
    .module('app')
    .directive('bookbuilderDir', bookbuilderDir);

  function bookbuilderDir() {

      return {
        restrict: 'A',
        link: (scope, elem, attrs) => {

          $('.descrowtrigger').on('click', function(){
            $('.descrow').toggleClass('trigger');
            if($('#bookbuilderHideSpan').html() === 'Hide'){
              $('#bookbuilderHideSpan').html('Review');
            }else{
              $('#bookbuilderHideSpan').html('Hide');
            }
          })
        }
      };
    };
})();
