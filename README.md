# js-code-challenge
//week 1,JavvaScript Code Challenge 
Q-1
//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
i used the if conditon to determine the function to be true or false


  ////Q2.
  Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
  with the help of the math.floor which rounds down the number to the nearest integer and in mathematical computations or algorithms where you need precise whole numbers.
  if(speed<70)print(“Ok”)
else
{
print("Points:"+((speed-70)/5));
if((speed-70)/5)>12)
print(“License suspended”);
}
/////Q3.
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

Net salary calculator
This program calculates an individual’s net salary based on their basic salary and benefits. It computes deductions for PAYE (Tax), NHIF, and NSSF using rates provided by the Kenyan Revenue Authority (KRA) and other relevant sources.

Features
Input: Takes basic salary and benefits as input from the user.
Calculations: Computes PAYE (Tax), NHIF deductions based on income brackets, and NSSF deductions (fixed percentage).
Output: Displays gross salary, deductions, and net salary.
