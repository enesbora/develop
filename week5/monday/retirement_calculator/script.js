document.getElementById("btn").addEventListener("click", btnOnclick);


function btnOnclick(){
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);

    if(isNaN(num3) || isNaN(num4)){
        alert("Write good numbers");
        return;
    }

    let msg = document.getElementById("output");
    let year = 2022 + num4 - num3;

    if(num4<num3)
        alert("Why are you scratching, you already retired, would you like to work more?");
    else
        msg.innerHTML = `It's 2022, so you can retire in ${year}`;
}