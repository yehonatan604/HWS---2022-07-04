let messages = {

    exercise1: '----Exercise 1----\n\n',
    colllection_Fnum: 'Please Enter First Number',
    colllection_Snum: 'Please Enter Second Number',
    colllection_Fnum: 'Please Enter First Number',
    colllection_Snum: 'Please Enter Second Number',
    colllection_Fnum: 'Please Enter First Number',
    colllection3_Snum: 'Please Enter Second Number',

    exercise2: '\n----Exercise 2----\n\n',
    originalList: 'Orginal List: ',
    newList: 'New List: ',

    exercise3: '\n----Exercise 3----\n\n',
    isNumber: 'Parameters are numbers, so result will be their sum: Test function verifies equality: ',
    isNaN: 'Parameters are strings, so result will be their join: Test function verifies equality: ',
    isArray: 'Parameters are arrays, so result will be the concatenation of the values inside the arrays: Test function verifies similarity: ',
    sumA: 'sum of list A is: ',
    sumB: '\nsum of list B is: ',

    exercise4: '\n----Exercise 4----\n\n',

    exercise5: '\n----Exercise 5----\n\n',

    exercise6: '\n----Exercise 6----\n\n',
}

///////////////////////// Exercise 1: Function Times 3

function ex1(num1, num2) {
    return function (num3, num4) {
        return function (num5, num6) {
            return ((num1 * num3 * num5) + (num2 * num4 * num6));
        }
    }
}

console.log(messages.exercise1 + ex1(1, 2)(1, 1)(2, 3));
console.log(ex1(10, 2)(5, 0)(2, 3));
console.log(ex1(1, 2)(2, 3)(3, 4));
console.log(ex1(1, 2)(0, 3)(3, 0));

///////////////////////// Exercise 2: Fix the Code: Un-Mutating an Array 

let x = [3, 3, 3, 3, 3, 3, 3];

function change(x, times) {
    let changedList = [...x];
    for (let i = 0; i < changedList.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < changedList.length - j) {
                changedList[i]--;
            }
            j++;
        }
    }
    return changedList;
}

console.log(messages.exercise2 + messages.newList + change(x, 2) + "\n\n" + messages.originalList + x);

///////////////////////// Exercise 3: Metaprogramming: Making a Test Case

console.log(messages.exercise3);

function createTest(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return assertSimilar(a, b);
    }
    else if (isNaN(a) && isNaN(b)) {
        return assertEquals(a, b, a + b);
    }
    else {
        return assertEquals(a, b, Number(a) + Number(b));
    }

}
function assertEquals(a, b, result) {
    return a + " + " + b + " = " + result;
}

function assertSimilar(a, b) {
    let sumA = "";
    let sumB = "";

    for (let i = 0; i < a.length; i++) {
        sumA += a[i];
    }

    for (let i = 0; i < b.length; i++) {
        sumB += b[i];
    }

    return a + " + " + b + " = " + (a + " " + b);
}

console.log(createTest(1, 1));
console.log(createTest('a', 'b'));
console.log(createTest(['s', 't', 'r'], ['i', 'n', 'g']));

///////////////////////// Exercise 4: Backspace Attack

console.log(messages.exercise4);

function erase(str) {
    var newWord = [];
    for (var i = 0, j = 0; i < str.length; i++) {
        if (str[i] != '#') {
            newWord[j] = str[i];
            j++;
        }
        else {
            j--;
            newWord[j] = '';
        }
    }
    return newWord.join("");
}

console.log(erase("he##l#hel#llo"));
console.log(erase("major# spar##ks"));
console.log(erase("si###t boy"));

///////////////////////// Exercise 5: Moving Partition

console.log(messages.exercise5);

function movingPartition(arr) {
    let myArr = [];
    for (let i = 1; i < arr.length; i++) {
        myArr.push(arr.slice(0, i));
        myArr.push(arr.slice(i, arr.length));
    }
    return myArr;
}
console.log(...movingPartition([1, 2, 3, 4, 5]));

///////////////////////// Exercise 6: Function Factory

console.log(messages.exercise6);

function makePlus(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const plusFive = makePlus(5)
console.log(plusFive(2));
console.log(plusFive(-8));

const plusTen = makePlus(10)
console.log(plusTen(0));
console.log(plusTen(188));
console.log(plusFive(plusTen(0)));