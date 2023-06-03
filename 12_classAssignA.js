class Vechile {
    constructor(name, model, price,color,year){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
        this.year= year;
    }
        showDetails = function(){
            console.log(`Details is ${this.name}, ${this.model}, ${this.price}, ${this.color},${this.year} `);
        }
    }



const Vechile1 = new Vechile("celerio", "Maruti", "5 Lak", "Red","4");
const Vechile2 = new Vechile("Civic", "Honda", "5", "Blue","4");
const Vechile3 = new Vechile("Creta", "Hyundai", "5", "White","4");
const Vechile4= new Vechile("Audi", "volkswagon", "5", "Black","4");
const Vechile5= new Vechile("selitios", "Kia", "5", "Gray","4");


console.log("--------- Traversing an Object -----------");


const arrayofVehicles = [Vechile1, Vechile2, Vechile3, Vechile4, Vechile5];

for (const element of arrayofVehicles) {
    element.showDetails();
}

class College{
    constructor(name,university,city,noOfDepartment)
    {
        this.name=name;
        this.university=university;
        this.city=city;
        this.noOfDepartment=noOfDepartment;
    }
}

const College1=new College("sos of computer science","Pandit Ravishankar shukla universtiy","Raipur","15");
const College2=new College("BIT","RSU","Bhilai","8");
const College3=new College("Shankara","RSU","Bhilai","8");
const College4=new College("MATS","MATS University","Bhilai","8");

function traverseObject(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key}:  ${element}`);            
        }
    }   
}
console.log("Call the college object one by one====>")
console.log("-----------College 1--->")
traverseObject(College1);
console.log("-----------College 2--->")
traverseObject(College2);
console.log("------------College 3--->")
traverseObject(College3);
console.log("----------College 4--->")
traverseObject(College4);
