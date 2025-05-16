// let age=15;
// console.log(age)

// let firstName = "Nnadi"
// let secondName = "Sochikaima"
// let age = 19;
// let HaveDriverLicense = false
// var Dreamjob = ""
// var Dreamjob = "software Enginner"

// console.log(typeof firstName);
// console.log(typeof secondName);
// console.log(typeof age);
// console.log(typeof HaveDriverLicense);
// console.log(typeof Dreamjob);

var year="1991"
console.log(typeof year)
var year=1991
console.log(typeof year)


// console.log(A);
// var A=5

// console.log(B);
// let B=5


// let str="hello";
// str[0]="H";
// console.log(str);


// let arr = [1,2,3];
// arr[0]=99;
// console.log(arr);


// let a="hello";
// let b=a;
// b="world";
// console.log(a);
// console.log(b);

// str="hello world"
// console.log(str.toUpperCase())

// let fruits = ["Apple","Banana","Orange"]//assessed lit arr[i]
// console.log(fruits[1]);
// console.log(fruits.length);

// // // for loop
// for (let i=0; i < fruits.length; i++) {
//     console.log(fruits[i].toUpperCase());
// }

// let arr = [ 1,5,7,6,8,9];
// let sum=0;
// for (i=0; i<arr.length; i++) {
//     sum = sum + arr[i];
// } 
// console.log(sum)

// .slice, .split, .replace, .split, .trim, .toUpperCaes, .toLowerCase

// let arr = [ 1,5,7,6,8,9];// find maximum number in an array

//  objects are collections of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects. Objects are used to represent entities with properties and methods, similar to real-world objects
// let user = {
//     //attributes
//     name: "alice",
//     age:25,
//     email:"alice67.com",
//     height:"6'1",
//     // behaviours
//     school: function(){
//         return"i'm a student"
//     }
    
// };
// //can be accessed with d dot method (.)
// console.log(user.name);
// console.log(user.school());

// let book ={
//     ttle: "things happen",
//     author: "peter",
//     yearpublished: 2025,
//     isAvailable: true,
//     borrowBook: function(){
//         isAvailable = false;
//         return isAvailable
//     }
// }
// console.log(book.borrowBook())

// let book ={
//     title: "things happen",
//     author: "peter",
//     yearpublished: 2025,
//     isAvailable: true,
//     borrowBook: function(){
//         this.isAvailable = false;
//         console.log(`${this.title} has been borrowed`);
//     }
// }
// console.log(book.isAvailable)
// book.borrowBook()
// console.log(book.isAvailable)

// let person={
//     name: "Nnadi peter",
//     age: 19,
//     city: "enugu"  ,
//     introduce: function(){
//         return (`Hi, i'm ${person.name}, i'm ${person.age}, and i live in ${person.city}`)
//     }
// }
// console.log(person.introduce())

// // if else
// const scr = 65;
// if(scr>69 && scr<=100){
//     console.log(`result is A`)
// }else if(scr<70 && scr>59){
//     console.log(`result is B`)
// }
// else if(scr<60 && scr>49){
//     console.log(`result is C`)
// }
// else if(scr<50 && scr>39){
//     console.log(`result is E`)
// }
// else(
//     console.log(`YOU FAILED`)
// )

// // tenary operator
// const age = 11;
// let isAdult = age >= 18 ? true: false;
// // isAdult checks is age is >= 18, ? says print true : says else
// console.log(isAdult)

// //switch statement
// let dayoftheweek = "saturday"
// switch(dayoftheweek){
//     case "saturday": //if this shows this happens
//         console.log(`it's the weekend`)
//         break ;// stop the from running futher
//     case "sunday":
//         console,log(`it's the weekend`)
//         break ;
//     default : // if not stated b4 then do this
//     console.log(`it's not the weekend`)
// }


//while loop
// let i=0
// while(20>i){
//     console.log(i % 2 == 0 ? i : "")
//     i++
// }

// //for ..of
// let names=["peter","nnadi","chikaima"]
// for (let name of names){
//     console.log(name.toUpperCase())
// }//used for array

//for..in
// let players={
//     emeka:{
//         goal: 10,
//         assist: 12,
//     },
//     peter:{
//         goal: 23,
//         assist: 18,
//     },
//     adrain:{
//         goal: 8,
//         assist: 2,
//     }
// }
// let sum=0;
// for (player in players){
//     sum=sum + players[player].goal
// }
// console.log(sum)// used in objects

// //function
// function add(x=0,y=0){// to hv x and y decleared
//     return x+y
// }
// console.log(add(2,4))


// arrow function
// let add=(x=0,y=0)=> {return x+y}
// console.log(add(8,16))


/*Object oriented programming
 style of programming that focuses on using object to design and build an application WHILE 
 procedural oriented programming where programs are designed as block of statement to manupulate data 
 OBJECTS represents a real world entity and is the basic building block of OOP
 class blue print of an object, it is the template difinition of an attributes and method of an object*/
