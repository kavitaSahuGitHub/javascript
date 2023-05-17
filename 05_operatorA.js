function SquareOfWordLength(str)
{
    //var strvar=str;
    console.log("1st string :",str)
var len=str.length
console.log("Total number of character in given string is: ", len);
var square= len*len
console.log("Square of the length is: ",square)
}
var myStr1="JavaScript";
SquareOfWordLength(myStr1)

var myStr2="Google Chrome";
SquareOfWordLength(myStr2)

var myStr3="Developer Smart";
SquareOfWordLength(myStr3)


function NewFun(){
    var newStr="I am Angular Developer"
    console.log("2nd string is:",newStr)
    var len=newStr.length
    console.log(len)
    var wordSplit=newStr.split(" ")
    var splitlen=wordSplit.length
    console.log("Total number of word is: ",splitlen)
    var divideResult=len/splitlen;
    console.log("Divide result is : ",divideResult)
    var multiplyResult= len*splitlen
    console.log("Multiply result is :",multiplyResult)
}
NewFun()