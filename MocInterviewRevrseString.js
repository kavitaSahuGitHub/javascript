
function ReverseString(inputString)
{
    lenghtOfString=inputString.length;
    console.log(`length of string is : ${lenghtOfString}`);
    var outputString="";
    for(var i = lenghtOfString-1; i>=0 ; i--)
    {
        if((inputString[i])!=" "){
            outputString=outputString+inputString[i]; 
        }
  
    }
    console.log(`Reverse string is : ${outputString}`);
}
var inputString="kavita sahu";
ReverseString(inputString);