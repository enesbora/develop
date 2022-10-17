document.getElementById("btn").addEventListener("click", btnOnclick);

function btnOnclick(){
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if(isNaN(num1) || num1.length || isNaN(num1)){
      alert("Please write only numbers");
      return;
  }

  let output = document.getElementById("output");
  if(num1 > num2)
      output.innerHTML = `The greater number of ${num1} and ${num2} is ${num1}.`;
  else if(num1 < num2)
      output.innerHTML = `The greater number of ${num1} and ${num2} is ${num2}.`;
  else
      output.innerHTML = "Numbers are equal.";
}
