var num = 33721;
var numToString = String(num);
console.log(numToString);
var numArr = numToString.split('');
console.log(numArr);
for(var i=0; i<numArr.length; i++) { numArr[i] = +numArr[i]; } 
console.log(numArr);
var numArrProd = numArr.reduce((a, b) => a * b, 1);
console.log(numArrProd);
var numArrPow = numArrProd**3;

console.log(numArrPow);
var taskResult = String(numArrPow)
alert(taskResult[0] + taskResult[1]);
