//const basicSalary=parseFloat('Enter basic salary:'); 
const benefit = parseFloat('Enter benefits:');{
//if (is NaN(basicSalary)||is NaN(benefits))
console.log('inavalid input.Please enter a valid basic salary and benefits.')
else if (basicSalary <= 0 || benfits <= 0) {
  console.log("invalid input.Basicsalary and benefits must be greater than 0");
} else {
  //gross salary 
  const grossSalary = basicSalary + benefits;
  console.log(`Gross Salary: ${grossSalary}`)
}
//paye tax
let paye = o;
if (grossSalary <= 28895) {
  paye = grossSalary * 0.1
} else if (grossSalary <= 38895) {
  paye = 2889.5 = (grossSalary - 28895) * 0.2
} else if (grossSalary <= 71695) {
  paye = 10889.5 + (grossSalary - 56395) * 0.25
} else {
  paye = 15189.5 + (grossSalary - 716965) * 0.3
}

//paye results 
console.log(`PAYE: ${paye}`);
//NHIF DEDUCTIONS 
const nhifDeductions = 0;
//gross pay upto 5999
if (grossSalary <= 5999) {
  nhifDeductions = 150;
}
//gross pay of 8000 to 11999
else if (grossSalary <= 11999) {
  nhifDeductions = 400;
}
//gross pay of 12000 to 14999
else if (grossSalary <= 14999) {
  nhifDeductions = 500;
}
//gross pay of 15000 to 19999
else if (grossSalary <= 19999) {
  nhifDeductions = 600;
}//gross to pay of 20000 to 24999
else if (grossSalary <= 24999) {
  nhifDeductions = 750;
}
//gross pay of 25000 t0 29999
else if (grossSalary <= 29999) {
  nhifDeductions = 850;
}
//gross pay of 30000 to 34999
else if (grossSalary <= 34999) {
  nhifDeductions = 900;
}
//gross pay of 35000 to 39999
else if (grossSalary <= 39999) {
  nhifDeductions = 950;
}
//gross pay of 40000 t0 44999
else if (grossSalary <= 44999) {
  nhifDeductions = 1000;
}
//gross to pay of 45000 to 49999
else if (grossSalary <= 49999) {
  nhifDeductions = 1100;
}
//gross pay of 50000to 59999
else if (grossSalary <= 59999) {
  nhifDeductions = 1200;
}
//gross pay of 60000 to 69999
else if (grossSalary <= 69999) {
  nhifDeductions = 1300;
}
///gross pay of 70000to 79999
else if (grossSalary <= 79999) {
  nhifDeductions = 1400;
}
//gross to pay of 80000 to 89999
else if (grossSalary <= 89999) {
  nhifDeductions = 1500;
}
///gross to pay of 90000 to 99999
else if (grossSalary <= 99999) {
  nhifDeductions = 1600;
}
//gross above 100000
else {
  nhifDeductions = 1700;
}

///nhifDeductions results 
console.log(`NHIF Deductions: ${nhifDeductions}`);

//NSSF DEDUCTIONS
const nssfDeductions = grossSalary * 0.06;
//results
console.log(`NSSf Deductions: ${nssfdeductions}`);

//Housing Levy
const housingLevy = grossSalary * 0.015
//results
console.log(`Housing levy: ${housingLevy}`);

//Net Salary 
const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions - housingLevy;
//results 
console.log(`Net Salary: ${netSalary}`)
  }