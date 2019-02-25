alert("いらっしゃいませ ! -irasshaimase- \n Bienvenue au magasin de Kisuke Urahara !");

let article = [

    sword = {
        name : "Zangetsu",
        physic : 186,
        magic : 350,
        minLevel : 15,
        available : true,
    },

    axe = {
        name : "Taurus",
        physic : 150,
        magic : 250,
        minLevel : 30,
        available : false,
    },

    sceptre = {
        name : "Ains Ool Gown",
        physic : 320,
        magic : 300,
        minLevel : 10,
        available : true,
    },

    

    spear = {
        name : "Leonidas",
        physic : 280,
        magic : 220,
        minLevel : 2,
        available : false,
    },
]

function showArticle() {
    console.log(article);
}

showArticle();
//Montrer les articles

function articleAvailable() {
    for (let i in article) {
        if (article[i].available === true) {
            alert("Ces articles sont disponibles !");
            console.log(article[i].available);
        }
    }   
   
}//les articles disponibles
articleAvailable();

function articleMinLevel10() {
    for (let i in article) {
        if (article[i].minLevel >= 10) {
            console.log(article[i].minLevel);
            alert("Ces articles ont un niveau minimum à 10 ou supérieur.");
        }
    }
}
articleMinLevel10();
//les articles qui ont un niveau 10 ou supérieur