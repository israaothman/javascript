// conditions 

// if statment 
 
// logical operators 
//   &&
//   ||
//   ! 


// Compression operator
// < 
// > 
// <= 
// >= 
// ==
// === 
// !=  

let x = 15;
let y = 10; 
let username = "esraa";


if(x>y && username=="esraa"){
    console.log("x is bigger than y ");
}else if(x<y){
    console.log("y is bigger than x ");
}else{
    console.log(" y is equal to x ");  
}



  
// switch statment 
switch(x){
    case 15:
        console.log("x is 15");
        break;
    case 10:
        console.log("x is 10");
        break;
    default:
        console.log("x is :", x);        
}




// Loops 

// 1- for 
// 2- while 
// 3- do while 

for(let i =0 ; i<10 ; i++){
    if(i%2 == 0) continue;
    console.log(i);
}


for(let i = 0 ; i<10 ; i++){
    if(i == 3) break;
    console.log(i);
}


let password = ("enter your password ");

// while(password != "abc"){
//     password = prompt("re-enter the correct password ");
// }


// do{
//     password = prompt("re-enter the correct password ");
     
// }while(password != "abc");


//             0         1       2
let names = ["ahmad", "omar","khaled"];

console.log(names[1]);


names.push("Alaa");
names.pop(); // removed Alaa 

names.shift(); // removed ahmad
names.unshift("ali")




for(let i =0; i< names.length; i++){
    console.log(names[i]);
}


names.forEach(function(val){
    console.log(val);
})

names.forEach((val)=> console.log(val));
















let stdEmailSyntax = "email";


let student = {
    name : "ahmad",
    age : 25,
    grade : 95,
}

student.gender= "male";

student[stdEmailSyntax] = "aaa@gmail.com";
console.log(student);


for(i in student){
    // i = "name"  student[i] =  student.name
    // i = "age"  student[i] =  student.age
    // i = "grade"  student[i] =  student.grade

   console.log(student[i]);
}
