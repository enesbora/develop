let header = document.getElementById("header");
let prgrph = document.getElementById("prgrph");
let anchor = document.getElementById("anchor");
let aContent = "Anchor content";
let prgrphContent = "Paragraph content";
let headerContent = "content";
//let section = document.getElementsByTagName('section');


function addHeaderContent() {
  for (let i = 0; i < 2; i++) {
    let text = `${headerContent} ${i + 1}`;
    header.innerText += text;
  }
}
addHeaderContent();

function addParagraphContent() {
  for (let i = 0; i < 4; i++) {
    let text = `${prgrphContent} ${i + 1}`;
    prgrph.innerText += text;
  }
}
addParagraphContent();

function anchorContent() {
  for (let i = 0; i < 7; i++) {
    let text = `${aContent} ${i + 1}`;
    anchor.innerText += text;
  }
}

anchorContent();