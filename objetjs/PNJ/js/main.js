
alert("Ohayo !")
let character = { 
    name: "Korra",
    age : 22,
    items_to_give : ["baton-volant"," katana"," bracelet"],
    giveItems: function(){ 
    character.items_to_give[Math.floor(Math.random() * character.items_to_give.length)]
    
    }
};
console.log(character["name"]);
console.log(character["22"]);

character.giveItems();

    for(let key in character) {
        alert(character[key])//afficher les objets de Korra
    }

