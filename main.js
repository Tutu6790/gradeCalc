function calculate() {
     var score = document.getElementById("score").value;
     var total = document.getElementById("total").value;
     var percent = (score * total) / 100;

     document.querySelector('#percent').innerHTML = `You got ${percent} %`;

     if (score == "" || total == "") {
          alert("Invalid details");
     }
}