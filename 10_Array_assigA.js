const arrayFruits=["Banana", "Orange", "Apple", "Mango", "WaterMelon"];
lengthOfarrayFruits=arrayFruits.length;
console.log(`Length of array is : ${lengthOfarrayFruits}`);

console.log(`Log the first and last element on console--->`);
const firstIndexValue = arrayFruits[0];
console.log(`first element is: ${firstIndexValue}`);

const lastIndexValue = arrayFruits[lengthOfarrayFruits-1];
console.log(`Last element is: ${lastIndexValue}`);

console.log(`Add element Papaya before Banana--->`);
arrayFruits.push("Papaya");
console.log(`Updated Array is : ${arrayFruits}`);

console.log(`Remove Mango from the array--->`);
const arraySpliced = arrayFruits.splice(3,1);
//console.log(arrayFruits);
//console.log(arraySpliced);
console.log(`Updated array after removing Mango is: ${arrayFruits}`);

console.log(`Add element PineApple at last--->`);
arrayFruits.push("Pineapple")
console.log(`Updated array after adding Pineapple is: ${arrayFruits}`);

console.log(`Insert element before Watermelon--->`);
arrayFruits.splice(3,0,"Dragon Fruit")
console.log(`Updated array after adding Pineapple is: ${arrayFruits}`);


console.log(`Replace element Orange with Kiwi--->`);
arrayFruits[1]="Kiwi";
console.log(`Updated Array is : ${arrayFruits}`);

console.log(`Log the element from index 1 to 4 --------->`);
console.log(`${arrayFruits[1]}, ${arrayFruits[2]}, ${arrayFruits[3]}, ${arrayFruits[4]}`);

console.log(`Only select last 3 element--------->`);
//start index , end index
const LastThreeElement =arrayFruits.slice(4,arrayFruits.length);
console.log(LastThreeElement);




