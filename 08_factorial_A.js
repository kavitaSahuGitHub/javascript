
function factorialOfNumber(num) {
    if (num != null && num != undefined && num > 0) {
        // console.log(typeof(num));
        var fact = 1;
        // console.log(typeof(num));
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        //console.log(fact);
        console.log(`Factorial of ${num} is :${fact}`);
    }
}
console.log('1.Assignment 23/5/2023---------->')
console.log('Find a factorial Assignment---------->')
factorialOfNumber(5);
factorialOfNumber(3);
factorialOfNumber(null);
factorialOfNumber(8);
factorialOfNumber(undefined);
factorialOfNumber(9);
factorialOfNumber(0);
factorialOfNumber(-10);
factorialOfNumber("invalid");

function CountCharAora(word) {
    let wordLength = word.length;
    var countOfa = 0;
    for (let index = 0; index <= word.length; index++) {
        var char = word.charAt(index);
        if (char =='a' || char =='A' ) {
             countOfa++
        }
    }
    console.log(`String is : ${word}`);
    console.log(`The count of character a or A is : ${countOfa} `);
}
console.log('2. Assignment 23/5/2023---------->')
console.log('To count character a or A Assignment---------->')
CountCharAora("I AM Learning Javascript, The Language of internet");
CountCharAora("My favorite movie is LAggAn");