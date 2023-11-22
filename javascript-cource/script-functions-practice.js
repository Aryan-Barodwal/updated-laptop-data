// function comparingvalues(value1, value2) {

//     if (value1 > value2) {
//         console.log("value1" + " is greater than" + " value2");
//     }
//     else {
//         console.log("invalid values")
//     }

// }
// comparingvalues(4, 3);
// comparingvalues(1, 3);
// comparingvalues(3, 3);
// let whichOne = comparingvalues(4,3);
// console.log(whichOne);

// Another one, in this we are calling function and return function....
// Another method using return funtion ....

// function comparingvalues(value1, value2) {
//     if (value1 > value2) {
//         return "  Value1 is greater than value2";
//     } else {
//         return "  Value2 is greater than value1";
//     }
// }

// //caling function.........

// let whichOne = comparingvalues(5, 3);
// console.log(whichOne);

// let maxvalue = comparingvalues(1,2);
// console.log(maxvalue);


// o/p using 'console.log'.......
// function whichiISgreaterorwhichislower(num1, num2) {
//     if (num1 > num2) {
//         console.log("number1" + " is greater than " + "number2");
//     }
//     else if (num1 == num2) {
//         console.log("number1" + " is equal to " + "number2");
//     }
//     else {
//         console.log("number1" + " is less than " + "number2");
//     }
// }

// let whichisgreaterorlessorequal = whichiISgreaterorwhichislower(2, 3);
// there is an error occur in console window , the o/p is succefully printed but after that 'undefined' is occured..
// which means it(function) is not returning values...
// console.log(whichisgreaterorlessorequal);
// whichiISgreaterorwhichislower(2, 3);
// whichiISgreaterorwhichislower(6, 3);
// whichiISgreaterorwhichislower(3, 3);

// o/p using 'return'.......

// function whichiISgreaterorwhichislower(num1, num2) {
//     console.log("Output:-");
//     if (num1 > num2) {
//         return "number1" + " is greater than " + "number2";
//     }
//     else if (num1 == num2) {
//         return "number1" + " is equal to " + "number2";
//     }
//     else {
//         return "number1" + " is less than " + "number2";
//     }

//     // whichiISgreaterorwhichislower(num1 , num2);
// }

// whichiISgreaterorwhichislower(1, 3);  // reduce code
// let less = whichiISgreaterorwhichislower(1, 3);
// console.log(less);


// let equal = whichiISgreaterorwhichislower(3, 3);
// console.log(equal);
// let greater = whichiISgreaterorwhichislower(5, 3);
// console.log(greater);

function whichisMR(num1,num2){
    console.log("OUTPUT:-")

    if (num1>num2){
        return "num1 is greater than num2";
    }
    else{
        return "none of these are greater";
    }
}


whichisMR(40,32);

//difference b/w return and console.log statement........
let greater = whichisMR(40,32);
console.log(greater);




// function whichIsGreaterOrWhichIsLower(num1, num2) {
//     console.log("Output:-");
//     if (num1 > num2) {
//         return "number1 is greater than number2";
//     } else if (num1 == num2) {
//         return "number1 is equal to number2";
//     } else {
//         return "number1 is less than number2";
//     }
// }

// let less = whichIsGreaterOrWhichIsLower(1, 3);
// console.log(less);

// let equal = whichIsGreaterOrWhichIsLower(3, 3);
// console.log(equal);

// let greater = whichIsGreaterOrWhichIsLower(5, 3);
// console.log(greater);


// another method using cup case statement funtion ...

// const cups = (20, 30);
//     switch (cups) {

//         case (20>30):
//                 console.log("This value of cups, 4");

//                 break;
//             case 41:
//                 console.log("This value of cups, 41");

//                 break;
//             case 43:
//                 console.log("This value of cups, 43");

//                 break;
//             case 45:
//                 console.log("This value of cups, 45");

//                 break;

//             default:
//                 console.log("The value of Cups, none of 4 ,41, 43 ,45")
//                 break;
//         }


 






