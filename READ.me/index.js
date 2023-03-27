function calculateGrade(){
    const marks =parseInt(document.getElementById("marks").value);
    let grade;

    if(marks>= 0 && marks <=100){
          if(marks >=80){
            grade ="A"
          }else if (marks >=60){
            grade ="B"
          }else if (marks >=50){
            grade = "C"
          }else if (marks >= 40){
             grade = "D"
          }else{
            grade = "E"
          }   
          document.getElementById("results").innerHTML = "The student`s grade is:" +grade;
        }else{
            document.getElementById("results").innerHTML ="invalid!Please enter a number between 0 and 39"

        }
          }
    
calculateGrade()

function calculateDemeritPoints(){
    //get the speed input
    const speed = document.getElementaryByID("speedinput").value;

    //calculate the number of demerit points
    let speedLimit = 70;
    let demeritPerKm = 5;
    let speedMessage =""

if(speed <= speedlimit){
    speedMessage ="ok";
}else{
    const demeritPoints = Math.floor((speed - speedLimit)/ demeritPerKm);
    if(demeritPoints>=12){
        speedmessage ="License Suspended";
    }else{
        speedMessage =`Demerit Points : ${demeritPoints}`;
    }
    }
document.getElementById("results").innerHTML = speedMessage;
}
calculateDemeritPoints();



  //This function takes in the basic salary of the individual
  function netsalary(basicsalar.benefits){
    //prompting the user to input their basic salary
    basicsalary = prompt("Please enter your basic salary:");
    //prompting the user to input their benefits
    benefits = prompt("Enter your monthly benefits:");
    //the gross pay
    grosspay =Number(basicsalary)+Number(benefits);
    //percentage of pension contribution
    let pensionContributionPercentage = 0.06
    //Deduction taken by the NHIF
    let NHIFDeduction;
    deduction taken by NSSF
    let NSSFDeduction =math.round(pensioncontributionperceentage * grosspay);
    //limit of pensionable pay for the first tier contribution to the NSSF
    let firstnssfdeductiontiermax = 18000;
    //payee
    let payee
    //the final net salary after all the deductions
    let finalnetSalary

    if(grosspay<=5999){
        nhifDeduction =150;
        console.log(`Your NHIF Deduction is ${NHIFDeduction}`)
    }else if(grossPay >=6000 && grossPay,<=7999){
        nhifDeduction=300;
        console.log(`Your NHIF Deductionis ${NHIFDeduction}`)
    }else if(grosspay >=8000 && grosspay <=11999){
        nhifDeduction =400;
        console.log(`Your NHIF Deduction is ${NIF Deduction}`)
    }else if (grosspay >=12000 && grosspay<= 14999){
        nhifDeduction =500;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if (grosspay>= 15000 && grosspay<=19999){
        nhifDeduction=600;
        console.log(`Your NHIF Deduction is ${NHIF Deduction}`)
    }else if (grosspay>=20000 && grosspay<=24999){
        nhifDeduction =750;
        console.log(`Your NHIF Deduction is ${nhif Deduction}`)
    }else if (grosspay>=30000 && grosspay<=34999){
        nhifDeduction=900;
        console.log(`Your NHIF Deduction is ${nhif Deduction}`)
    }else if (grosspay >=35000 && grosspay<=39999){
        nhifDeduction=950
        console.log(`Your NHIF Deduction is ${nhif Deduction}`)
    }else if (grosspay>=40000 && grosspay<=44999){
        nhifDeduction=1000;
        console.log(`Your NHIF Deduction is ${nhif Deduction}`)
    }else if (grosspay>=45000 && grosspay<=49999){
        nhifDeduction=1100;
        console.log(`Your NHIF Deduction is ${nhif Deduction}`)
    }else if (grosspay>=50000 && grosspay 59999){
        nhifDeduction=1200;
        console.log(`Your NHIF Deduction is ${nhif Deduction}`)
    }else if (grosspay>=60000 && grosspay<=69999){
        NHIFDeduction=1300;
        console.log(`Your NHIF Deduction is ${nhif Deduction}`)
    }else if (grosspay>=70000 && grosspay<=79999){
        nhifDeduction=1400;
        console.log(`Your NHIF Deduction is ${NHIF Deduction}`)
    }else if (grosspay>=80000 && grosspay<=89999){
        nhifDeduction=1500;
        console.log(`Your NHIF Deduction is ${NHIF Deduction}`)
    }else if (grosspay>=90000 && grosspay<=99999){
        nhifDeduction=1600;
        console.log(`Your NHIF Deduction is ${NHIF Deduction}`)
    }else if (grosspay>=100000 ){
        nhifDeduction=1700;
        console.log(`Your NHIF Deduction is ${NHIF Deduction}`)
    }
    //calculating all nssf deductions 
    if (nssfDeduction > 0 && nssfDeduction < firstnssfDeductionTierMax){
        payeTaxableIncome= grosspay - nhifDeduction -nssfDeduction
        console.log(`Your NSSF Deduction is first tier of amount ${nssfDeduction}`)
    }else if (nssfDeduction > firstnssfDeductionTierMax && nssfDeduction <=
        secondnssfDeduction payeTaxableIncome =grosspay-nhifDeduction -nssfDeduction
        console.log(`Your NSSF Deduction is second tier of amount :${nssfDeduction}`)
    }else if(nssfDeduction > secondnssfDeductionTierMax) {
     payeTaxableIncome = grosspay -nhifDeduction - secondnssfDeductionTierMax
     console.log(`Your NSSF Deduction is second tier of amount :$(secondnssfDeduction)`) 
    }
    //calculating the payee
    if (payeTaxableIncome > 0 && payeTaxableIncome <=24000){
        tax= 0.1;
        payee =Math.round(tax* payeTaxableIncome);
        finalnetsalary = payeTaxableIncome-payee;
        console.log(`Your payee is :${payee}`)
        console.log(`Your gross salary is ${grosspay}`)
        console.log(`Your Net salary is ${finalnetsalary}`)
    }else if (payeTaxableIncome >24000 && payeTaxableincome <=32333){
        tax = 0.25;
        payee=Math.round(tax *payeTaxableIncome);
        finalnetsalary = payeTaxableincome- payee;
        console.log(`Your payee is ${payee}`);
        console.log(`Your Gross salary is ${grossPay}`);
        console.log(`Your Net Salary is ${finalnetsalary}`);
    }else if (payeTaxableIncome > 32333){
        tax = 0.3
        payee = Math.round(tax* payeTaxableincome);
        finalnetsalary = payeTaxableIncome -paye
        console.log(`Your payee is ${payee}`)
        console.log(`Your Gross salary is ${grosspay}`)
        console.log(`Your Net salary is ${finalnetSalary}`)
        
    }
    