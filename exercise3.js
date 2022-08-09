/* 16) ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ
কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান
ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে । */

/* // let budget = 85000;
let budget = 15000;
if (budget >= 80000) {
    console.log('I will buy a mac');

}
else if (budget >= 60000 && budget < 80000) {
    console.log('I will buy a gaming laptop');
}
else if (budget >= 40000 && budget < 60000) {
    console.log('I will buy a lenovo yoga');
}
else if (budget >= 20000 && budget < 40000) {
    console.log('I will buy an used laptop');
}
else {
    console.log('mobile diya game khelmu');
} */

/*
17) আসকে আমার মন ভাল ো নে ই এই কথা ৩৯ বার আউটপুট হি সে বে দে খাও। */

/* for (let index = 0; index < 39; index++) {
    console.log('ajk amar mon valo nei', index + 1);

}
 */

// 18) while লুপ কি ভাবে কাজ করে
/* let index = 0;
while (index < 39) {
    console.log('ajk amar mon valo nei', index + 1);
    index++;
} */
/* 19) একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দেখাও
20) একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে
দেখাও
21) একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বিজ োড় সংখ্যা আছে সে গুলাকে দে খাও */

/* for (let index = 58; index <= 98; index++) {
    console.log(index);

} */
/* for (let index = 412; index <= 456; index += 2) {
    console.log(index);

} */
/* for (let index = 581; index <= 623; index += 2) {
    console.log(index);

} */

/* 22) তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা
for লুপ দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।

23) তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা
array বানাও। তারপর একটা while লুপ দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে
আউটপুট হি সে বে দে খাও */
/* let learnTopics = ['html', 'css', 'js', 'tailwind', 'bootstrap', 'array', 'function', 'object']
for (let i = 0; i < learnTopics.length; i++) {
    const element = learnTopics[i];
    console.log(element);

} */
/* let learnTopics = ['html', 'css', 'js', 'tailwind', 'bootstrap', 'array', 'function', 'object'];
let i = 0;
while (i < learnTopics.length) {
    const element = learnTopics[i];
    console.log(element);
    i++;

} */
/* 24) একটা ফর লুপ চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গে লে ব্রে ক করবে । সে ই
জি নি স ক োড করে দে খাও
25) ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে
আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না। */

/* for (let i = 30; i <= 86; i++) {
    if (i == 44) {
        break;
    }
    console.log(i);

} */
/* let booksPrize = [20, 303, 21, 32, 445, 56, 232, 111, 134, 364, 123];
for (let index = 0; index < booksPrize.length; index++) {
    const element = booksPrize[index];
    if (element > 200) {
        continue;
    }
    console.log(element);
} */

