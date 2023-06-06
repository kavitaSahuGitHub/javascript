const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
const arrayNew=[];
console.log(`Original Array=>${arrayNumbers}`)
console.log(`-----------------Add 10 into each element----------------------------`)
arrayNumbers.forEach(element => {
    //console.log(element);
    arrayNew.push(element+10);
});
console.log(`New Array after adding 10 on each element=>${arrayNew}`)
console.log(`-----------------Square the each array element------------------------`);
arraySquare=[];
arrayNumbers.forEach(element => {
    arraySquare.push(element*element);
});
console.log(`New Array after square of each element=>${arraySquare}`)
console.log(`-----------------Add the index value into its corresponding each array element------------------------`);

array3=[];
arrayNumbers.forEach((currentValue, index, array) => {
    array3.push(currentValue+index);   
});
console.log(`New Array after adding index value=>${array3}`)
