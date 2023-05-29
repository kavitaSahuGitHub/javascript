let professor = {
    name:"ABC",
    age:"44",
    city:"pune",
    height:"6 ft",
isMarried:true,
degrees: {
Engineering:"CSC",
PHD:"Adv Computing"
},
certificates:["Hacker Rank Participation","Certification in IFE course","Certificate in Adv Programming"],
AllDegree: function(){
    console.log(`Teacher Degrees are: ${this.degrees.Engineering}, ${this.degrees.PHD}`)
}
};

console.log(`Type of professor is ${typeof professor}`);
//console.log(`------- Accessing object properties----------`);
console.log(`------- Invoking or calling object method----------`);
professor.AllDegree();

console.log(`------- Adding object properties----------`);
professor.totalExperience = "14 Years";
console.log(`Total experience of professor is :${professor.totalExperience}`)

console.log(`------- Modify object properties----------`);
professor.name = "XYZ";
professor.isMarried = false;
console.log(`professor name is : ${professor.name}`);
console.log(`professor married status is : ${professor.isMarried}`);

console.log(`Add the new certificate at the end --->`);
professor.certificates.push("Oracle Certified");
console.log(`All certificates are: ${professor.certificates}`);

console.log(`Last certificate`);
var length=professor.certificates.length;
console.log(`Last certificates is: ${professor.certificates[length-1]}`);