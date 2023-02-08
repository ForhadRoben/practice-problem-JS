// problem:1 basic mathematical operation using function named mindGame and check validation for positive number
function mindGame(positiveNumber) {
    if (typeof positiveNumber !== 'number' || positiveNumber < 0) {
        return 'please provide a number and number must be positive';
    } else {
        const number = (positiveNumber * 3 + 10) / 2 - 5;
        return number;
    }
}
// console.log(mindGame());

// problem 2:check string type input and it's length using if else condition inside function named evenOdd and also check validation
function evenOdd(stringName) {
    if (typeof stringName !== 'string') {
        return 'provide valid input and Input must be string type !!!';
    }
    else {
        const name = stringName.length;
        if (name % 2 == 1) {
            return 'odd';
        }
        else
            return 'even';
    }
}
// console.log(evenOdd('chatgpt'));

// problem 3:calculate difference between number type input and 7 using if else condition inside function named isLGSeven and also check validation for input
function isLGSeven(num1) {
    if (typeof num1 !== 'number') {
        return 'please provide valid input !!!';
    }
    else {
        const num2 = 7;
        const num = num1 - num2;
        if (num < 7) {
            return num;
        } else {
            const doubleOfNum1 = num1 * 2;
            return doubleOfNum1;
        }
    }
}
// console.log(isLGSeven(19));

// problem 4:finding number of bad data from an array list using function named findingBadData and checking validation for the input, if input is array or not 
function findingBadData(numbers) {
    let result = Array.isArray(numbers);
    if (result) {
        const badData = [];
        for (let index = 0; index < numbers.length; index++) {
            const element = numbers[index];
            if (element < 0) {
                badData.push(element);
            }
        }
        const numberOfBadData = badData.length;
        return numberOfBadData;
    }
    else
        return 'provide valid array type input !!!';
}
const myNumbers = 2;
console.log(findingBadData(myNumbers));

// problem 5: calculate total diamond of three friends using if-else condition inside function named gemsToDiamond and check validation for the input,if input is a positive number or not
function gemsToDiamond(firstFriendGemsQuantity, secondFriendGemsQuantity, thirdFriendGemsQuantity) {
    if ((typeof firstFriendGemsQuantity !== 'number' || firstFriendGemsQuantity < 0) || (typeof secondFriendGemsQuantity !== 'number' || secondFriendGemsQuantity < 0) || (typeof thirdFriendGemsQuantity !== 'number' || thirdFriendGemsQuantity < 0)) {
        return 'Please enter three valid positive number,Gems must be positive number!!!';
    }
    else {
        const firstFriendGemsPower = 21;
        const secondFriendGemsPower = 32;
        const thirdFriendGemsPower = 43;

        const firstFriendDiamondConvert = firstFriendGemsQuantity * firstFriendGemsPower;
        const secondFriendDiamondConvert = secondFriendGemsQuantity * secondFriendGemsPower;
        const thirdFriendDiamondConvert = thirdFriendGemsQuantity * thirdFriendGemsPower;

        let totalDiamond = firstFriendDiamondConvert + secondFriendDiamondConvert + thirdFriendDiamondConvert;
        if (totalDiamond > 1000 * 2) {
            totalDiamond = totalDiamond - 2000;
            return totalDiamond;
        } else {
            return totalDiamond;
        }
    }
}
// const diamond = gemsToDiamond(100, 5, 1)
// console.log(diamond);