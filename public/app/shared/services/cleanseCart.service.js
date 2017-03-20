(function () {

  angular
    .module('app')
    .service('CleanseCartService', CleanseCartService);

  function CleanseCartService() {
    this.cleanseOrder = (resData) => {

      console.log(resData);
      let data = resData;
      let cartOrder = [];

      data.books.forEach((elem, index, array) => {
        let bookItem = {}
        let pageCounts = [
          {
            type: 'basic',
            quantity: 0
          },
          {
            type: 'activity',
            quantity: 0
          },
          {
            type: 'portrait',
            quantity: 0
          }
        ];

        elem.pages.forEach((elem, index, array) => {
          if (elem.type === "Basic") pageCounts[0].quantity++;
          else if (elem.type === "Activity") pageCounts[1].quantity++;
          else if (elem.type === "Portrait") pageCounts[2].quantity++;
        })

        bookItem.pageCounts = pageCounts.map((elem, index, array) => {
          if (elem.quantity !== 0) return elem
        });

        bookItem.printBundle = elem.print_qty
        cartOrder.push(bookItem);
      })
      
      return cartOrder;
    }

  };
})();
