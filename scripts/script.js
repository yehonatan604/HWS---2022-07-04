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
    aValue: 'Please Enter "A" Value',
    bValue: 'Please Enter "B" value',
    isNumber: 'Parameters are numbers, so result will be their sum: Test function verifies equality: ',
    isNaN: 'Parameters are strings, so result will be their join: Test function verifies equality: ',
    isArray: 'Parameters are arrays, so result will be the concatenation of the values inside the arrays: Test function verifies similarity: ',
    sumA: 'sum of list A is: ',
    sumB: '\nsum of list B is: ',

    exercise4: '\n----Exercise 4----\n\n',

    exercise5: '\n----Exercise 5----\n\n',
}

///////////////////////// Exercise 1: Function Times 3

var collection1 = [10, 2];
var collection2 = [5, 0];
var collection3 = [2, 3];

function ex1(collection1, collection2, collection3) {
    return (collection1[0] * collection2[0] * collection3[0]) + (collection1[1] * collection2[1] * collection3[1])
}

console.log(messages.exercise1 + ex1(collection1, collection2, collection3));

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
        console.log(messages.isArray + assertSimilar(a, b));
    }
    else if (!isNaN(a) && !isNaN(b)) {
        console.log(messages.isNumber + assertEquals(a, b, Number(a) + Number(b)));
    }
    else if (isNaN(a) && isNaN(b)) {
        console.log(messages.isNaN + assertEquals(a, b, a + b));
    }

}

function assertEquals(a, b, result) {
    return a + " + " + b + " = " + result;
}

function assertSimilar(a, b) {
    let sumA = 0; 
    let sumB = 0;

    for (let i = 0; i < a.length; i++) {
        sumA += a[i];
    }

    for (let i = 0; i < b.length; i++) {
        sumB += b[i];
    }

    return messages.sumA + sumA + messages.sumB + sumB;
}

createTest(1, 1);
createTest('a', 'b');
createTest([1, 2, 3], [4, 5, 6]);

///////////////////////// Exercise 4: Backspace Attack

console.log(messages.exercise4);

function erase(str){
    for (let i = 0; i < str.length; i++)
    {

        if (str[i] == "#")
        {
            str = str.substring(0, i) + str.substring(i+1);
            i--;
        }
    }
    return str;
}

console.log(erase("he##l#hel#llo"));
console.log(erase("ab#cdef#g"));
console.log(erase("major# spar##ks"));
console.log(erase("si###t boy"));
console.log(erase("####"));

///////////////////////// Exercise 5: Moving Partition

function movingPartition(arr){
    let myArr = [];
    for (let i = 0; i < arr.length; i++)
    {
        myArr.push(arr.slice(0,i));
    }
    return myArr;
}

movingPartition([1,2,3,4,5]).forEach( value => console.log(value));

