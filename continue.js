/* var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);
} */
/* var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = numbers.length - 1; i >= 0; i--) {
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);
} */

/* let incrementNumber = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
let index = 0;
while (index < incrementNumber.length) {
    const element = incrementNumber[index];
    if (element > 100) {
        index++;
        continue;
    }
    console.log(element);
    index++;

} */


let Numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
let index = Numbers.length - 1;
while (index >= 0) {
    const element = Numbers[index];
    if (element > 100) {
        index--;
        continue;
    }

    console.log(element);
    index--;

}

/* let i = 0;
let n = 0;

while (i < 5) {
    i++;

    if (i === 3) {
        continue;
    }

    n += i;
    console.log(n);
}
 */