/* 12) প্রতি দি ন ত োমার কাজ কি ?
১) রাত ৮ টা বাজে মডিউল আনলক কর ো
২) ফটাফট ভিডিও দেখে দে খে প্রাকটিস কর ো
৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
৫) ক োন কি ছু বুঝতে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
জয়ে ন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লুপ ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
দে খান ো।

13) আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখান ো।

14) উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়ে তে (decremental হিসেবে )করে দেখাও

15) উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়ে তে (decremental হিসেবে )করে দেখাও 

*/
//practice------12
let regularWork = ['unlock module at 8pm', 'watch and practice module ', 'take notes while watching videos', 'after completing the module ,practice full module by yourself', 'if you do not understand anything', 'go to the support session', 'join the support session', 'help from the moderator', 'help from the facebook group'];
/* for (let i = 1; i <= 10; i++) {
    console.log('\nLoop number: ', i, '\n');
    for (let index = 0; index < regularWork.length; index++) {
        const element = regularWork[index];
        if (element == 'go to the support session') {
            continue;
        }

        console.log(element);

    }

} */

//practice------13
/* let i = 1;
while (i <= 10) {
    console.log('\nLoop number: ', i, '\n');
    let index = 0;
    while (index < regularWork.length) {
        const element = regularWork[index];
        if (element == 'go to the support session') {
            index++;
            continue;
        }

        console.log(element);
        index++;

    }
    i++;

} */

//practice-----14
/* let i = 10;
while (i >= 1) {
    console.log('\nLoop number: ', i, '\n');
    let index = regularWork.length - 1;
    while (index >= 0) {
        const element = regularWork[index];
        if (element == 'go to the support session') {
            index--;
            continue;
        }

        console.log(element);
        index--;

    }
    i--;

}
 */

// practice-----15
for (let i = 10; i >= 1; i--) {
    console.log('\nLoop number: ', i, '\n');
    for (let index = regularWork.length - 1; index >= 0; index--) {
        const element = regularWork[index];
        if (element == 'go to the support session') {
            continue;
        }

        console.log(element);

    }

}

