

//wap to get table of 5

for (let index = 5; index <= 50; index = index + 5) { // index = 11
    // console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");
//wap to get 100 to 80 in reverse order
//100 99 98 97-------80

for (let index = 100; index >= 80; index--) { // index = 11
    // console.log(index); // 0 1  2 ... 10 
}

//wap to get the table of 19 in reverse order
//190 171 
for (let index = 190; index >= 19; index = index - 19) { // index = 11
    // console.log(index); // 0 1  2 ... 10 
}

//wap to get the table of 8
//8 16 24 32 --------80
for (let index = 8; index <= 80; index = index + 8) { // index = 11
    // console.log(index); // 0 1  2 ... 10 
}

//reverse the string - javascript
var str = "Javascript";
var reverstring = "";
for (let index = 9; index >= 0; index--) { // 
    var char = str.charAt(index);
    reverstring = reverstring.concat(char);
}
//console.log(reverstring); // 0 1  2 ... 10 

function reverseWord(word) {
    var reverstring = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // 
        var char = word.charAt(index);
        reverstring = reverstring.concat(char);
    }
    console.log(reverstring);
}

reverseWord("javascript");
reverseWord("Google chrome");
reverseWord("Developer");