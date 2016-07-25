var faker = require("faker");

var products = []
//fill array <products> with 10 products
var i = 0
while (i < 10){
    products.push(faker.commerce.productName() + " - $" + faker.finance.amount());
    i ++;
}

console.log(
    "=================== \nWELCOME TO MY SHOP! \n==================="
    );

products.forEach(print)

function print(i){
    console.log(i);
}