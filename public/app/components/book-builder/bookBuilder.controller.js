(function(){
   angular
    .module('app')
    .controller('bookBuilderController', ['$scope', 'user', 'bookService', bookBuilderController]);

      function bookBuilderController($scope, user, bookService){

        $scope.user = user;

      //== Page Description Toggle ===========================================
         $scope.topVis = true;
         $scope.toggleTopUI = () => {
            $scope.topVis ? $scope.topVis = false : $scope.topVis = true;
         }

      //== Page Data =========================================================

        // $scope.getUserBooks = () => {
        //   bookService.getUserBooks(user._id)
        //   .then((res) => {
        //     console.log("getBooks response: ", res);
        //     return res;
        //   })
        // }

        // $scope.getUserBooks();

        $scope.userBooks = [
          {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lVIsYHeUCG2tpADGa-DglpiNrWdNPUgC5hzr3WHoXMUbbSTsEQ", title: "A great day with grandpa"},
          {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lVIsYHeUCG2tpADGa-DglpiNrWdNPUgC5hzr3WHoXMUbbSTsEQ", title: "How you kids grew up in the south when we were all wondering where you went"},
          {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lVIsYHeUCG2tpADGa-DglpiNrWdNPUgC5hzr3WHoXMUbbSTsEQ", title: "This Is Us"}
        ]

         $scope.pages = [];
         $scope.book = {
           title: "",
           title_img: "",
           user: user._id,
           pages: $scope.pages
         };

         $scope.addPage = () => {
            $scope.pages.push(
              {
                page_number: $scope.pages.length + 1,
                text: "",
                activity_type: "",
                custom_activity: "",
                portrait: "",
                edit_allowed: false
              });
              console.log($scope.pages);
         }

         let updatePageNums = (arr) => {
           for(var i=0; i<arr.length; i++){
             arr[i].page_number = i+1;
           }
         }

         $scope.removePage = (num) => {
            $scope.pages.splice(num-1, 1);
            updatePageNums($scope.pages);
         }

         $scope.sendProjectInfo = () => {
           console.log($scope.book);
            bookService.sendBookInfo($scope.book)
            .then((res) => {
              console.log("Controller response: ", res);
              return res;
            })
         }

         $scope.createNewBook = () => {
           console.log("Let's make a new book");
         }
      };

})();