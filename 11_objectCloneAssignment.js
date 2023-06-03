const bankSbi = {
    bankname: "SBI",
    branchCode: "SBIT",
    accountNo: "O1234344",
    ifsc: "SBIN0000",
}
console.log(`1. Create object banksbi--`)
console.table(bankSbi);

const bankLocation = {
street:"abc",
city:"Pune",
Pin:"411057"
}
console.log(`2. Create object bank location--`)
console.table(bankLocation);

console.log("3. Clone object banksbi and bank location");
Object.assign(bankSbi,bankLocation);
console.table(bankSbi);

console.log("4. Create object Rate of interest");
const rateOfInterst ={
    homeLoanInterest:"12%",
    personalLoanInterest:"11%",
    dueInterest:"9%"
}

const sbiDetails = Object.assign(bankSbi, bankLocation,rateOfInterst); // Copy address and marks into the new object - mergedObject
console.log(`5. Merge all the three object`)
console.log(sbiDetails);


console.log("--------- Traversing an Object -----------");
for (const key in sbiDetails) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}



  




