document.getElementById("btn").addEventListener("click", btnOnclick);


function btnOnclick(){
    let s = document.getElementById("lang");
    switch (s.value) {
        case 'en':
            document.getElementById("output").innerHTML = "Hello World!"
            break;
        case 'de':
            document.getElementById("output").innerHTML = "Hallo Weld!" 
            break;
        default:
            document.getElementById("output").innerHTML = "Merhaba Dünya!" 
            break;
    }
}