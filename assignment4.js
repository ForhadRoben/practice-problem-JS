
//Problem:1 radianToDegree conversion using function and check error validation

function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Danger! please input a number';


    } else {
        let degree = radian * (180 / Math.PI);
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        return degree;
    }
}

//Problem 2: (isJavaScriptFile) check whether the file is a javaScript file or not and also check the valid input for validation

function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please enter a valid string';
    }
    let file = fileName.endsWith('.js');
    if (file == 1) {
        return true;
    }
    return false;
}

// Problem 3 : (oilPrice) total oilPrice calculate and check validation

function oilPrice(quantityOfDiesel, quantityOfPetrol, quantityOfOctane) {
    if (typeof quantityOfDiesel !== 'number' || typeof quantityOfPetrol !== 'number' || typeof quantityOfOctane !== 'number') {
        return 'Please enter valid number';
    }
    const dieselPricePerLiter = 114;
    const petrolPricePerLiter = 130;
    const octanePricePerLiter = 135;

    const dieselPrice = quantityOfDiesel * dieselPricePerLiter;
    const petrolPrice = quantityOfPetrol * petrolPricePerLiter;
    const octanePrice = quantityOfOctane * octanePricePerLiter;
    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;

}

// Problem 4:(publicBusFare) check local bus fare and error validation

function publicBusFare(passengers) {
    if (typeof passengers !== 'number') {
        return 'Please enter valid number for the passengers';
    }
    else {
        const busCapacity = 50, microBusCapacity = 11, localBusFare = 250;
        const busService = passengers % busCapacity;
        const microBusService = busService % microBusCapacity;
        const localBusService = microBusService * localBusFare;
        return localBusService;
    }
}

// Problem 5 :(isBestFriend) compare two objects using functions and conditionals and also check valid input for the error validation

function isBestFriend(object1, object2) {
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return 'Please enter a valid object';
    } else {
        if (object1.name === object2.friend && object1.friend === object2.name) {
            return true;
        }
        else {
            return false;
        }
    }
}
