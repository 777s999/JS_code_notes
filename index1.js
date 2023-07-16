console.log("hello world");

var myNum=10; //to check what type of value it's holding
console.log(typeof(myNum));
var str='dog';
console.log(typeof(str));
var myBoolean=true;
console.log(typeof(myBoolean));

var arr=[];
console.log(typeof(arr));
var obj={};
console.log(typeof(obj));

var constStr=new String('str2');
console.log('this is my string', constStr);
console.log(typeof(constStr));

var constNum=new Number(10);
console.log("this is my Number", constNum);
console.log(typeof(constNum));

//combining data types in js
var a='a'+10+'b';       // + is used for concatination
console.log(typeof(a)); //concatination of String

var b='a'-10;
console.log(typeof(b)); //returns Nan

//Nan->Not a Number-> is not a data type.it's a value in js whose data type is number.

var c=true-10;
console.log(typeof(c)); //return -9 as js consider true as 1.

var d=false+10;
console.log(typeof(d)); //false if considered as 0 in js

var e='a'+true;
console.log(typeof(e)); //'atrue' a concatination happen

//falsy and thruthy values
//falsy->0,Nan,Undefined,'',Null
var a=10;
if(a){
    console.log('i am inside if');
}
//falsy
var b=undefined;
if(b){
    console.log('executed');
}
else{
    console.log('not executed');
}
 //Ternary operator
var a=0;
a?console.log('10'):console.log('20');        //output will be 20 as it is a false value;

if(a===a){
    a?console.log('10'):console.log('30');
}
else{
    console.log('else');
}

var a=0;
var b='0';
if(parseInt(b)===a){    //a->int ,b->string returns true as parseint converts dATATYPE TO NUMBER based data type
    console.log('executed');
}
 if(b==a){
    console.log('not executed')
}
else if(b==a){
    console.log('may be executed');
}
//creating array and object in js
var arr=[];
var obj={};

var arr=new Array();
var obj=new Object();
// push insert element in index of array starting from 0
//10,20,30
//10,20,40
arr.push(10);
arr.push(20);
arr.push(30);
arr.pop(); //removing something from the very end of the array
arr.push(40);
console.log(arr);

//
var falsy='10';
var truthy=0;

var ans=falsy?(truthy||-10)?10:4:2;
//decode it
//falsy?((truthy||-10)?10:4):2;
console.log(ans);
//
var ans;
var abcd=10;
if(ans && abcd){
    console.log('in if')
}
else if(ans){
    console.log('in else if')// no log as both statement has falsy value
}
// else{
//     console.log('in else')//this will be in log
// }

//
var ans;
var abcd=10;
var arr=[];
 if((ans&& abcd)||arr){ //(false && truth)||truth===> false|| truth
    console.log('in if') //this will be in log
}
 else{
    console.log('in else')
}

//Funtion--> in js fuction can be defined in 6 to 8 ways
//(JS can never exists without functions)
//1==>Basic function || normal function 
function myFunc(){
    console.log('abcd')
    
}
myfunc();    //abcd will be logged not returned

//logged vs returned
function myfunc(){
    console.log('qwer');
    return 10;
}
 var a=myfunc();
console.log(a);

//2==>function expression
var myFuncVariable=function mySomething(){
    console.log('inside function expression')
}
myFuncVariable(); // variable to call the function and this variable storing a function
console.log(myFuncVariable); // it prints a function(function definition) 

//Refferencing a function vs calling a function
//If there is a (parenthesis) it is caling a function and if not it is refferencing a function

//if we don't return anything from a funtion it by default returns a undefined
function myFunct(){
    console.log('my func called')
}
var myFuncStore=myFunct();
console.log(myFuncStore);   //undefined is both the data type and a vaue in js.


//How JS works?
//Execution Context==>
//Functions==>
//Global execution context(GEC)

var a=10;
var b=30;
function myFunc(newa,newb){  //pass by value
    console.log(newa); //stores value of a 
    console.log(newb); //stores value of b
}
myFunct(a,b);
//How mapping done?
function myFunc(b,a){   //a value will pass on b and b value will pass on a
    console.log(b); //print 10
    console.log(a); //print 30
}
myFunc(a,b);
//call stack(Manages all context)
//1.GEC->memory allocation, code execution->temp execution context->memory->code->return statement or code end->destroy->out of the temp stack
//GEC Resume

//Single Thread-->In CPU it will handle one context at a single time.

//break point--> in source the blue line to activate debugger

/* Hoisting--> The phenomenon where we are able to get the value undefined 
for the  variables which are yet to be declared,
 that is basically called hoisting.*/
 
