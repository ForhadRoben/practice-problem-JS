//Problem:1 radianToDegree conversion using function 

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
console.log(radianToDegree(25));
console.log(radianToDegree(true));
console.log(radianToDegree({ id: 121, class: 11, name: 'Agun' }));


/* function isJavascriptFile(fileName) {
    if (typeof fileName == 'number') {
        return 'enter string'
    }
    let ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    if (ext === 'js') { return true; }
    return false;
}
console.log(isJavascriptFile('112')); */

/* function isJavaScriptFile(fileName) {
    if (typeof fileName == 'number') {
        return 'enter string'
    }
    let file = fileName.endsWith('.js');
    return file;
}

console.log(isJavaScriptFile('image.js.png'));
console.log(isJavaScriptFile('image.js'));
console.log(isJavaScriptFile(12));
 */
/* function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please enter a valid string'
    }
    let file = fileName.endsWith('.js');
    if (file == 1) {
        return true;
    }
    return false;
}

console.log(isJavaScriptFile('app.js'));
console.log(isJavaScriptFile('app.jpg.js.png'));
console.log(isJavaScriptFile({ id: 12 }));
console.log(isJavaScriptFile(true));
console.log(isJavaScriptFile('image.js.sddfhskjf.dfk.js'));
console.log(isJavaScriptFile(12)); */

/* const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false */

