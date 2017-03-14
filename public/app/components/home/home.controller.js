(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope) {

    $scope.howItWorks = [
      {
        imgUrl: '../../../assets/images/HIW1.png',
        desc: 'Select the number & type of pages <a href="start">Learn more about pages</a>'
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