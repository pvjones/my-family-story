const config = require('../config.js')
const stripe = require('stripe')(config.STRIPE_KEYS.test_secret_key);

module.exports = {
  postPayment: (req, res, next) => {
    console.log("tester string", req.body);
    //convert amount to pennies
    console.log('start of postPayment in back-end service: ', req.body);
    const chargeAmt = req.body.amount;
    const amountArray = chargeAmt.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
      	break;
      } else {
      	pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
    console.log("Pennies: ");
    console.log(convertedAmt);

    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.payment.token,
    description: 'Test charge from My Family Story'
  }, function(err, charge) {
  		if (err) {
  			console.log(err);
  		}
  		else {
  			console.log('charge: ', charge);
  		}
       res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  }
}