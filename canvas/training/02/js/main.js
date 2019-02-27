function draw() {
    let c = document.getElementById("mon_canvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(150,80);
    ctx.lineTo(300,230);
    ctx.lineTo(150,300);
    ctx.closePath();
    ctx.fillStyle = "lightblue";
    ctx.fill();

    //coque du bâteau
    ctx.beginPath(); //début d'une autre chemin
    ctx.moveTo(50,250);
    ctx.lineTo(100,300);
    ctx.lineTo(250,300);
    ctx.lineTo(300,250);
    ctx.fillStyle = "peru";
    ctx.strokeStyle = "sienna"; // Définition de la couleur de contour
    ctx.lineWidth = 5;         // Définition de la largeur de ligne
    ctx.fill();            // Application du remplissage
    ctx.stroke();          // Application du contour
}