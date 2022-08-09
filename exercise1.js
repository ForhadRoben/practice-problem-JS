/* 6) You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.

7) You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using
if-else.

8) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else.

9) You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal

10) ক্লাস সে ভে র এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়ে ছ। ত োমার বন্ধু আলি য়া, ডালি য়া,
সালি য়া, মালি য়া, লি লি য়া আর জ্বালাইয়া - তাদে র grade তুমি জান ো না। তবে তাদে র নম্বর
জান ো. আলি য়া 95 পে য়ে ছে , ডালি য়া 66 পে য়ে ছে , সালি য়া 80 পে য়ে ছে , মালি য়া পে য়ে ছে 59,
লি লি য়া পে য়ে ছে 47, জ্বালাইয়া পে য়ে ছে 77। তুমি JS code দি য়ে তাদে র grade বে র করে
দি তে পারবে ?
১) যারা ৫০ এর নি চে পে য়ে ছে , তাদে র grade F.
২) যারা ৫০ বা তার উপরে পে য়ে ছে , অথবা ৬০ এর নি চে পে য়ে ছে , তাদে র grade D.
৩) যারা ৬০ বা তার উপরে পে য়ে ছে , অথবা ৭০ এর নি চে পে য়ে ছে , তাদে র grade C.
৪) যারা ৭০ বা তার উপরে পে য়ে ছে , অথবা ৮০ এর নি চে পে য়ে ছে , তাদে র grade B.
৫) যারা ৮০ বা তার উপরে পে য়ে ছে , অথবা ৯০ এর নি চে পে য়ে ছে , তাদে র grade A.
৬) যারা ৯০ বা তার উপরে পে য়ে ছে , তাদে র grade A+.

11) তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফি ক
সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে
পারে । যদি হলুদ রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন
হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা
signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
সে ই অনুসারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো। */

// practice-6
/* var fruits = ['Apple', 'Banana', 'Orange'];
var indexPosition = fruits.indexOf('Banana');
// console.log(fruits.indexOf('Banana'));
console.log(indexPosition);
// fruits[1] = 'mango';
fruits[indexPosition] = 'mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits); */

// practice-7

/* var marks = 70;

if (marks >= 80) {
    console.log(' forhad have received A grade');
}
else if (marks >= 60 && marks < 80) {
    console.log('you have received B grade');
}
else if (marks >= 50 && marks < 60) {
    console.log('you have received C grade');
}
else if (marks >= 40 && marks < 50) {
    console.log('you have received D grade');
}
else {
    console.log('Invalid marks ');
}
 */

// practice-8
/*
 var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3)
    }
} */

// practice 9

/* 
var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
} */

/* 
// practice 10
var marks = [95, 66, 80, 59, 47, 77];

if (marks[5] >= 90) {
    console.log(' Alia have received A+ grade');
}
else if (marks[3] >= 80 && marks[2] < 90) {
    console.log('you have received A grade');
}
else if (marks[2] >= 70 && marks[3] < 80) {
    console.log('you have received D grade');
}
else if (marks[1] >= 60 && marks[1] < 70) {
    console.log('you have received C grade');
}

else if (marks[3] >= 50 && marks[3] < 60) {
    console.log('you have received D grade');
}

else if (marks < 50) {
    console.log('you have received F grade');
} */

/* 
// practice 11
var signal = ['red', 'green', 'yellow'];
if (signal[2] == 'red') {
    console.log('Danger wait for the green signal');

}
else if (signal[1] == 'yellow') {
    console.log('Stop, wait for the green signal');

}
else {
    console.log('Go and enjoy the time');
} */

