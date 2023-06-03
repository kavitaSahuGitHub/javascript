
    let sbiBank={
        bankname: "SBI",
        location: "Pune",
        accountNo: "O1234344",
        ifsc: "SBIN0000",
        interestRate: "10%",
        showDetals: function () {
            let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
            console.log(details);
          }
    };
    let axisBank={
        bankname: "AXIS",
        location: "Nagpur",
        accountNo: "O1234344",
        ifsc: "AXISN0000",
        interestRate: "10%",
        showDetals: function () {
            let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
            console.log(details);
          }
    };
    let hdfcBank={
        bankname: "HDFC",
        location: "Bhilai",
        accountNo: "O1234344",
        ifsc: "HDFCN0000",
        interestRate: "10%",
        showDetals: function () {
            let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
            console.log(details);
          }
    };
    let yesBank={
        bankname: "YES",
        location: "Raipur",
        accountNo: "O1234344",
        ifsc: "YESN0000",
        interestRate: "10%",
        showDetals: function () {
            let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
            console.log(details);
            //return details;
          }
    };
   

console.log(`------- Invoking or calling object method----------`);
 
sbiBank.showDetals();
axisBank.showDetals();
hdfcBank.showDetals();
yesBank.showDetals();
