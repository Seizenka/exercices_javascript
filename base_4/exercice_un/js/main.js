document.getElementById("image1").addEventListener("mouseover", bordure);
function bordure(){

    document.getElementById("image1").style.border= "3px outset red";
}

document.getElementById("image1").addEventListener("mouseout", sansBordure);
function sansBordure(){

    document.getElementById("image1").style.border= "";

}