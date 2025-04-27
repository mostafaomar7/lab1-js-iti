function square(num) {
    return num * num;
  }
  
  function divide(a, b) {
    return a/b;
  }

  function subtract(a, b) {
    return a-b;
  }
  
  function add(a, b) {
    return a + b;
  }
  
//   assignment1 soloution
// (a) answer in consumingscript file 
console.log(printvariables(10,20,30)); //(b)
function printvariables(value1 , value2 , value3){
   return [value1 , value2 , value3]
}
console.log(printvariables(10,20,30)); //(c)
console.log(printvariables(3,5)); //(d)

function printvariable(value1 , value2 , value3){
    console.log(arguments);  //(e)
   return [value1 , value2 , value3]
}
console.log(printvariable(10,20,30,40,50,60)); //(e)


// f soloution 

function sum(value1, value2) {
  var localVar = 3; 
   testingVar = 5; 
  return value1 + value2;
}
// console.log("testingVar:", testingVar); error here
// console.log("localVar:", localVar); error here
sum(1, 2);


// g soloution
function subtract(value1, value2) {
    var localVar = 3; 
     testingVar = 5; 
    return value1 - value2;
}
subtract(2,1);
// console.log("localVar:", localVar); error here
console.log("testingVar:", testingVar);

// expression function
var express = function(value1 , value2 , value3){
    return [value1 , value2 ,value3]
}
console.log("expression function:",express(1,2,3));


//assignment 2
function summ(value1 , value2){
    return value1+value2;
}
// if you insert less than 2 inputs
// use default parameter
function summ(value1 =0 , value2 =0){
    return value1+value2;
}
console.log(summ(5));

// if the input is not a Number
function sums(value1 =0 , value2 =0){
    if (isNaN(value1) && isNaN(value2)) {
        return "Error: inputs must be numbers";
      }
      return value1 + value2;
}
console.log(sums(8,7));
