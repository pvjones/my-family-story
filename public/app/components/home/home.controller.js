(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope) {
    console.log('homecontroller')
    $scope.howItWorks = [
      {
        imgUrl: '../../../assets/images/HIW1.png',
        desc: 'Select the number & type of pages - <a class="blue-link" ui-sref="start">learn more about pages</a>'
      },
      {
        imgUrl: '../../../assets/images/HIW2.png',
        desc: 'Submit your text & give your preferences for each page'
      },
      {
        imgUrl: '../../../assets/images/HIW3.png',
        desc: 'Make sure everything looks just right & place your order'
      }
    ]

  };
})();