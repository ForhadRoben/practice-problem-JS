/* // oilPrice

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
const totalPrice = oilPrice(0, -2, 3);
// const totalPrice = oilPrice(1, 'q', 'sa');
console.log(totalPrice); */

/*
// publicBusFare

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
console.log(publicBusFare(112));
console.log(publicBusFare(true));
// console.log(publicBusFare(55));
// console.log(publicBusFare(235));
// console.log(publicBusFare(365));
// console.log(publicBusFare(-2)); */




// isBestFriend

// const object1 = { name: "abul", friend: "babul" }
// const object2 = { name: "babul", friend: "abusl" }
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
// console.log(isBestFriend(object1, object2));
console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abusl" }));
console.log(isBestFriend(true, false));
console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" }));
console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "Abul" }));
console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "Babul", friend: "abul" }));

