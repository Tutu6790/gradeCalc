// let gradeCalc =
    // function gradeCalc (score, totalScore) {
    // let percent = (score / totalScore) * 100
    // let letterGrade = ``
    
        function calculate() {
            var score = document.forms["myForm"]["score"].value;
            var tScore = document.forms["myForm"]["tScore"].value;
            var percent = (score / tScore) * 100;
            
            if(score > tScore) {
                document.getElementById('calc').innerHTML = `Score cannot be greater than your total score`;
                return true;
            } else if (percent >= 90 && score < tScore) {
                 document.getElementById('calc').innerHTML = `You got an A (${percent}%)`;
                 return false;
           } else if (percent >= 80 && score < tScore) {
                document.getElementById('calc').innerHTML = `You got a B (${percent}%)`;
                return false;
           } else if (percent >= 70 && score < tScore) {
                document.getElementById('calc').innerHTML = `You got a C (${percent}%)`;
                return false;
           } else if (percent >= 60 && score < tScore) {
                document.getElementById('calc').innerHTML = `You got a D (${percent}%)`;
                return false;
           } else if (percent >= 50 && score < tScore) {
                document.getElementById('calc').innerHTML = `You got an E (${percent}%)`;
                return false;
           }  else if (percent >= 10 && score < tScore) {
                document.getElementById('calc').innerHTML = `You got an F (${percent}%)`;
                 return false;
           } else {
            document.getElementById('calc').innerHTML = `*invalid`;
                 return false;
           }
        }
        
            

                // if (percent >= 90) {
                //      letterGrade = `A`
                //     // return `You get a A (${percent}%)!`
                // } else if (percent >= 80) {
                //     letterGrade = `B`  
                // } else if (percent >= 70) {
                //     letterGrade = `c`
                // } else if (percent >=60) {
                //     letterGrade = `D`
                // } else {
                //     letterGrade = `F`
                // }

//     return `You got a ${letterGrade} (${percent}%)!`
// }

//     let result = gradeCalc()
//     document.write(result)