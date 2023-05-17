
var greaterNuber=function (n1, n2) {    
    var result = n1>n2 ? `${n1} is greater` : `${n2} is ggreater`;
    console.log(result);
}
greaterNuber(10,-10);
greaterNuber(800,899);



var isEvenorOdd=function (num) {
    var result = num%2 == 0 ? true : false;
    //console.log(`${result}`);

}
var result=isEvenorOdd(29);
var res=(result==true) ? `13 is even` : `13 is odd`;
console.log(`${res}`);

var result1=isEvenorOdd(44);
var res1=(result1==true) ? `44 is even` : `44 is odd`;
console.log(`${res1}`);

var result2=isEvenorOdd(0);
var res2=(result2==true) ? `0 is even` : `0 is odd`;
console.log(`${res2}`);

var result3=isEvenorOdd(101);
var res3=(result3==true) ? `101 is even` : `101 is odd`;
console.log(`${res3}`);


var wordlenth=function(word){
    var len=word.length;
    var result = len%2 == 0 ? "EVEN" : "ODD";
    return result;
}
var returnValue=wordlenth("JavaScript");
console.log(`JavaScript has  ${returnValue}`)

var returnValue=wordlenth("developer");
console.log(`developer has  ${returnValue}`)

var returnValue=wordlenth("Google");
console.log(`Google has  ${returnValue}`)


