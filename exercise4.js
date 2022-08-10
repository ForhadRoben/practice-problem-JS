// 27) Write a function called make_avg() which will take an three integers and
// return the average of those values.

/* function make_avg(num1, num2, num3) {
    let total = num1 + num2 + num3;
    const average = total / 3;
    return average;

}
let number1 = 25, number2 = 45, number3 = 25;
const getAverage = make_avg(number1, number2, number3);
console.log('Total value', getAverage);
// console.log('Total value', Math.floor(getAverage));
// console.log('Total value', Math.ceil(getAverage)); */


/* 31) একটা ফাংশন লি খবা যে টা ১৩ এর নামতা (multiplication table) আউটপুট হি সে বে
দে খাবে । */
function multiplication(number) {
    for (let i = 0; i < 10; i++) {
        const element = number * (i + 1);
        // console.log(element);

    }
    return element;

}
const num1 = 13;
const result = multiplication(num1);
console.log(result);

