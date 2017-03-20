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
          if (elem.page_type === "Basic") pageCounts[0].quantity++;
          else if (elem.page_type === "Activity") pageCounts[1].quantity++;
          else if (elem.page_type === "Portrait") pageCounts[2].quantity++;
        })

        bookItem.pageCounts = pageCounts.filter((elem, index, array) => {
          return elem.quantity !== 0
        });

        bookItem.printBundle = elem.print_qty;
        bookItem.title = elem.title;
        cartOrder.push(bookItem);
      })

      return cartOrder;
    }

  };
})();
