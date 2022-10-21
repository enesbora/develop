let header = document.createElement("h1");
let node = document.createTextNode("Learning is great!");
let parent = document.querySelector("#learnDom");
header.appendChild(node);
parent.appendChild(header);

parent.addEventListener("click", myFunction);

function myFunction() {
  parent.classList.toggle("blue");
}
