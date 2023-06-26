


const elementPersonal=document.getElementById("personal");
console.log(elementPersonal);

const elementNameByClass=document.getElementsByClassName("name");
console.log(elementNameByClass.innerHTML);

//getElementsByName is depricated
//const elementH3=document.getElementsByName("h3");


//QuerySelector()
//querySelectorAll()
const elementH3=document.querySelectorAll("p");
console.log(elementH3[0].innerHTML);

console.log(`Personal details by # selector`)
const elementPer=document.querySelector('#personal');
console.log(elementPer);

console.log(`Personal details by class selector`)
const elementName=document.querySelector(".name");
console.log(elementName.innerHTML);

console.log(`Personal details by name selector`)
const elementH31=document.querySelector("h3");
console.log(elementH31.innerHTML);

console.log(`========ocument.querySelectorAll('p')================`)

const elementsPara=document.querySelectorAll('p')
for (const element of elementsPara) {
    console.log(element.innerHTML);   
}


console.log(`======slect multiple element=============`);
const elementsCeo=document.querySelectorAll(".ceo");
//console.log(elementsCeo[1].innerHTML);
elementsCeo.forEach((element)=>{
    console.log(element.innerHTML);
});
/*
for (const element of elementsCeo) {
    console.log(element.innerHTML);   
}*/



console.log(`Updating an element city`);
const elementCity=document.querySelector("#city");
console.log(elementCity);
elementCity.innerHTML="My CITY test: Hyd";
console.log(elementCity);
let n1=200;
n1=300;

console.log(`Changing an element attribute`)
const elementLink=document.querySelector(`.link`);
elementLink.setAttribute(`href`, `https://www.linkedin.com/login`);

console.log(`chaning CSS properties using DOM`);
const elementAddress=document.querySelector(`#address`);
elementAddress.style.color='green';
elementAddress.style.fontFamily=`sans-serif`;

console.log(`Removing element from DOM tree`);
const elementHobies=document.querySelector(`.hobbies`);
const elementCricket=document.querySelector(`#cricket`);
console.log(elementCricket)
//removing child element using paraent element
elementHobies.removeChild(elementCricket);

console.log(`Creating Node`);
const elementtimePass=document.createElement(`p`);
const textNodeTimePass=document.createTextNode("Time pass is also my hobby, Please dont laugh!!!");
elementtimePass.appendChild(textNodeTimePass);

elementHobies.appendChild(elementtimePass);

//alert events
const elementContact= document.querySelector('#contact');
elementContact.addEventListener(`click`, ()=>{
    alert(`Hey you touched me!!`)
    elementContact.style.color=`green`;
});

function show(){
    alert(`IOn click function`);
}
