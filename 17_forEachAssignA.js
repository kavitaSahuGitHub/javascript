const arrayNumbers=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Original Array=>${arrayNumbers}`);
arrayNumbers.forEach((currentValue, index, array) => {
    console.log(`${currentValue}, ${index}`);
});

console.log(`-----------------Find the positive numbers and log on console-------------------`);
arrayNumbers.forEach((currentValue, index, array) => {
   // console.log(`${currentValue}, ${index}`);
   if(currentValue>0){
    console.log(currentValue);
   }
});

console.log(`-----------------Find the negative numbers and add into new array-------------------`);
arrayNegativenumbers=[];
arrayNumbers.forEach((currentValue, index, array) => {
    // console.log(`${currentValue}, ${index}`);
    if(currentValue<0){
        arrayNegativenumbers.push(currentValue)
    }
 });
 console.log(`New Array for negative numbers=>${arrayNegativenumbers}`)
 
console.log(`-----------------Find the even numbers and add log on console-------------------`);
arrayNumbers.forEach((currentValue, index, array) => {
    // console.log(`${currentValue}, ${index}`);
    if(currentValue%2==0){
     console.log(currentValue);
    }
 });

console.log(`-----------------Find the sum of all numbers and add log on console-------------------`);
var total=0
arrayNumbers.forEach((currentValue, index, array) => {
    // console.log(`${currentValue}, ${index}`);
    total=total+currentValue;
 });
 console.log(`Total of all numbers=>${total}`)
 console.log(`-----------------Log even indexed array value and add log on console-------------------`);
 arrayNumbers.forEach((currentValue, index, array) => {
    // console.log(`${currentValue}, ${index}`);
    if(index%2==0){
     console.log(currentValue);
    }
 });