/*var string= "in Interview";
var count;
for (let i=0 i<string.length i++)
{
if	(charAt[i]=="i")
{
count++
}
}
console.log(count);

*/
//person - name, age, city and array of certificates
//CODEMIND Technology LLP7:15 AM
const array = [2, 4, 5, 8, 9, 10, 2, 8, 10]
const person=["name","age", "city", "arrayofcer"]

let filterdArr=array.filter(
    (c,index)=>{
        return array.indexOf(c)!==index
    }
);
console.log(filterdArr);


array.splice(5,4);
console.log(array);


//count the array value
let total=0;
const totalArray=array.reduce((i,currval)=>i+currval,total);
console.log(totalArray);