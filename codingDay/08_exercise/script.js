
function reversedNum(num) {
  let reversedNumber =
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
  return console.log(reversedNumber);
}

reversedNum(-23);
reversedNum(12344645);
reversedNum(-443);