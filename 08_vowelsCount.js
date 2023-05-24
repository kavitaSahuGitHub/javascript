var word = "JavaScript Language of Internet";
var count = 0;
//a e i o u == A E I O U
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
  
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
    {
        console.log(char);
        count++;
    }
}
console.log(`count total vowels: ${count}`);