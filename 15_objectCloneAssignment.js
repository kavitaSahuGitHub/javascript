
const arrayNums = [20, 3, 4, 56, 90, 400, 49 ];
console.log("Original array--------->")
console.log(arrayNums);
console.log("Shallow Clone---------->")
const clonedArray = arrayNums; // Shallow clone
clonedArray.push(55,66);
console.log("shallow cloned Array")
console.log(clonedArray);
console.log("Deep Clone------------->")
const deepClonedArray = [...arrayNums];
deepClonedArray.push(10,25);
console.log("Original Array")
console.log(arrayNums);
console.log("Deep cloned array---")
console.log(deepClonedArray);

 const arrayEven=[2,30,14,8];
 console.log("Original arrayEven array:");
 console.log(arrayEven);
 console.log("Merge this arrayEven with arrayNums")
 const mergeArray = [...arrayEven, ...arrayNums];
 console.log(mergeArray);
//--------------------------------------------------------------------
console.log("----------Employee Info----------------");
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    Salary:{
        july_month:"40,000",
        aug_month:"50,000",
        jun_month:"65,000",
        },
    address:{
        locality: {
            colony:"Om Vrindavan Society",
            street:"abc,411057",
        },
        cityname:"Mumbai",
        state: "MH",
        country: "India"
    },
    mobiles: ["+91 70280 232 88","1800-4567 32", "+91- 9086 5678 77"]
}

//console.log(employee_info.address.locality);
//console.log(`${employee_info.address.cityname}`);
console.log("Original employee info--------->")
console.log(`Locality:${employee_info.address.locality.colony} ${employee_info.address.locality.street}, City:${employee_info.address.cityname}, State:${employee_info.address.state}, Country:${employee_info.address.country}`);
console.log(`${employee_info.mobiles}`);
console.log(`Deep copy------------------>`);

console.log(`Original country : ${employee_info.address.country}`)
console.log(`Original july month salary-${employee_info.Salary.july_month}`)
const employee_info_clone = JSON.parse(JSON.stringify(employee_info));
employee_info_clone.Salary.july_month="80,000"


employee_info_clone.address.country="United Kingdom";
console.log(`Locality:${employee_info_clone.address.locality.colony} ${employee_info_clone.address.locality.street}, City:${employee_info_clone.address.cityname}, State:${employee_info_clone.address.state}, Country:${employee_info_clone.address.country}`);

console.log(`Updated Country on cloned object:${employee_info_clone.address.country}`)
console.log(`Updated july month salary on cloned object- ${employee_info_clone.Salary.july_month}`);