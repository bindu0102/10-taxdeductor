function cube(){
    let salary = document.getElementById("salary").value;

    let fullAmount = document.getElementById("fullAmount");
    let taxDeducted = document.getElementById("taxDeducted");
    let finalSalary = document.getElementById("finalSalary");
    let result = salary * 0.1;
    let handSalary = salary-result
   
    fullAmount.innerHTML="Total Salary:"+salary
    taxDeducted.innerHTML=" 10 % TaxDeducted :"+result

    finalSalary.innerHTML="HandSalary :"+handSalary
}