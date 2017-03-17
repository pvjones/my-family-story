  <tr>
    <td>{{orderDetails.books[0].title}}</td>
  </tr>
  <tr>
    <td>Basic Page</td>
    <td>{{orderDetails.books[0].pageCount.basic}}</td>
    <td>{{pageCounts[0].basic * 10 | currency}}</td>
  </tr>
  <tr>
    <td>Activity Page</td>
    <td>{{orderDetails.books[0].pageCount.activity}}</td>
    <td>{{pageCounts[0].activity * 15 | currency}}</td>
  </tr>
  <tr>
    <td>Portrait Page</td>
    <td>{{orderDetails.books[0].pageCount.portrait}}</td>
    <td>{{pageCounts[0].portrait * 20 | currency}}</td>
  </tr>
  <tr>
    <td>Printed copies</td>
    <td>{{orderDetails.books[0].print_qty}}</td>
    <td>{{orderDetails.books[0].print_qty * 2.5 | currency}}</td>
  </tr>
  <tr>
    <td>Subtotal</td>
    <td>Price</td>
  </tr>
