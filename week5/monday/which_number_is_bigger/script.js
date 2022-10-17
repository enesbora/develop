document.getElementById("btn").addEventListener("click", btnOnclick);

function btnOnclick(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  if(isNaN(num1) || num1.length || isNaN(num1)){
      alert("Please write only numbers");
      return;
  }

  let msg = document.getElementById("output");
  if(num1 > num2)
      msg.innerHTML = `The greater number of ${num1} and ${num2} is ${num1}.`;
  else if(num1 < num2)
      msg.innerHTML = `The greater number of ${num1} and ${num2} is ${num2}.`;
  else
      msg.innerHTML = "Numbers are equal.";
}
