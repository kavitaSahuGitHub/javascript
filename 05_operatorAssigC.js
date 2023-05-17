function TcsInterviewEligibility(score,hsc,ssc, candidateName){
   // var result = (gender=="Female" && age>=18)  ? `Hey ${girlname} You are eligible for Marriage` : `Hey ${girlname} No you are not eligible for Marriage`;
    var result = (score>=70 || hsc>=80 || ssc>=90)  ? `Congrates ${candidateName} You are eligible for Interview` : `Congrates ${candidateName} No you are not eligible for Interview`;
    
    return result;
    console.log(`${result}`);
}
var returnValue=TcsInterviewEligibility(80,86,90,"Kavita Sahu");
console.log(`${returnValue}`)

var returnValue1=TcsInterviewEligibility(70,65,55,"ABC");
console.log(`${returnValue1}`)

var returnValue1=TcsInterviewEligibility(60,79,88,"XYZ");
console.log(`${returnValue1}`)