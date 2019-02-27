function draw(){
    let c = document.getElementById("mon_canvas");
    let ctx = c.getContext("2d");

    //cheminée
    ctx.beginPath();
    ctx.moveTo(250,60);
    ctx.lineTo(280,60);
    ctx.lineTo(280,120);
    ctx.lineTo(250,120);
    ctx.fillStyle = "gray";
    ctx.fill();

    //toit de la maison
    ctx.beginPath();
    ctx.moveTo(100,120);
    ctx.lineTo(300,120);
    ctx.lineTo(350,180);
    ctx.lineTo(50,180);
    ctx.fillStyle = "brown";
    ctx.fill();

    //façade de la maison
    ctx.beginPath();
    ctx.moveTo(50,180);
    ctx.lineTo(350,180);
    ctx.lineTo(350,300);
    ctx.lineTo(50,300);
    ctx.fillStyle = "orange";
    ctx.fill();

    //porte
    ctx.beginPath();
    ctx.moveTo(150,240);
    ctx.lineTo(190,240);
    ctx.lineTo(190,300);
    ctx.lineTo(150,300);
    ctx.fillStyle = "lightblue";
    ctx.fill();

    //fenêtre 1
    ctx.beginPath();
    ctx.moveTo(80,250);
    ctx.lineTo(120,250);
    ctx.lineTo(120,280);
    ctx.lineTo(80,280);
    ctx.fillStyle = "lightblue";
    ctx.fill();

    //fenêtre 2
    ctx.beginPath();
    ctx.moveTo(240,250);
    ctx.lineTo(320,250);
    ctx.lineTo(320,280);
    ctx.lineTo(240,280);
    ctx.fillStyle = "lightblue";
    ctx.fill();
}