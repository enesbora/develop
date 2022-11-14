let nav = document.querySelector("nav");
let h1 = document.querySelector("h1");
let p = document.querySelector("main p");

nav.addEventListener("click", setCounter);

function setCounter(e) {
  p.innerText = "";
  let selectedOption = e.target.innerText;
  let minute = 0;

  switch (selectedOption) {
    case "20 SEC":
      minute = 1 / 3;
      break;
    case "WORK 5":
      minute = 5;
      break;
    case "QUICK 15":
      minute = 15;
      break;
    case "SNACK 20":
      minute = 20;
      break;
    case "LUNCH BREAK":
      minute = 60;
      break;
    default:
      break;
  }

  let selectedTime = new Date(
    new Date().getTime() + (minute * 60000 + 2000)
  ).getTime();

  let getCounterPerSecond = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = selectedTime - now;

    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    h1.innerHTML = minutes + ":" + seconds;

    // If the count down is over, write some text
    if (distance < 1000) {
      clearInterval(getCounterPerSecond);
      p.innerText = "Time is up!";
      h1.innerText = "0:0";
    }
  }, 1000);
}
