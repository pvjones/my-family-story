const Book = require('../models/book.model.js');
const Page = require('../models/page.model.js');
const Order = require('../models/order.model.js');

module.exports = {
  findOrder: (req, res, next) => {
    Order
      .findById(req.params.id)              //Here we find the order by id (id needs to be passed in as req.params)
      .exec((err, order) => {          //Then we deploy a function that takes in the order we just found (as its second parameter)
        console.log(order);

        const booksArr = order.books;         //Then we create this array to hold on to the ID numbers of the books that are in the books array on order

        Book
          .find({_id: booksArr})            //Then we find each book using its ID number. We saved those ID numbers in booksArr in the previous step.
          .exec((err, books) => {      //Because we have found the books...
            console.log(books);

            order.books = books;            //...we can put them (in their full object form) on the order object from our first find/exec functions.

            Page
              .find({book: booksArr})       //Then, we use the book ID numbers (still stored in booksArr) to find the pages associated with that book ID
              .exec((err, pages) => {  //Then we take those pages...
                console.log(pages);

                for (let i = 0; i < order.books.length; i++) {  //...and we loop through the books that they are associated with.

                  order.books[i].pages = pages.filter(  //And if the book id is equal to the book property on the page object,
                    item => item.book === order.books[i]._id ? true : false      //that page is saved in a new array (created by a filter method)
                  );
                }
                return res.status(200).send(order);  //Then the entire order object is sent back, with an associated book, which has associated pages.
            });
        });
    });
  }
};
