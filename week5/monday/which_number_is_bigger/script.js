function greaterNum() {
  let value1;
  let value2;
  value1 = document.First_num.value;
  value2 = document.last_num.value;
  if (value1 > value2) {
    alert("Value 1 is greater than value 2");
    document.body.style.background = "orange";
  }
}
