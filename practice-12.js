let regularWork = ['unlock module at 8pm', 'watch and practice module ', 'take notes while watching videos', 'after completing the module ,practice full module by yourself', 'if you do not understand anything'];

/* for (let i = 1; i <= 10; i++) {
    console.log('\nloop number:', i, '\n');
    for (let j = 0; j < regularWork.length; j++) {

        if (regularWork[j] == 'if you do not understand anything') {
            console.log(j + 1, 'if you do not understand anything then go to the support session , join the support session ,help from the moderator ,help from the facebook group');
        }
        else
            console.log(j + 1, regularWork[j]);
    }

} */

// practice 13
/* var i = 1;
while (i <= 10) {
    console.log('\nLoop number:', i, '\n');
    let j = 0;
    while (j < regularWork.length) {
        if (regularWork[j] === 'if you do not understand anything') {
            console.log(j + 1, 'if you do not understand anything then go to the support session , join the support session ,help from the moderator ,help from the facebook group');
        }
        else
            console.log(j + 1, regularWork[j]);

        j++;
    }
    i++;
} */
// practice 14
/* let i = 10;
while (i >= 1) {
    console.log('\nLoop number:', i, '\n');
    let j = regularWork.length - 1;
    while (j >= 0) {
        if (regularWork[j] === 'if you do not understand anything') {
            console.log(j + 1, 'if you do not understand anything then go to the support session , join the support session ,help from the moderator ,help from the facebook group');
        }
        else
            console.log(j + 1, regularWork[j]);
        j--;
    }
    i--;
} */

// practice-15


for (let i = 10; i >= 1; i--) {
    console.log('\nloop number:', i, '\n');
    for (let j = regularWork.length - 1; j >= 0; j--) {

        if (regularWork[j] == 'if you do not understand anything') {
            console.log(j + 1, 'if you do not understand anything then go to the support session , join the support session ,help from the moderator ,help from the facebook group');
        }
        else
            console.log(j + 1, regularWork[j]);
    }

}