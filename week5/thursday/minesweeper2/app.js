document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let width = 10;
  let bombAmounth = 20;
  let squares = [];

  //create Board
  function createBoard() {
    //get shuffled game array with random bombs
    const bombsArray = Array(bombAmounth).fill("bomb");
    const emptyArray = Array(width * width - bombAmounth).fill("valid");
    console.log(bombsArray);
    console.log(emptyArray);
    const gameArray = emptyArray.concat(bombsArray);
    console.log(gameArray);
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5);
    console.log(shuffledArray);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();
});
