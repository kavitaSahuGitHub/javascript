var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const arrayLength=arrayNumbers.length;
console.log(`Length of array is : ${arrayLength}`);
console.log(`First element is : ${arrayNumbers[0]}`);
const lastElement=arrayNumbers[arrayNumbers.length-1];
console.log(`Last element is : ${lastElement}`);
const thirdLastElement=arrayNumbers[arrayLength-3];
console.log(`3rd last element is : ${thirdLastElement}`)
console.log(`Even numbers in array`);
for (const index in arrayNumbers) {
    if((arrayNumbers[index])%2==0){
        console.log(arrayNumbers[index]);
    }
    
}
console.log(`Odd numbers in array:`);
for (const index in arrayNumbers) {
    if((arrayNumbers[index])%2!==0){
        console.log(arrayNumbers[index]);
    }
    
}
console.log(`Even positioned numbers in array`);
var count=0
for (const index in arrayNumbers) {
    if(index%2==0){
        count=count+arrayNumbers[index]
       //console.log(arrayNumbers[index+1]);
    }
    
}
console.log(count);

console.log(`Odd positioned numbers in array`);
var countOdd=0
for (const index in arrayNumbers) {
    if(index%2!==0){
        countOdd=countOdd+arrayNumbers[index]
       //console.log(arrayNumbers[index+1]);
    }
    
}
console.log(countOdd);
console.log(`Sum of all elements in array`);
var total=0
for (const index in arrayNumbers) {    
        total=total+arrayNumbers[index]
       //console.log(arrayNumbers[index+1]);
}
console.log(total);

console.log(`Multple of 5 elements in array`);


for (const index in arrayNumbers) {   
    if((arrayNumbers[index])%5==0){ 
        //total=total+arrayNumbers[index]
       console.log(arrayNumbers[index]);
}
}

console.log("is 115 available?")
//const isAvailable = arrayNumbers.any(115);
//console.log(isAvailable);
var is115available=false;
for (const index in arrayNumbers) 
{   
    if((arrayNumbers[index])==115)
    { 
       var num= arrayNumbers[index];      
       //console.log(`${num} is`);
       console.log(`yes ${num} is available`);
       is115available=true;
       break;
    }
}
if(is115available==false)
{
    console.log(`No 115 is not available`);
}
console.log("is 23 available?")
var is23available=false;
for (const index in arrayNumbers) 
{  
if((arrayNumbers[index])==23)
{ 
   var num1= arrayNumbers[index];      
   //console.log(`${num} is`);
   console.log(`yes ${num1} is available`);
   is23available=true;
   break;
}
}
if(is23available==false)
{
    console.log(`No 23 is not available`);
}

console.log(`insert 55, 66`);
console.log(arrayNumbers);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`Delete 3numbers stat from index 4`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);