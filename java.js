// let age=15;
// console.log(age)

// let firstName = "Nnadi"
// let secondName = "Sochikaima"
// let age = 19;
// let HaveDriverLicense = false
// var Dreamjob = ""
// var Dreamjob = "software Enginner"
// var name=null

//== values in the varaible has to be the same
//=== values and the data type has to be the same

// console.log(typeof firstName);
// console.log(typeof secondName);
// console.log(typeof age);
// console.log(typeof HaveDriverLicense);
// console.log(typeof Dreamjob);
// console.log(typeof name); it prints object cause everything is an object no matter the type and amount

// var year="1991"
// console.log(typeof year)
// var year=1991
// console.log(typeof year)


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

//  //arethmetic operators
//  let john = 18
//  let mark = 19
//  let peter= 22
//  let paul = 14
//  let josh = 21
//  let avg = (john + mark + peter + paul + josh)/5
//  console.log(`they're average is ${avg}`)

//  //comparison operators
//  console.log(john>mark)
//  console.log(peter>mark)
//  console.log(paul==peter)
//  console.log(josh>=paul)

// var broke=true
// var stupid=false
// console.log(broke&&stupid)//&&-and !!-OR !-not

// let mark={
//     w: 78,
//     h: 1.6,
//     caculate :function BMI(w,h){
//         return this.w/(this.h**2)
// }
// }
// let john={
//     w:92,
//     h:1.95 ,
//     caculate :function BMI(w,h){
//        return this.w/(this.h**2)
// }
// }
// if(mark.caculate()>john.caculate()){
//     markhigher= true
//     console.log(markhigher) 
// }
// else{
//     markhigher= false
//     console.log(markhigher) 
// }

// console.log(mark.caculate())
// console.log(john.caculate())
// let markhigherBMI= mark.caculate()>john.caculate() 
// console.log(markhigherBMI)
// var bmi = function(width, height) {
//     return this.wid
// }

// function bmi (width, height) {
//     console.log(width / (height**2))
// }

// john = bmi(23, 15) 
  

// let mark={
//     fullName:'Igris Mark',
//     w: 78,
//     h: 1.6,
//     caculate :function BMI(w,h){
//         this.BMI= this.w/(this.h**2)
//         return this.BMI
// }
// }
// let john={
//     fullName:'john wick',
//     w:92,
//     h:1.95 ,
//     caculate :function BMI(w,h){
//          this.BMI= this.w/(this.h**2)
//         return this.BMI
// }
// }
// mark.caculate()
// john.caculate()

// if(mark.BMI>john.BMI){
//     console.log(`${mark.fullName} with is BMI of ${mark.BMI} has the higher BMI`) 
// }
// else if(mark.BMI<john.BMI){
//     console.log(`${john.fullName} with is BMI of ${john.BMI } has the higher BMI`) 
// }else{
//     console.log(`they have the same BMI`)
// }

// age = 18
// switch(true){
//     case age<13:
//      console.log(`john is a boy`)
//      break
//     case age>12 && age<18:
//         console.log(`john is a teenager`)
//         break
//     case age>17 && age <30:
//         console.log(`john is a young man`)
//         break
//     default:
//         console.log(`john is a man`)
// }

// let john={
//     a:100,
//     b:120,
//     c:119,
//     average:function avg(a,b,c){
//       return  (this.a + this.b + this.c)/3
//     }
// }

// let mark={
//     a:116,
//     b:100,
//     c:123,
//     average:function avg(a,b,c){
//        return (this.a + this.b + this.c)/3
//     }
// }

// let mary={
//     a:100,
//     b:134,
//     c:105,
//     average: function avg(a,b,c){
//        return (this.a + this.b + this.c)/3
//     }
// }
// console.log("john's average is "+john.average())
// console.log(`mark's average is ${mark.average()}`)
// console.log(`mary's average is ${mary.average()}`)
// if(john.average()>mark.average() && john.average()>mary.average() ){
//     console.log(`john is the winner`)
// }else if(john.average()>mark.average() && mark.average()==mary.average() ){
//     console.log(`john is the winner`)
// }else if(mark.average()>john.average() && mark.average()>mary.average()){
//     console.log(`mark is the winner`)
// }else if(mark.average()>john.average() && john.average()==mary.average()){
//     console.log(`mark is the winner`)
// }else if(mary.average()>john.average() && mary.average()>mark.average()){
//     console.log(`mary is is the winner`) 
// }else if(mary.average()>john.average() && john.average()==mark.average()){
//     console.log(`mary is is the winner`) 
// }else if(mary.average()==john.average() && mary.average()>mark.average()){
//     console.log(`it's a tie between mary and john`) 
// }else if(mary.average()>john.average() && mary.average()==mark.average()){
//     console.log(`its a tie between mary and mark`) 
// }else if(mark.average()==john.average() && mark.average()>mary.average()){
//     console.log(`its a tie between mark and john`)
// }else {
//     console.log(`its a tie between all of them`)
// }

// function declaration
// function whatDoYouDo(job,name){}

// //function expression
// var whatDoYouDo =function(job,name){
//     switch (job) {
//         case 'teacher':
//             return name + ' teaches children'
//          case 'driver':
//             return name + ' drives a bus'
//          case 'designer':
//             return name + ' designs clothes'
//         default:
//             return name + ' does something else';   
//     }
// }
// console.log(whatDoYouDo('cop','peter'))

// initailize an array
// var years=new Array(2000,2001,2004);
// console.log(years[0],years[1],years[2])
// //mutate an array
// years[0]=2006
// years[years.length]=2008
// years[5]=2000
// console.log(years)
// //different data types in an array
// var john=['john','smith',2000,'teacher',false];
// console.log(john.push('blue'))
// console.log(john.unshift('mr'))
// console.log(john.pop())
// console.log(john.pop())
// console.log(john.shift())
// console.log(john)
// console.log(john.indexOf(2000))

// var isJohnDesigner = john.indexOf('teacher') == -1? 'John is not a desinger':'john is a designer';
// console.log(isJohnDesigner)



// function tip(cost){
//     if (cost<50){
//         return cost*0.2
//     }else if(cost<200 && cost>49){
//         return cost*0.15
//     }else{
//         return cost*0.1
//     }
// }
// function fcost(ncost){
//      if (ncost<50){
//         return ncost*0.2+ncost
//     }else if(ncost<200 && ncost>49){
//         return ncost*0.15+ncost
//     }else{
//         return ncost*0.1+ncost
//     }
// }
// let originalCost=[124,48,268]
// let tipArray=[tip(originalCost[0]),tip(originalCost[1]),tip(originalCost[2])]
// let finalcost=[fcost(originalCost[0]),fcost(originalCost[1]),fcost(originalCost[2]) ]

// console.log(originalCost)
// console.log(finalcost)
// console.log(tipArray) 


// //objects literal
// var me={
//     firstName:'Sochikaima',
//     lastName:'Nnadi',
//     birthYear:2006,
//     family:['jude','chigo','blessing','kamsi'],
//     job:'student',
//     isMarried:false
// }
// //oblect syntax
// console.log(me)
// var brother=new Object();
// brother.firstName='kamsiyochukwu'
// brother.lastName='Nnadi'
// brother['birthYear']=2004
// console.log(brother)

// //objects and method
// var me={
//     firstName:'Sochikaima',
//     lastName:'Nnadi',
//     birthYear:2006,
//     family:['jude','chigo','blessing','kamsi'],
//     job:'student',
//     isMarried:false,
//     calcAge: function(){
//        this.age= 2025 - this.birthYear
//     }
// };
// me.calcAge()
// console.log(me)


// //loops p2
// //for loop
// for (let i=0; i<=20; i+=2){
//       console.log(i);
// }
// var john=['john','smith',2000,'teacher',false];
// for(i=john.length-1; i>=0; i--){
//     console.log(john[i])
// }
// // while loop
// var i=0;
// while(i<john.length){
//     console.log(john[i]);
//     i++
// }
//continue and break staement
// var john=['john','smith',2000,'teacher',false,''];
// for(i=0; i<john.length; i++){
//     if (typeof john[i]!=='string') continue;
//     console.log(john[i])
// } 
// var john=['john','smith',2000,'teacher',false];
// for(i=0; i<john.length; i++){
//     if(typeof john[i] !== 'string') break;
//     console.log(john[i])
// }


let john={
         fullName:'John Smith',
         bills:[124,48,268,180,42],
         tip:function (){
            this.tips=[]
            this.finalValues=[]
            for(i=0; i<this.bills.length; i++)
                {
                 
                   if (this.bills[i]<50){
                     bill= this.bills[i]*0.2
                   }else if(this.bills[i]<200 && this.bills[i]>49){
                     bill= this.bills[i]*0.15
                   }else{
                     bill= this.bills[i]*0.1
                   }
                    this.tips[i]=bill;
                    this.finalValues[i]=this.bills[i]+this.tips[i]
                }
            }
        }

        john.tip()
        console.log(john)

let mark={
         fullName:'mark miller',
         bills:[77,375,110,45],
         tip:function (){
            this.tips=[]
            this.finalValues=[]
            for(i=0; i<this.bills.length; i++)
                {
                 
                   if (this.bills[i]<100){
                     bill= this.bills[i]*0.2
                   }else if(this.bills[i]<300 && this.bills[i]>99){
                     bill= this.bills[i]*0.1
                   }else{
                     bill= this.bills[i]*0.25
                   }
                    this.tips[i]=bill;
                    this.finalValues[i]=this.bills[i]+this.tips[i]
                }
            }
        }

        mark.tip()
        console.log(mark)
 
 