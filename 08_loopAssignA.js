var word = "I am very good IT Developer";
console.log(`The given string for vowels check is : ${word}`)
var count = 0;
//a e i o u == A E I O U
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
  
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
    {
        //console.log(char);
        count++;
    }
}
console.log("Point 1:");
console.log(`count total vowels: ${count}`);
console.log("Point 2:");
FunCountOfCube();
function FunCountOfCube(){
var countOfCube = 0;
for(let i = 1; i <= 5; i++)
{
    var cube=i*i*i;
    console.log(`cube of ${i} is : ${cube}`);
    countOfCube=countOfCube + cube;   
}
console.log(`Count of cube is : ${countOfCube}`);
}
console.log("Point 3.1.1:");
var str1="Hard work always pays back";
var str2="Soon i will be Angular IT Champ";
function oddPositionChars(word){
    var outputString="";
    for (let index = 0; index < word.length; index++) {
        var char = word.charAt(index);    
        
            if(index%2==0 && char!=' ')
            {
                outputString=outputString+word[index]; 
               
               // console.log(word[index]);                
            }            
          
           // count++;        
    }
    console.log(`The odd position string of String  is --${outputString}`);    
}
console.log("Point 3.1.2:");
oddPositionChars(str1);
oddPositionChars(str2);
