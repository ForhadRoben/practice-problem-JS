/* let number = 13
for (let i = 0; i < 10; i++) {
    const result = number * (i + 1);
    console.log(result);

} */
function check(str) {
    if (str == 'file2.js') {
        console.log('true')
        return true;
    }
    else {
        console.log('false');
        return false;
    }
}

check('file1.xml');
check('file2.js');
check('file3.json');
check('file4.html');

function check(str) {
    if (str.match(/(\w*)\.js$/) == null) {
        console.log('false');
        return false;
    }
    else {
        console.log('true');
        return true;
    }
}

check('file1.xml');
check('file2.js');
check('file3.json');
check('file4.html');




funciton isJavascriptFile(fileName){
    var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    if (ext === 'js') { return true; }
    return false;
}

if (isJavascriptFile(aa.getName())) {
    console.log("file is javascript");
}
