//---PRIMFX---//
//Tuto#14 l'objet XMLHttpRequest//


let demo = document.getElementById("demo"); //Recherche la donnée dans le DOM 
let xhr = new XMLHttpRequest(); //l'objet XMLHttpRequest

xhr.onreadystatechange = function(){
//traitement de la requête
    console.log(this);
    if(this.readyState == 4 && this.status == 200){
        // demo.innerHTML = JSON.stringify(this.response);//-----JSON.stringify pour convertir en chaîne de caractères ---//On affiche le texte dans notre requête via HTML
        //console.log(JSON.parse(this.response)); //-----Conversion du texte en JSON (JSON.parse)
        let data = this.response;
        let utilisateurs = data.utilisateurs;
        console.log(utilisateurs);
        for (let i = 0; i < utilisateurs.length; i++){
            //Faire apparaître les utilisateurs un par un avec une boucle
            demo.innerHTML += utilisateurs[i].prenom + "("+ utilisateurs[i].age +")";
        }
    } else if(this.readyState == 4 && this.status == 404){
        alert('Erreur 404..');
    }
}

xhr.open("GET", "async/donnees.txt", true); //On ouvre le fichier ---via la méthode GET ---True car on veut une asynchrone
xhr.responseType = "json"; //On spécifie le type de fichier --- ici du texte ou JSON directement au lieu de faire JSON.parse

xhr.send();//Envoyer la requête

