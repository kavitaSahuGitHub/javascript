const elementPersonal=document.getElementById("personal");
console.log(elementPersonal);

const elementNameByClass=document.getElementsByClassName("name");
console.log(elementNameByClass.innerHTML);

//getElementsByName is depricated
//const elementH3=document.getElementsByName("h3");


//QuerySelector
//querySelectorAll()
const elementH3=document.querySelectorAll("p");
console.log(elementH3[0].innerHTML);

const elementPer=document.querySelector('#personal');
console.log(elementPer);

const elementName=document.querySelector(".name");
console.log(elementName.innerHTML);

const elementH31=document.querySelector("h3");
console.log(elementH31.innerHTML);

console.log(`========ocument.querySelectorAll('p')================`)

const elementsPara=document.querySelectorAll('p')
for (const element of elementsPara) {
    console.log(element.innerHTML);   
}

console.log(`======slect multiple element=============`);
const elementsCeo=document.querySelectorAll(".ceo");
elementsCeo.forEach((element)=>{
    console.log(element.innerHTML);
});


