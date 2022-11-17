// const res = Promise.resolve('https://newsapi.org/v2/everything?q=bitcoin&apiKey=34854b57931248daa4e9966722c10c7f');

// res.then((data) => {
//   let parent = document.getElementById("newsBox");
//   showNewsData(data, parent);
// });

async function get(value) {
  let newSearch = value;
  let newsData = document.getElementById("newsBox");
  newsData.innerHTML = null;

  var urlEverything = 'https://newsapi.org/v2/everything?' +
          'q=' + newSearch +
          '&sortBy=publishedAt' +
          '&apiKey=34854b57931248daa4e9966722c10c7f';

  try {
    let res = await fetch(urlEverything);
    let data = await res.json();
    let s = data.articles;
    s.forEach(({ title, description, urlToImage, url }) => {
      let a = document.createElement("a");
      a.setAttribute("href", url);

      let maindiv = document.createElement("div");
      maindiv.class = "nbox";

      let div1 = document.createElement("a");
      div1.id = "title-box";
      let div2 = document.createElement("div");
      div2.id = "desc-box";
      let div3 = document.createElement("div");
      div3.id = "img-box";

      let titles = document.createElement("h3");
      titles.innerText = title;
      titles.id = "titles";
      titles.setAttribute("href", url);

      let desc = document.createElement("a");
      desc.innerHTML = description;
      desc.id = "desc";

      let img = document.createElement("img");
      img.src = urlToImage;
      img.id = "newsimg";

      div1.append(titles);
      div2.append(desc);
      div3.append(img);

      maindiv.append(div1, div2, div3);
      a.append(maindiv);
      newsData.append(a);
    });
  } catch (err) {
    console.log("err:", err);
  }
}

function handleKeyPress(e){
  var key=e.keyCode || e.which;
  if (key === 13){ // Enter
    get(document.getElementById('inputBox').value);
  }
}
