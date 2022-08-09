/* var price1 = 35, price2 = 25, price3 = "45";
var result1 = parseInt(price3);
var result = (price1 + price2 + result1);

console.log(result); */

var price1 = 35, price2 = 25, price3 = "45.23";
var result1 = (parseFloat(price3));
var result = (price1 + price2 + result1);
result = result.toFixed(2);
result = parseFloat(result);
console.log(typeof result);



