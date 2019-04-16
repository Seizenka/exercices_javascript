
    function requete(fichier){
        let demo = document.getElementById("demo"); 
        let xhr = new XMLHttpRequest(); 

        xhr.onreadystatechange = function(){
            console.log(this);
            if(this.readyState == 4 && this.status == 200){
                demo.innerHTML = this.responseText;
                
            } else if(this.readyState == 4 && this.status == 404){
                alert('Erreur 404..');
            }
        }

        xhr.open("GET", "async/"+fichier, true); 
        xhr.responseType = "text"; 
        xhr.send();

    }
                                    
document.getElementById("formreq").addEventListener("submit", function(e){
    e.preventDefault();

    let fichierARecuperer = document.getElementById("input-fichier").value;
    console.log(fichierARecuperer);
    requete(fichierARecuperer);
    return false; 
});