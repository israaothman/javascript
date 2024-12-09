// hoisting
// var x ;
// let y;
// const PI;
// let a;
// const min ;
// const mul;
// const sum;
// let hello 


// js comment ctrl+?
/*
 line 1
 line 2
. . . 
*/




// variables 

var x = 5; // old version we will not use 

let y = 10;
const PI = 3.14;

// PI = 2; //TypeError: Assignment to constant variable.


// global scope 
let a = 2;

{
    // local scope 
  let a = 10; 
console.log("inside the scope",a);

}
console.log("ouside the scope ",a);


// function scope




// Boxes 

// alert("Please login in before continuing")



// let userInput = prompt("please enter your pin"); // string data
// console.log(typeof userInput);


// let answer = confirm("are you sure ?"); // true or false
// console.log(answer);


print();

//Declare the function
function print () {
    console.log("welcome");
}

// call/invoke the function
print();


function max(x,y){
  return Math.max(x,y);
}

console.log(max(10,2));



//console.log(min(10,2)); //Cannot access 'min' before initialization



const min = function(x,y){ // announmus function

    return Math.min(x,y);
}

console.log(min(10,2));



//arrow function
const sum = (a,b) => {
    let result = a+b;
    return result;
}

//console.log(mul(10,2)); //Cannot access 'mul' before initialization


const mul = (a,b) => a*b; 

console.log(sum(10,2));
console.log(mul(10,2));




// hoisting 

// let num1;
// console.log(num1); //undefined
// num1 = 5;
// console.log(num1);
 // console.log(num2); //is not defined

 //let num2 = 5; //Cannot access 'num2' before initialization


//  console.log(hello);
 

// let hello = "hello world";



// datatypes 

let name = "Esraa";
let age = 28;
let female = true;

let userInfo = {
    email : "aa@gmail.com",
    passwors : 123
}
 console.log(userInfo.email);
 
   //      0 1 2 3 4
let arr = [1,2,3,4,5];
console.log(arr[2]);


