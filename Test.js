
let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);
console.table(entries);