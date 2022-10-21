const powercoders = [
    {
        "img" : "img/abdul.jpg",
        "name" : "Abdul",
        "eyeColor" : "Brown",
        "hobby" : "Music"

    },
    {
        "img" : "img/yuliia.jpg",
        "name" : "Yuliia",
        "eyeColor" : "Blue",
        "hobby" : "Dance"

    },
    {
        "img" : "img/oguz.jpg",
        "name" : "Oguz",
        "eyeColor" : "Black",
        "hobby" : "Guitar"

    },
    {
        "img" : "img/bilal.jpg",
        "name" : "Bilal",
        "eyeColor" : "Black",
        "hobby" : "Walking"

    },
    {
        "img" : "img/ismet.jpg",
        "name" : "Ismet",
        "eyeColor" : "Green",
        "hobby" : "Singing"

    },
    {
        "img" : "img/helene.jpg",
        "name" : "Hélène",
        "eyeColor" : "Blue",
        "hobby" : "Sailing"

    },
    {
        "img" : "img/seb.jpg",
        "name" : "Seb",
        "eyeColor" : "Green",
        "hobby" : "Coding"

    },
    {
        "img" : "img/linus.jpg",
        "name" : "Linus",
        "eyeColor" : "Green",
        "hobby" : "Cooking"

    }
]

let personArticle;
let personImage;
let personInfos


for(var i = 0; i <= powercoders.length - 1; i++){

    // Creating the article
    personArticle = document.createElement("article");
    document.body.appendChild(personArticle);

    // Creating the image of all persons
    personImage = document.createElement("img");
    personImage.src = powercoders[i].img;
    personImage.setAttribute("id", "person" + i);
    personArticle.appendChild(personImage);

    // Creating the container for the infos
    personInfos = document.createElement("div");
    personArticle.appendChild(personInfos);
    personInfos.style.display = "none";

    // Creating the infos
    const personName = document.createElement("h2");
    const personEye = document.createElement("h3");
    const personHobby = document.createElement("p");

    personName.innerHTML = powercoders[i].name;
    personEye.innerHTML = powercoders[i].eyeColor;
    personHobby.innerHTML = powercoders[i].hobby;
    
    personInfos.appendChild(personName);
    personInfos.appendChild(personEye);
    personInfos.appendChild(personHobby);

    // Checking eye color and class assignment
    const checkEyeColor = powercoders[i].eyeColor;
    switch (checkEyeColor) {
    case 'Blue':
        personArticle.setAttribute("class", "blueEyes");
        break;
    case 'Green':
        personArticle.setAttribute("class", "greenEyes");
        break;
    case 'Brown':
        personArticle.setAttribute("class", "brownEyes");
        break;
    case 'Black':
        personArticle.setAttribute("class", "blackEyes");
        break;
    default:
        personArticle.setAttribute("class", "noColor");
    } 

}

var eachPerson = document.getElementsByTagName("article");
const blueColor = document.getElementById("blue");
const greenColor = document.getElementById("green");
const brownColor = document.getElementById("brown");
const blackColor = document.getElementById("black");
const allColors = document.getElementById("all");

for (let i=0; i <= eachPerson.length - 1; i++) {

    eachPerson[i].onclick = function(e) {
        let targetElement = e.path[1];
        let elementInfos = targetElement.lastChild;
        if (elementInfos.style.display === "none") {
            elementInfos.style.display = "block";
        } else {
            elementInfos.style.display = "none";
        }   
    };
}

allColors.onclick = function() {
    for (let i=0; i <= eachPerson.length - 1; i++) {
        eachPerson[i].style.display = "block";

    }
}

blueColor.onclick = function() {
    for (let i=0; i <= eachPerson.length - 1; i++) {
        if (eachPerson[i].className == "blueEyes"){
            if(eachPerson[i].style.display === "none"){
                eachPerson[i].style.display = "block";
            }
        } else {
            eachPerson[i].style.display = "none";
        }
    }
}

greenColor.onclick = function() {
    for (let i=0; i <= eachPerson.length - 1; i++) {
        if (eachPerson[i].className == "greenEyes"){
            if(eachPerson[i].style.display === "none"){
                eachPerson[i].style.display = "block";
            }
        } else {
            eachPerson[i].style.display = "none";
        }
    }
}

brownColor.onclick = function() {
    for (let i=0; i <= eachPerson.length - 1; i++) {
        if (eachPerson[i].className == "brownEyes"){
            if(eachPerson[i].style.display === "none"){
                eachPerson[i].style.display = "block";
            }
        } else {
            eachPerson[i].style.display = "none";
        }
    }
}

blackColor.onclick = function() {
    for (let i=0; i <= eachPerson.length - 1; i++) {
        if (eachPerson[i].className == "blackEyes"){
            if(eachPerson[i].style.display === "none"){
                eachPerson[i].style.display = "block";
            }
        } else {
            eachPerson[i].style.display = "none";
        }
    }
}
