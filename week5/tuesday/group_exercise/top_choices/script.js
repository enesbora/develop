let topChoices = ["blue", "land rover", "python"];

for (let i = 0; i < topChoices.length; i++) {
  let fav = topChoices[i];
  if (i === 0) {
    console.log(`My favorite color is ${fav}`);
  } else if (i === 1) {
    console.log(`My favorite car brand is ${fav}`);
  } else if (i === 2) {
    console.log(`My favorite programmig language is ${fav}`);
  }
}
