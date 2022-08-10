/* 
function functionName (parameters){
    function body
    return 
}

var returnedValue = functionName(parameters value)
console.log(returnValue); 
*/


/* 27) Write a function called make_avg() which will take an three integers and
return the average of those values. */
/* 
function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far: ', myAverage);
 */
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(25, 25);
// console.log()
const result2 = add(20, 20);
const finalResult = add(result1, result2);
console.log(finalResult);