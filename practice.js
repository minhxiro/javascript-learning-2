// Practice 1 //
function num1(a, b) {
    const summary = a + b;
    return summary;
}
let finalSummary = num1(3, 2);
console.log(finalSummary);

 finalSummary = num1(-6, -9);
console.log(finalSummary);

 finalSummary = num1(-2, 1);
console.log(finalSummary);
// practice 2 //

function minute(a) {
    const second = a * 60;
    return second;
}

let change = minute(5);
console.log(change);

change = minute(3);
console.log(change);

change = minute(2);
console.log(change);
// practice 3 //

function number(x) {
    const increase = x + 1;
    return increase;
}
let newNumber = number(0);
console.log(newNumber);

newNumber = number(9);
console.log(newNumber);

newNumber = number(-3);
console.log(newNumber);
// practice 3 //
function unit(a, b) {
    const fomula = (a * b) / 2;
    return fomula;
}

let area = unit(3, 2);
console.log(area);

area = unit(7, 4);
console.log(area);

area = unit(10, 10);
console.log(area);
// practice 4- Convert age to day //
function ageYear(x) {
    const process = x * 365;
    return process;
}

let ageDay = ageYear(65);
console.log(ageDay);

ageDay = ageYear(0);
console.log(ageDay);

ageDay = ageYear(20);
console.log(ageDay);
// practice 5- Convert hours into second //
function hour(x) {
    const hourToSecond = x * (60 ** 2);
    return hourToSecond;
}

let second2 = hour(2);
console.log(second2);

second2 = hour(10);
console.log(second2);

second2 = hour(24);
console.log(second2);