/* var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
} */
/* var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = numbers.length - 1; i >= 0; i--) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
} */

let incrementNumber = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
let index = 0;
while (index <= incrementNumber.length) {
    const element = incrementNumber[index];
    if (element > 100) {
        break;
    }

    console.log(element);
    index++;

}


/* let incrementNumber = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
let index = incrementNumber.length - 1;
while (index >= 0) {
    const element = incrementNumber[index];
    if (element > 100) {
        break;
    }

    console.log(element);
    index--;

} */
