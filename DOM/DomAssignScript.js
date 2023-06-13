
//Assignment 2
const elementTechStack=document.querySelector(`.techstack`);
elementTechStack.style.color=`red`;

//remove the 1 tech stack "Agile and JIRA "
const elementofHobbies=document.querySelector(`.list`);
//console.log(elementTechStack.innerHTML);
const elementAgile=document.querySelector(`#agile`);
console.log(elementAgile);
elementofHobbies.removeChild(elementAgile);
