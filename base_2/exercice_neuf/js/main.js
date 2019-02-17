function testWhile() {

    let string = prompt('Veuillez entrer un texte avec la lettre p');
    let n = string.search("p");

    while (n == -1) {
        let string = prompt('Veuillez entrer un texte avec la lettre p');
        let n = string.search("p");
    }

    alert('"' + string + '"');


}