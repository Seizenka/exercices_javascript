/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = function (texte) {
    return texte.length;
}
let remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = function (texte1, texte2) {
   return texte1+texte2;
   
}
let afficherCar5 = function (texte) {
    return (texte[4]);
}
let afficher9Car = function (texte) {
    return texte.slice(0,9);
}
let majusculeString = function (texte) {
    return texte.toUpperCase();
}
let minusculeString = function (texte) {
    return texte.toLowerCase();
}
let SupprEspaceString = function (texte) {
    return texte.replace(/(^\s*)|(\s*$)/g,"");
}
let IsString = function (texte) {
    return typeof texte === "string";
}

let AfficherExtensionString = function (texte) {
    return texte.slice(15,18);
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
let valeurAbsolue = function (nombre) {
    return Math.abs(nombre);

}
let valeurAbsolueArray = function (array) {
    for (i=0; i < array.length; i++) {
        array[i] = Math.abs(array[i]);
    }
    return array
}
let sufaceCercle = function (rayon) {
    return Math.round(Math.PI * (rayon * rayon));
}
var hypothenuse = function (ab, ac) {
    return (Math.sqrt((ab * ab) + (ac * ac)));
   
}
let calculIMC = function (poids, taille) {
    let a = Math.pow(taille, 2);
     return Number(((poids)/(a)).toFixed(2));

}