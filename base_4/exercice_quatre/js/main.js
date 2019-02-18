let verification = document.getElementsByTagName('button')[0];

verification.addEventListener("click", check);
function check() {

    let input = document.querySelectorAll('input');

    let motdepasse = document.getElementById("motdepasse").value;
    let confirmation = document.getElementById("confirmation").value;

    if (motdepasse != confirmation) {
        input[0].style.border = "3px solid red";
        input[1].style.border = "3px solid red";

    } else {
        input[0].style.border = "3px solid green";
        input[1].style.border = "3px solid green";

    }
}