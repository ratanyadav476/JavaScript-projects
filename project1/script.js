const calsy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let totalGrade = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);

    let percentage = (totalGrade / 400) * 100 ;
    

    //  find grade 
    let grade = '';
    if (percentage <= 100 && percentage >= 80) {
        grade = 'A'
    } else if (percentage <= 79 && percentage >= 60) {
        grade = 'B'
    } else if (percentage <= 59 && percentage >= 40) {
        grade='C'
    }else{
        grade = 'F'
    }  
let result=document.getElementById('showData');
   
    if (percentage >= 39.5) {
        
        result.innerHTML = `Out of 400 your total mark is ${totalGrade}  and percentage is ${percentage}' <br> your grade is ${grade}%</br> '. you are pass`;
    } else {
      
        result.innerHTML = `Out of 400 your total mark is ${totalGrade} and percentage is ${percentage} '<br> your grade is ${grade}% </br>'. you are fail`;
    }
}
