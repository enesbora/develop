const days = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

function getLastValue(array) {
  array.sort();
  let lastElm = array[array.length - 1];
  console.log(lastElm);
}

getLastValue(days);
