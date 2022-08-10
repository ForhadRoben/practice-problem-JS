var mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP'
}


var myComputer = {
    brand: 'lenovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}
// console.log(myComputer);
// myComputer.color = 'black';//set value
// console.log(myComputer.color);

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// console.log(penCount);
// alternative System
// When you know the specific property name, use third bracket to get the property value
var penCount2 = shoppingCart['keyboard'];
// console.log(penCount2);

// var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log( propertyNAme,propertyValue);//get value


var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
var propertyEntity = Object.entries(shoppingCart);//object to array
// console.log(properties);
// console.log(propertyValues);
// console.log(propertyEntity);

console.log(shoppingCart);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
var propertyName = 'mouse';
shoppingCart[propertyName] = 89;
console.log(shoppingCart)
